// Serves images from public/img through the Netlify Image CDN as resized WebP.
export function cdn(path: string, width: number) {
  return `/.netlify/images?url=${encodeURIComponent(path)}&w=${width}&fm=webp`
}

export function cdnSrcSet(path: string, widths: Array<number>) {
  return widths.map((w) => `${cdn(path, w)} ${w}w`).join(', ')
}
