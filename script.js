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
  help       - Show this help message
  about      - About Tanishq Soni
  skills     - Display technical skills
  projects   - List featured projects
  education  - Education & certifications
  contact    - Show contact information
  clear      - Clear terminal output`,

        skills: `Technical Skills:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Programming:   Python (Pandas, NumPy, SQLAlchemy), SQL
Databases:     SQL Server, PostgreSQL
ML/AI:         Scikit-learn, XGBoost, ARIMA/SARIMA/Prophet
Gen AI & NLP:  Gemini & Perplexity APIs, LangChain, RAG,
               NLTK, TF-IDF, BERT
BI & Viz:      Power BI (DAX, Power Query), Tableau,
               Matplotlib, Seaborn
Cloud & Tools: AWS (S3, EC2), Airflow, Camunda, Cron,
               Git, Postman
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,

        contact: `Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email:    tanishqsoni81@gmail.com
Phone:    +91 8824212520
LinkedIn: linkedin.com/in/tanishq-soni14301
GitHub:   github.com/tanishq20011430
Location: Gurugram, India
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,

        projects: `Featured Work:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Booking Analytics Report
   → 60-page Power BI report, 2M+ records,
     45+ DAX measures, 40% faster refresh

2. Demand Forecasting Model
   → XGBoost with lag & rolling-window features,
     25% lower prediction error

3. LLM Analytics Assistant
   → Gemini + LangChain, natural language → SQL

4. Automated Sports Data Pipeline
   → Odds API + Perplexity LLM → PostgreSQL,
     Pydantic-validated, Cron-scheduled

5. Web-Based SQL Execution Tool
   → Adopted by 25+ team members

6. Hybrid Recommendation Engine
   → SVD collaborative + TF-IDF content-based
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,

        about: `About Tanishq Soni:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Title:       Data Analyst | Data Scientist
Experience:  2+ years (retail & fintech)
Education:   MCA in AI & ML (GPA 8.3/10)
Tagline:     "Engineering Data into Decisions"

Specialties:
  • Demand Forecasting (XGBoost, -25% error)
  • ETL Pipeline Automation (Python & SQL)
  • LLM-Powered Analytics Tooling
  • Power BI Dashboards (12 shipped, 5 depts)
  • Supply Chain & Inventory Analytics
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,

        education: `Education & Certifications:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MCA, AI & Machine Learning (GPA 8.3/10)
  Vivekananda Global University · 2022-2024
BCA (76%)
  University of Rajasthan · 2019-2022

Certifications:
  • ML Pipelines with Azure ML Studio (Coursera)
  • Data Analysis with Python & R (IBM)
  • Tableau Desktop Certified Professional
  • Foundations of Business Intelligence
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

    // ==========================================
    // OPTION 1: EmailJS (Recommended - More Control)
    // ==========================================
    // 1. Sign up at https://www.emailjs.com/
    // 2. Create an email service
    // 3. Create an email template with variables: {{name}}, {{email}}, {{message}}
    // 4. Get your Public Key, Service ID, and Template ID
    // 5. Uncomment and configure the code below:

    /*
    // Initialize EmailJS with your Public Key
    (function() {
        emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
    })();

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('#submit-btn');
        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Sending...</span>';

        const templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        try {
            await emailjs.send(
                'YOUR_SERVICE_ID',     // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID',    // Replace with your EmailJS template ID
                templateParams
            );

            // Success
            submitBtn.innerHTML = '<i data-lucide="check-circle" class="w-4 h-4"></i><span>Message Sent!</span>';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            if (typeof lucide !== 'undefined') lucide.createIcons();

            form.reset();

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                if (typeof lucide !== 'undefined') lucide.createIcons();
            }, 3000);

        } catch (error) {
            console.error('EmailJS Error:', error);
            
            // Error
            submitBtn.innerHTML = '<i data-lucide="x-circle" class="w-4 h-4"></i><span>Failed to Send</span>';
            submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
            if (typeof lucide !== 'undefined') lucide.createIcons();

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                if (typeof lucide !== 'undefined') lucide.createIcons();
            }, 3000);
        }
    });
    */

    // ==========================================
    // OPTION 2: Web3Forms (Easiest & Most Reliable)
    // ==========================================
    // Get your access key from https://web3forms.com
    // 1. Visit web3forms.com
    // 2. Enter your email (tanishqsoni81@gmail.com)
    // 3. Get your free access key
    // 4. Replace YOUR_ACCESS_KEY_HERE below
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('#submit-btn');
        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Sending...</span>';

        // Prepare form data
        const formData = new FormData(form);
        formData.append('access_key', 'd38852f8-1564-4a4f-ab3f-57dfe8a62088'); // Replace with your Web3Forms access key
        formData.append('subject', 'New Contact Form Submission from Portfolio');
        formData.append('from_name', 'Portfolio Contact Form');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                // Success
                submitBtn.innerHTML = '<i data-lucide="check-circle" class="w-4 h-4"></i><span>Message Sent!</span>';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                if (typeof lucide !== 'undefined') lucide.createIcons();

                form.reset();

                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    if (typeof lucide !== 'undefined') lucide.createIcons();
                }, 3000);
            } else {
                throw new Error(data.message || 'Form submission failed');
            }

        } catch (error) {
            console.error('Form submission error:', error);
            
            // Error
            submitBtn.innerHTML = '<i data-lucide="x-circle" class="w-4 h-4"></i><span>Failed to Send</span>';
            submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
            if (typeof lucide !== 'undefined') lucide.createIcons();

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                if (typeof lucide !== 'undefined') lucide.createIcons();
            }, 3000);
        }
    });
}

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
console.log('%cEngineering Data into Decisions', 'color: #10b981; font-size: 14px;');

