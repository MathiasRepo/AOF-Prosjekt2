/**
 * Utility function to handle image paths correctly for both local development and GitHub Pages
 * This ensures images work in both environments by prepending the base path when needed
 * @param {string} path - The image path relative to the public directory
 * @returns {string} The correct path for the current environment
 */
export function getImagePath(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development, use the path as is (with leading slash)
  // In production, prepend the base path from Vite config
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${cleanPath}`;
}
