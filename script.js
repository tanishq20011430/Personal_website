// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeSpotlight();
    initializeNavigation();
    initializeScrollAnimations();
    initializeTerminal();
    initializeTilt();
    initializeContactForm();
    initializeCopyEmail();
});

// ==========================================
// SPOTLIGHT EFFECT (Hero Section)
// ==========================================
function initializeSpotlight() {
    const spotlight = document.getElementById('spotlight');
    const heroSection = document.querySelector('.hero-section');

    if (!spotlight || !heroSection) return;

    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        spotlight.style.left = `${x - 300}px`;
        spotlight.style.top = `${y - 300}px`;
    });
}

// ==========================================
// NAVIGATION
// ==========================================
function initializeNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
            }
        });
    }

    // Smooth scroll for all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==========================================
// COPY EMAIL FUNCTIONALITY
// ==========================================
function initializeCopyEmail() {
    const copyBtn = document.getElementById('copy-email-btn');
    const toast = document.getElementById('toast');
    const email = 'tanishqsoni81@gmail.com';

    if (copyBtn && toast) {
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(email);
                showToast();
            } catch (err) {
                console.error('Failed to copy email:', err);
            }
        });
    }
}

function showToast() {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
function initializeScrollAnimations() {
    // Timeline reveal animation
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // Animate timeline line on scroll
    window.addEventListener('scroll', animateTimelineLine);
}

function animateTimelineLine() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress = (windowHeight - rect.top) / (rect.height + windowHeight);
        const line = timeline.querySelector('::before');
        // Note: We can't directly style ::before with JS, 
        // but the reveal class on timeline-items handles the visual progression
    }
}

// ==========================================
// INTERACTIVE TERMINAL
// ==========================================
function initializeTerminal() {
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');

    if (!terminalInput || !terminalOutput) return;

    const commands = {
        help: `Available commands:
  help      - Show this help message
  skills    - Display technical skills
  contact   - Show contact information
  projects  - List featured projects
  clear     - Clear terminal output
  about     - About Tanishq Soni`,

        skills: `Technical Skills:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Languages:     Python, SQL, R, C++
Visualization: Power BI, Tableau, Matplotlib
ML/AI:         Regression, Classification, NLP, XGBoost
Tools:         AWS, Docker, Airflow, Git, Postman
Databases:     PostgreSQL, MySQL, MongoDB
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,

        contact: `Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email:    tanishqsoni81@gmail.com
Phone:    +91 8824212520
LinkedIn: linkedin.com/in/tanishqsoni
GitHub:   github.com/tanishqsoni
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,

        projects: `Featured Projects:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Booking Analysis Report
   → 60-page Power BI report, 2M+ records
   
2. AI-Powered Sports Data Pipeline
   → Python ETL with LLM integration
   
3. SQL Execution Tool
   → Web-based tool, 60% productivity boost
   
4. AI Recommendation System
   → Hybrid recommender, 10k+ users
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,

        about: `About Tanishq Soni:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Title:       Data Analyst | Data Scientist
Experience:  2+ years
Tagline:     "Turning Messy Data into 
             Measurable Business Outcomes"

Specialties:
  • Power BI Dashboard Development
  • ETL Pipeline Automation
  • Python & SQL Optimization
  • AI-Integrated Analytics
  • Process Automation (70% efficiency gain)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,

        clear: 'CLEAR_TERMINAL'
    };

    terminalInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const command = terminalInput.value.trim().toLowerCase();
            processCommand(command, terminalOutput, commands);
            terminalInput.value = '';
        }
    });
}

function processCommand(command, outputElement, commands) {
    if (!command) return;

    // Add command to output
    addTerminalLine(outputElement, `<span class="text-emerald-400">visitor@tanishq:~$</span> ${command}`);

    if (commands[command]) {
        if (commands[command] === 'CLEAR_TERMINAL') {
            outputElement.innerHTML = '';
        } else {
            typewriterEffect(outputElement, commands[command]);
        }
    } else {
        addTerminalLine(outputElement, `<span class="text-red-400">Command not found: ${command}</span>`);
        addTerminalLine(outputElement, `Type 'help' to see available commands`);
    }

    addTerminalLine(outputElement, '&nbsp;');

    // Scroll to bottom
    outputElement.scrollTop = outputElement.scrollHeight;
}

function addTerminalLine(outputElement, content) {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.innerHTML = content;
    outputElement.appendChild(line);
}

function typewriterEffect(outputElement, text, speed = 10) {
    const container = document.createElement('div');
    container.className = 'terminal-line';
    outputElement.appendChild(container);

    let index = 0;
    const lines = text.split('\n');

    function typeLine() {
        if (index < lines.length) {
            const lineDiv = document.createElement('div');
            lineDiv.textContent = lines[index];
            container.appendChild(lineDiv);
            index++;
            setTimeout(typeLine, speed);
        }
        outputElement.scrollTop = outputElement.scrollHeight;
    }

    typeLine();
}

// ==========================================
// 3D TILT EFFECT
// ==========================================
function initializeTilt() {
    const tiltElements = document.querySelectorAll('[data-tilt]');

    tiltElements.forEach(element => {
        element.addEventListener('mousemove', handleTilt);
        element.addEventListener('mouseleave', resetTilt);
    });
}

function handleTilt(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
}

function resetTilt(e) {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
}

// ==========================================
// CONTACT FORM
// ==========================================
function initializeContactForm() {
    const form = document.getElementById('contact-form');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Mock form submission (replace with actual API call)
        console.log('Form submitted:', formData);

        // Show success message
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = '<i data-lucide="check-circle" class="w-4 h-4"></i><span>Message Sent!</span>';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

        // Reinitialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Reset form
        form.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 3000);
    });
}

// ==========================================
// DOWNLOAD RESUME
// ==========================================
document.getElementById('download-resume-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('Tanishq_Soni_DS_Resume.docx', '_blank');
});

// ==========================================
// PARALLAX SCROLL EFFECTS
// ==========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.code-block');

    parallaxElements.forEach(element => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        // element.style.transform = `translateY(${yPos}px)`;
    });
});

// ==========================================
// SMOOTH REVEAL ON SCROLL
// ==========================================
const revealElements = document.querySelectorAll('.bento-card, .skill-category');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// ==========================================
// CURSOR TRAIL EFFECT (Optional Enhancement)
// ==========================================
let cursorTrail = [];

document.addEventListener('mousemove', (e) => {
    // Optional: Add cursor trail particles
    // This can be implemented for extra visual flair
});

// ==========================================
// PERFORMANCE MONITORING
// ==========================================
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page load time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
    });
}

// ==========================================
// EASTER EGG - Konami Code
// ==========================================
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s linear infinite';

    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);

    console.log('🎉 Easter egg activated! You found the Konami code!');
}

// ==========================================
// ANALYTICS (Placeholder)
// ==========================================
function trackEvent(category, action, label) {
    // Implement analytics tracking here
    console.log('Event tracked:', { category, action, label });
}

// Track section views
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            trackEvent('Section View', 'Viewed', entry.target.id);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('section[id]').forEach(section => {
    sectionObserver.observe(section);
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Optimize scroll listeners with throttle
const optimizedScroll = throttle(() => {
    animateTimelineLine();
}, 100);

window.addEventListener('scroll', optimizedScroll);

console.log('%c👋 Welcome to Tanishq\'s Portfolio!', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
console.log('%cTurning Messy Data into Measurable Business Outcomes', 'color: #10b981; font-size: 14px;');

