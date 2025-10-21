let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const scrollThreshold = 100; // Minimum scroll amount before hiding nav
let isScrolling;

window.addEventListener('scroll', () => {
    clearTimeout(isScrolling);
    
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Show/hide navigation based on scroll direction
    if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
        // Scrolling down & past threshold - hide navbar
        navbar.classList.add('nav-hidden');
    } else {
        // Scrolling up or at top - show navbar
        navbar.classList.remove('nav-hidden');
    }
    
    // Update scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    
    // Add scrolled class for background
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Set a timeout to remove nav-hidden class when scrolling stops
    isScrolling = setTimeout(() => {
        navbar.classList.remove('nav-hidden');
    }, 3000); // Show nav after 3 seconds of no scrolling
});