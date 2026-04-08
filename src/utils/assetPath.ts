/** Base-aware path for files in `public/` */
export function assetPath(relativePath: string): string {
  const base = import.meta.env.BASE_URL
  const path = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath
  return `${base}${path}`
}
