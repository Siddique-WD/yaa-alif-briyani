// Tailwind CSS Configuration
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.5s ease-out',
                'fade-in': 'fadeIn 0.8s ease-out',
                'scale-in': 'scaleIn 0.5s ease-out',
                'shimmer': 'shimmer 2s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(100px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-100px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                }
            }
        }
    }
}

// Initialize
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hide');
    }, 1000);
    
    // Create particles
    createParticles();
    
    // Initialize scroll animations
    observeScrollAnimations();
});

// Page Navigation
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link');
    
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick') === `showPage('${pageId}')`) {
            link.classList.add('active');
        }
    });
    
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    body.classList.toggle('light');
    themeToggle.classList.toggle('light');
    
    if (body.classList.contains('light')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Particles Effect
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 20 + 20) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Scroll Animations
function observeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });
}

// WhatsApp Integration for Party Hall Booking
function bookPartyHall() {
    const message = encodeURIComponent("Hello Savoria, I would like to book your party hall for an event. Please provide me with more information.");
    window.open(`https://wa.me/15551234567?text=${message}`, '_blank');
}

// Google Review Function
function openGoogleReview() {
    // Replace with your actual Google Business Place ID
    // You can find your Place ID at: https://developers.google.com/maps/documentation/places/web-service/place-id
    const placeId = 'YOUR_GOOGLE_PLACE_ID'; // Replace this with your actual Place ID
    const googleReviewUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;
    
    // Alternative: Direct Google Maps search (replace with your restaurant name and location)
    const restaurantName = encodeURIComponent("Savoria Restaurant Culinary District");
    const fallbackUrl = `https://www.google.com/maps/search/${restaurantName}`;
    
    // Try to open the review page, fallback to search if Place ID not set
    if (placeId === 'YOUR_GOOGLE_PLACE_ID') {
        window.open(fallbackUrl, '_blank');
        alert('Please search for Savoria Restaurant and click on "Write a review" to share your experience!');
    } else {
        window.open(googleReviewUrl, '_blank');
    }
}

// Contact Form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            const whatsappMessage = encodeURIComponent(
                `New Contact Form Submission:\n\n` +
                `Name: ${name}\n` +
                `Email: ${email}\n` +
                `Phone: ${phone}\n` +
                `Message: ${message}`
            );
            
            window.open(`https://wa.me/7358616943?text=${whatsappMessage}`, '_blank');
            
            // Reset form
            this.reset();
            alert('Thank you for your message! We will contact you soon.');
        });
    }
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Skip empty anchors or just "#"
            if (href === '#' || href === '' || !href) {
                return;
            }
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});