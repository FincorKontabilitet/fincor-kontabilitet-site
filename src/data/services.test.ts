import { describe, expect, it } from 'vitest'
import services, { findService, recommendPackage } from './services'

describe('shërbimet', () => {
  it('gjen shërbimet sipas slug-ut të saktë', () => {
    for (const service of services) expect(findService(service.slug)).toBe(service)
    expect(findService('nuk-ekziston')).toBeUndefined()
  })

  it('rekomandon paketën sipas madhësisë së biznesit', () => {
    expect(recommendPackage({ invoices: 20, employees: 1, isCompany: false })).toBe('start')
    expect(recommendPackage({ invoices: 20, employees: 1, isCompany: true })).toBe('rritje')
    expect(recommendPackage({ invoices: 90, employees: 6, isCompany: true })).toBe('rritje')
    expect(recommendPackage({ invoices: 200, employees: 3, isCompany: true })).toBe('korporate')
  })
})
