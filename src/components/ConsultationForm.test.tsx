import { readFileSync } from 'node:fs'
import { useState } from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ConsultationForm } from './ConsultationForm'
import { consultationForm } from '../data/site'

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

function Form() {
  const [service, setService] = useState('tatime')
  const [pkg, setPkg] = useState('rritje')
  return (
    <ConsultationForm
      serviceSlug={service}
      onServiceChange={setService}
      packageId={pkg}
      onPackageChange={setPkg}
    />
  )
}

async function fill() {
  render(<Form />)
  const user = userEvent.setup()
  await user.type(screen.getByLabelText('Emri dhe mbiemri'), 'Arta Kelmendi')
  await user.type(screen.getByLabelText('Email'), 'arta@shembull.al')
  await user.type(screen.getByLabelText('Telefon'), '+355691112233')
  await user.type(
    screen.getByLabelText('Na tregoni shkurt për biznesin tuaj'),
    'SHPK në tregti me 4 punonjës.',
  )
  return user
}

describe('formulari i konsultës', () => {
  it('dërgon kërkesën me shërbimin dhe paketën e zgjedhur', async () => {
    const fetch = vi.fn().mockResolvedValue(new Response('OK'))
    vi.stubGlobal('fetch', fetch)
    const user = await fill()
    await user.click(screen.getByRole('button', { name: /Dërgo kërkesën/ }))
    await screen.findByText('Faleminderit!')
    const [url, init] = fetch.mock.calls[0]
    expect(url).toBe(consultationForm.endpoint)
    const fields = Object.fromEntries(new URLSearchParams(init.body))
    expect(fields['form-name']).toBe('kerkese-konsulence')
    expect(fields.service).toBe('tatime')
    expect(fields.package).toBe('rritje')
    expect(fields.subject).toBe('Kërkesë për konsultë: Deklarime tatimore')
  })

  it('ruan të dhënat pas një gabimi', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('', { status: 500 })))
    const user = await fill()
    await user.click(screen.getByRole('button', { name: /Dërgo kërkesën/ }))
    await screen.findByRole('alert')
    expect(
      (screen.getByLabelText('Emri dhe mbiemri') as HTMLInputElement).value,
    ).toBe('Arta Kelmendi')
  })

  it('përputhet me regjistrimin statik të formularit', () => {
    const { container } = render(<Form />)
    const form = container.querySelector('form')!
    const registration = new DOMParser()
      .parseFromString(readFileSync('public/__forms.html', 'utf8'), 'text/html')
      .querySelector('form')!
    for (const attribute of ['name', 'method', 'data-netlify', 'netlify-honeypot'])
      expect(form.getAttribute(attribute)).toBe(registration.getAttribute(attribute))
    const names = (element: Element) =>
      [...element.querySelectorAll('[name]')]
        .map((field) => field.getAttribute('name'))
        .sort()
    expect(names(form)).toEqual(names(registration))
  })
})
