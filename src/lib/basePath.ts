/**
 * Base path for GitHub Pages deployment.
 * All asset URLs and internal links must use this prefix in production.
 */
export const basePath =
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_BASE_PATH) || '';

/**
 * Returns the full URL for a static asset (images, audio, PDFs, etc.).
 * Use this for <img src>, <audio src>, and any path under /images, /audio, /PDF, etc.
 */
export function assetUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${p}`;
}
