 document.querySelectorAll('.smooth-scroll').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    window.addEventListener('scroll', function() {
      const scrollToTopButton = document.querySelector('.scroll-to-top');
      if (window.scrollY > 200) {
        scrollToTopButton.classList.add('show');
      } else {
        scrollToTopButton.classList.remove('show');
      }
    });

document.addEventListener('DOMContentLoaded', function() {
  const stamp = document.querySelector('.studio-stamp');
  
  // Trigger the animation when the page loads
  setTimeout(() => {
    stamp.classList.add('stamp-animate');
  }, 1000); // Adjust the delay as needed
});