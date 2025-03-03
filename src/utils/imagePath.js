/**
 * Utility function to handle image paths correctly for both local development and GitHub Pages
 * This ensures images work in both environments by prepending the base path when needed
 * @param {string} path - The image path relative to the public directory
 * @returns {string} The correct path for the current environment
 */
export function getImagePath(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Handle special characters in filenames
  // Replace spaces with %20 and special characters like Ø with their encoded versions
  const encodedPath = cleanPath
    .split('/')
    .map((segment, index, array) => {
      // Only encode the filename (last segment), not the directories
      if (index === array.length - 1) {
        // Manually handle known special characters in our filenames
        return segment
          .replace(/Ø/g, '%C3%98')
          .replace(/ø/g, '%C3%B8')
          .replace(/Æ/g, '%C3%86')
          .replace(/æ/g, '%C3%A6')
          .replace(/Å/g, '%C3%85')
          .replace(/å/g, '%C3%A5')
          .replace(/ /g, '%20');
      }
      return segment;
    })
    .join('/');
  
  // In development, use the path as is (with leading slash)
  // In production, prepend the base path from Vite config
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${encodedPath}`;
}
