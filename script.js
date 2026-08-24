// Tanishq Soni — portfolio interactions
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initReveal();
    initConsole();
    initContactForm();
    initCopyEmail();
});

// ---------- Navigation ----------
function initNav() {
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('site-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach(a =>
        a.addEventListener('click', () => {
            nav.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        })
    );
}

// ---------- Scroll reveal ----------
function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        els.forEach(el => el.classList.add('in'));
        return;
    }
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
}

// ---------- Copy email ----------
function initCopyEmail() {
    const link = document.getElementById('email-link');
    const toast = document.getElementById('toast');
    if (!link || !toast) return;

    link.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(link.dataset.email);
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2500);
        } catch (_) { /* mailto still opens */ }
    });
}

// ---------- Console ----------
function initConsole() {
    const input = document.getElementById('terminal-input');
    const output = document.getElementById('terminal-output');
    if (!input || !output) return;

    const commands = {
        help: `Available commands:
  help       show this message
  about      who I am
  skills     technical skills
  projects   selected work
  education  degrees & certifications
  contact    how to reach me
  clear      clear the console`,

        about: `Tanishq Soni — Data Analyst & Data Scientist
2+ years across retail analytics and fintech.
MCA in AI & Machine Learning (GPA 8.3/10).

Focus areas:
  - Demand forecasting (XGBoost, -25% error)
  - ETL pipeline automation (Python & SQL)
  - LLM-powered analytics tooling
  - Power BI dashboards (12 shipped, 5 departments)
  - Supply chain & inventory analytics`,

        skills: `Programming    Python (Pandas, NumPy, SQLAlchemy), SQL
Databases      SQL Server, PostgreSQL
ML             Scikit-learn, XGBoost, ARIMA/SARIMA/Prophet
Gen AI & NLP   Gemini & Perplexity APIs, LangChain, RAG,
               NLTK, TF-IDF, BERT
BI & viz       Power BI (DAX, Power Query), Tableau,
               Matplotlib, Seaborn
Cloud & tools  AWS (S3, EC2), Airflow, Camunda, Cron,
               Git, Postman`,

        projects: `01  Demand forecasting — XGBoost, -25% prediction error
02  Booking analytics — 60-page Power BI, 2M+ records,
    45+ DAX measures, 40% faster refresh
03  LLM analytics assistant — Gemini + LangChain, NL -> SQL
04  ETL automation — SQL Server -> PostgreSQL daily pipelines
05  Internal SQL tool — adopted by 25+ team members
06  Sports data pipeline — Odds API + Perplexity LLM,
    Pydantic-validated, Cron-scheduled`,

        education: `MCA, AI & Machine Learning (GPA 8.3/10)
  Vivekananda Global University · 2022-2024
BCA (76%)
  University of Rajasthan · 2019-2022

Certifications:
  - ML Pipelines with Azure ML Studio (Coursera)
  - Data Analysis with Python & R (IBM)
  - Tableau Desktop Certified Professional
  - Foundations of Business Intelligence`,

        contact: `Email     tanishqsoni81@gmail.com
Phone     +91 88242 12520
LinkedIn  linkedin.com/in/tanishq-soni14301
GitHub    github.com/tanishq20011430
Location  Gurugram, India`,

        clear: 'CLEAR'
    };

    // Demo the console on load so it never reads as an empty box
    addLine(output, `<span class="cmd">query&gt;</span> help`);
    addLine(output, escapeHtml(commands.help));
    addLine(output, '&nbsp;');

    input.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter') return;
        const cmd = input.value.trim().toLowerCase();
        input.value = '';
        if (!cmd) return;

        addLine(output, `<span class="cmd">query&gt;</span> ${escapeHtml(cmd)}`);

        if (commands[cmd] === 'CLEAR') {
            output.innerHTML = '';
        } else if (commands[cmd]) {
            addLine(output, escapeHtml(commands[cmd]));
            addLine(output, '&nbsp;');
        } else {
            const line = addLine(output, `command not found: ${escapeHtml(cmd)} — try 'help'`);
            line.classList.add('err');
            addLine(output, '&nbsp;');
        }
        output.scrollTop = output.scrollHeight;
    });
}

function addLine(output, html) {
    const div = document.createElement('div');
    div.className = 'terminal-line';
    div.innerHTML = html;
    output.appendChild(div);
    return div;
}

function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ---------- Contact form (Web3Forms) ----------
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = document.getElementById('submit-btn');
        const original = btn.textContent;
        btn.disabled = true;
        btn.textContent = 'Sending…';

        const data = new FormData(form);
        data.append('access_key', 'd38852f8-1564-4a4f-ab3f-57dfe8a62088');
        data.append('subject', 'New contact form submission from portfolio');
        data.append('from_name', 'Portfolio Contact Form');

        try {
            const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
            const json = await res.json();
            if (!json.success) throw new Error(json.message || 'Submission failed');
            btn.textContent = 'Message sent ✓';
            form.reset();
        } catch (err) {
            console.error('Form error:', err);
            btn.textContent = 'Failed — email me instead';
        } finally {
            setTimeout(() => {
                btn.disabled = false;
                btn.textContent = original;
            }, 3000);
        }
    });
}
