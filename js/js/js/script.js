// Smooth Scrolling for navigation links
const navLinks = document.querySelectorAll('.top-bar nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('.top-bar').offsetHeight,
            behavior: 'smooth'
        });
    });
});

// Scroll Animations (fade-in effect)
const fadeInElements = document.querySelectorAll('.fade-in');

const checkVisibility = () => {
    const windowHeight = window.innerHeight;
    fadeInElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 150) {
            element.classList.add('visible');
        }
    });
};

// Trigger scroll animations on page load and scroll
window.addEventListener('load', checkVisibility);
window.addEventListener('scroll', checkVisibility);

// Contact Form Submission (Basic Validation)
const contactForm = document.querySelector('.contact-form form');
const nameInput = contactForm.querySelector('#name');
const emailInput = contactForm.querySelector('#email');
const messageInput = contactForm.querySelector('#message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Simple validation checks
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Please fill in all fields');
    } else {
        alert('Message Sent Successfully!');
        contactForm.reset();
    }
});

// Add fade-in class to elements
document.querySelectorAll('.about-phrases h3').forEach(phrase => {
    window.addEventListener('scroll', () => {
        if (isElementInView(phrase)) {
            phrase.classList.add('visible');
        }
    });
});

// Helper function to check if an element is in view
function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}


// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 60, // Adjust for the fixed navbar height
            behavior: 'smooth'
        });
    });
});

