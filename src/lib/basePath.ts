/**
 * Base path for GitHub Pages deployment.
 * All asset URLs, internal links, and data fetches must use this prefix in production.
 */
export const basePath =
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_BASE_PATH) || '';

/**
 * Returns the full URL for a static asset (images, audio, PDFs, etc.).
 * Use this for <img src>, <audio src>, <a href> to assets, and any path under /images, /Audio, /PDF, etc.
 */
export function assetUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${p}`;
}

/**
 * Returns the full path for internal routes and data (e.g. fetch).
 * Use for client-side fetch URLs so links and data load correctly with base path.
 */
export function pathWithBase(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${p}`;
}
