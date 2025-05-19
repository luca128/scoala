// Mobile Menu Functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when clicking on a nav link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Sticky Navigation
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'white';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Video Play Button
const playButton = document.querySelector('.play-button');
const videoPlaceholder = document.querySelector('.video-placeholder');

if (playButton && videoPlaceholder) {
    playButton.addEventListener('click', () => {
        // In a real implementation, this would replace the image with an actual video player
        alert('Video functionality would be implemented here in a real website!');
    });
}

// Animation on Scroll
const animateOnScroll = () => {
    const items = document.querySelectorAll('.achievement-card, .gallery-item, .about-image, .legacy-video');
    
    items.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (itemPosition < screenPosition) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }
    });
};

// Initialize animations
window.addEventListener('DOMContentLoaded', () => {
    // Set initial states for animation
    const animatedItems = document.querySelectorAll('.achievement-card, .gallery-item, .about-image, .legacy-video');
    
    animatedItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger initial animation
    setTimeout(animateOnScroll, 300);
    
    // Add scroll event for animations
    window.addEventListener('scroll', animateOnScroll);
});

// Add year to copyright notice
const yearSpan = document.querySelector('.footer-bottom p');
if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = yearSpan.textContent.replace('2023', currentYear);
} 