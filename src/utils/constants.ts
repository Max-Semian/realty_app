// Constants for routing and paths
export const APP_BASE_PATH = '/realty_app';

// Helper function to get the correct path including base path
export const getPath = (path: string): string => {
  // Remove leading slash if path starts with one
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // Always include the base path (for both dev and production)
  return `${APP_BASE_PATH}/${cleanPath}`;
};

// Helper to check if we're on the homepage
export const isHomePage = (pathname: string): boolean => {
  // Remove trailing slash if present
  const normalizedPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  
  // Check against possible homepage paths
  return (
    normalizedPath === APP_BASE_PATH || 
    normalizedPath === `${APP_BASE_PATH}/`
  );
};