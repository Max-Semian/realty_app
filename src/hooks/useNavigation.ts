import { usePathname } from 'next/navigation';
import { APP_BASE_PATH, isHomePage } from '../utils/constants';

export const useNavigation = () => {
  const pathname = usePathname();
  
  // Function to handle smooth scrolling to an element
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    
    const headerHeight = window.innerWidth <= 768 ? 90 : 70;
    const extraPadding = 20;
    
    const y = element.getBoundingClientRect().top + window.scrollY - (headerHeight + extraPadding);
    
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
    
    // Update URL without triggering a scroll
    window.history.pushState(null, '', `${pathname}#${id}`);
  };
  
  // Handle navigation for anchor links
  const handleAnchorNavigation = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    // If we're on the homepage, just scroll to the element
    if (isHomePage(pathname)) {
      scrollToElement(id);
      return;
    }
    
    // If we're on a different page (like about-us), 
    // we must navigate to the main page with the anchor
    // Force a full navigation, not just a URL update
    window.location.href = `${APP_BASE_PATH}/#${id}`;
  };
  
  return {
    pathname,
    isHomePage: isHomePage(pathname),
    scrollToElement,
    handleAnchorNavigation
  };
};