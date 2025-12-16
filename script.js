// script.js - Dynamic Portfolio Enhancements

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});

// Enhanced typing animation
class TypingAnimation {
    constructor() {
        this.typingText = document.querySelector('.typing-text');
        this.phrases = [
            'Python Developer',
            'Web Developer',
            'Full Stack Developer',
            'Software Engineer',
            'UI/UX Designer'
        ];
        this.phraseIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.isEnd = false;
        this.typeSpeed = 120;
        this.deleteSpeed = 80;
        this.pauseTime = 1500;
        
        this.init();
    }

    init() {
        setTimeout(() => this.type(), 1000);
    }

    type() {
        const currentPhrase = this.phrases[this.phraseIndex];
        
        if (this.isDeleting) {
            this.typingText.textContent = currentPhrase.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.typingText.textContent = currentPhrase.substring(0, this.charIndex + 1);
            this.charIndex++;
        }
        
        if (!this.isDeleting && this.charIndex === currentPhrase.length) {
            this.isEnd = true;
            this.isDeleting = true;
            setTimeout(() => this.type(), this.pauseTime);
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
            setTimeout(() => this.type(), 500);
        } else {
            const speed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;
            setTimeout(() => this.type(), speed);
        }
    }
}

// Skills toggle functionality
class SkillsToggle {
    constructor() {
        this.toggleBtn = document.getElementById('skillsToggleBtn');
        this.additionalSkills = document.getElementById('additionalSkillsSection');
        this.btnText = document.querySelector('.btn-text');
        this.btnIcon = document.querySelector('.btn-icon');
        
        this.init();
    }

    init() {
        this.toggleBtn.addEventListener('click', () => this.toggleSkills());
    }

    toggleSkills() {
        const isVisible = this.additionalSkills.style.display === 'block';
        
        if (isVisible) {
            this.hideSkills();
        } else {
            this.showSkills();
        }
    }

    showSkills() {
        this.additionalSkills.style.display = 'block';
        this.btnText.textContent = 'View Less';
        this.btnIcon.className = 'fas fa-chevron-up btn-icon';
        
        this.additionalSkills.classList.add('fade-in');
        setTimeout(() => {
            this.additionalSkills.classList.remove('fade-in');
        }, 500);
    }

    hideSkills() {
        this.additionalSkills.style.display = 'none';
        this.btnText.textContent = 'View All';
        this.btnIcon.className = 'fas fa-chevron-down btn-icon';
    }
}

// Smooth scrolling navigation
class SmoothScroll {
    constructor() {
        this.navLinks = document.querySelectorAll('nav a');
        this.init();
    }

    init() {
        this.navLinks.forEach(anchor => {
            anchor.addEventListener('click', (e) => this.handleClick(e, anchor));
        });
    }

    handleClick(e, anchor) {
        e.preventDefault();
        
        const targetId = anchor.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            this.updateActiveNav(anchor);
        }
    }

    updateActiveNav(clickedLink) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
        });
        clickedLink.classList.add('active');
    }
}

// Active section tracking
class SectionTracker {
    constructor() {
        this.sections = document.querySelectorAll('section');
        this.navLinks = document.querySelectorAll('nav a');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.trackSections());
    }

    trackSections() {
        let current = '';
        
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
}

// Hover effects manager
class HoverEffects {
    constructor() {
        this.init();
    }

    init() {
        this.setupProjectHover();
        this.setupCertificationHover();
        this.setupEducationHover();
        this.setupSkillHover();
    }

    setupProjectHover() {
        document.querySelectorAll('.project-box').forEach(project => {
            project.addEventListener('mouseenter', () => {
                project.style.transform = 'translateY(-10px)';
                project.style.boxShadow = '0 15px 30px rgba(183, 75, 75, 0.4)';
            });
            
            project.addEventListener('mouseleave', () => {
                project.style.transform = 'translateY(0)';
                project.style.boxShadow = '0 0 1rem rgba(0, 0, 0, 0.5)';
            });
        });
    }

    setupCertificationHover() {
        document.querySelectorAll('.certification-box').forEach(cert => {
            cert.addEventListener('mouseenter', () => {
                cert.style.transform = 'translateY(-10px)';
                cert.style.boxShadow = '0 15px 30px rgba(183, 75, 75, 0.3)';
            });
            
            cert.addEventListener('mouseleave', () => {
                cert.style.transform = 'translateY(0)';
                cert.style.boxShadow = 'none';
            });
        });
    }

    setupEducationHover() {
        document.querySelectorAll('.education-box, .experience-box').forEach(box => {
            box.addEventListener('mouseenter', () => {
                box.style.transform = 'translateY(-5px)';
                box.style.boxShadow = '0 10px 20px rgba(183, 75, 75, 0.2)';
            });
            
            box.addEventListener('mouseleave', () => {
                box.style.transform = 'translateY(0)';
                box.style.boxShadow = 'none';
            });
        });
    }

    setupSkillHover() {
        document.querySelectorAll('.skill-item').forEach(skill => {
            skill.addEventListener('mouseenter', () => {
                skill.style.transform = 'scale(1.05)';
            });
            
            skill.addEventListener('mouseleave', () => {
                skill.style.transform = 'scale(1)';
            });
        });
    }
}

// Scroll animations
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, this.observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.project-box, .certification-box, .education-box, .skill-category').forEach(el => {
            observer.observe(el);
        });
    }
}

// Back to top functionality
class BackToTop {
    constructor() {
        this.footerIconTop = document.querySelector('.footer-iconTop');
        this.init();
    }

    init() {
        this.footerIconTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Show/hide back to top button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                this.footerIconTop.style.opacity = '1';
                this.footerIconTop.style.visibility = 'visible';
            } else {
                this.footerIconTop.style.opacity = '0';
                this.footerIconTop.style.visibility = 'hidden';
            }
        });
    }
}

// Image lazy loading
class LazyLoader {
    constructor() {
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            this.setupLazyLoading();
        } else {
            this.loadAllImages();
        }
    }

    setupLazyLoading() {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    loadAllImages() {
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Theme manager (optional dark/light mode)
class ThemeManager {
    constructor() {
        this.themeToggle = this.createThemeToggle();
        this.init();
    }

    init() {
        // Check for saved theme preference or respect OS preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'light' || (!savedTheme && !systemPrefersDark)) {
            this.enableLightMode();
        }
    }

    createThemeToggle() {
        const toggle = document.createElement('button');
        toggle.innerHTML = '🌙';
        toggle.className = 'theme-toggle';
        toggle.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #b74b4b;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 20px;
            cursor: pointer;
            z-index: 1000;
            transition: all 0.3s ease;
        `;
        
        toggle.addEventListener('click', () => this.toggleTheme());
        document.body.appendChild(toggle);
        return toggle;
    }

    toggleTheme() {
        if (document.body.classList.contains('light-mode')) {
            this.enableDarkMode();
        } else {
            this.enableLightMode();
        }
    }

    enableLightMode() {
        document.body.classList.add('light-mode');
        this.themeToggle.innerHTML = '🌞';
        localStorage.setItem('theme', 'light');
    }

    enableDarkMode() {
        document.body.classList.remove('light-mode');
        this.themeToggle.innerHTML = '🌙';
        localStorage.setItem('theme', 'dark');
    }
}

// Particle background effect (optional)
class ParticleBackground {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.init();
    }

    init() {
        this.setupCanvas();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', () => {
            this.setupCanvas();
            this.createParticles();
        });
    }

    setupCanvas() {
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.3;
        `;
        document.body.appendChild(this.canvas);
        
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 15000);
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                color: `rgba(183, 75, 75, ${Math.random() * 0.5})`
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.y > this.canvas.height) particle.y = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Main application initialization
class PortfolioApp {
    constructor() {
        this.modules = [];
        this.init();
    }

    init() {
        // Initialize all modules
        this.modules = [
            new TypingAnimation(),
            new SkillsToggle(),
            new SmoothScroll(),
            new SectionTracker(),
            new HoverEffects(),
            new ScrollAnimations(),
            new BackToTop(),
            new LazyLoader(),
            // new ThemeManager(), // Uncomment if you want theme toggle
            // new ParticleBackground() // Uncomment if you want particle effect
        ];

        // Update footer year
        this.updateFooterYear();
        
        // Add loading animation
        this.handlePageLoad();
    }

    updateFooterYear() {
        const footerText = document.querySelector('.footer-text p');
        if (footerText) {
            footerText.innerHTML = `Copyright &copy; ${new Date().getFullYear()} by Levin | All Rights Reserved.`;
        }
    }

    handlePageLoad() {
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
        });
    }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});

// Utility functions
const utils = {
    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function for performance
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    },

    // Smooth element reveal
    revealElement(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        const reveal = () => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.style.transition = 'all 0.6s ease';
            }
        };
        
        window.addEventListener('scroll', utils.throttle(reveal, 100));
        reveal(); // Initial check
    }
};

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PortfolioApp, utils };
}