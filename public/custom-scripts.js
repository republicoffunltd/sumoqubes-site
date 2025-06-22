// Scroll handling
function initScrollHandling() {
  // Fix smooth scroll for mobile and desktop
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Handle mobile menu closing if open
        const mobileMenu = document.querySelector('.mobile-menu.active');
        if (mobileMenu) {
          mobileMenu.classList.remove('active');
          document.body.style.overflow = 'auto';
        }
        
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Scroll to top button visibility
  window.addEventListener('scroll', function() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    if (scrollToTopButton) {
      if (window.scrollY > 200) {
        scrollToTopButton.classList.add('show');
      } else {
        scrollToTopButton.classList.remove('show');
      }
    }
  });
}

// Studio stamp animation
function initStudioStamp() {
  const stamp = document.querySelector('.studio-stamp');
  if (stamp) {
    setTimeout(() => {
      stamp.classList.add('stamp-animate');
    }, 1000);
  }
}

// Initialize all scripts when DOM is fully loaded
if (typeof window !== 'undefined') {
  window.addEventListener('load', function() {
    initScrollHandling();
    initStudioStamp();
  });
}