
import { useEffect } from 'react';

export function useScrollObserver() {
  useEffect(() => {
    // Function to check if elements are in viewport
    function checkVisibility() {
      const revealElements = document.querySelectorAll('.reveal');
      
      revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // How much of the element needs to be visible
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    }
    
    // Add event listener for scrolling
    window.addEventListener("scroll", checkVisibility);
    
    // Initial check for elements already in viewport
    checkVisibility();
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);
}

export default function ScrollObserver({ children }: { children: React.ReactNode }) {
  useScrollObserver();
  return <>{children}</>;
}
