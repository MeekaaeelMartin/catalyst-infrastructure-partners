document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-ready');
    document.body.classList.remove('page-loading');

    initNav();
    initScrollReveal();
    initCounters();
    initFAQ();
    initForms();
    initFormSuccess();
});

function initFormSuccess() {
    const params = new URLSearchParams(window.location.search);
    if (params.get('sent') === '1') {
        const status = document.querySelector('.form-status');
        if (status) {
            status.className = 'form-status success';
            status.textContent = 'Thank you! Your enquiry has been sent. We\'ll be in touch shortly.';
            status.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

function initNav() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    const navbar = document.getElementById('navbar');

    if (toggle && links) {
        toggle.addEventListener('click', () => links.classList.toggle('active'));
        links.querySelectorAll('a').forEach(a =>
            a.addEventListener('click', () => links.classList.remove('active'))
        );
    }

    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 40);
        }, { passive: true });
    }
}

function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

    revealEls.forEach(el => observer.observe(el));
}

function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    const observed = new Set();

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting || observed.has(entry.target)) return;
            observed.add(entry.target);

            const el = entry.target;
            const target = +el.dataset.target;
            const duration = 2200;
            const start = performance.now();
            el.classList.add('counting');

            const tick = now => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 4);
                el.textContent = Math.floor(eased * target).toLocaleString();
                if (progress < 1) requestAnimationFrame(tick);
                else el.classList.remove('counting');
            };
            requestAnimationFrame(tick);
        });
    }, { threshold: 0.4 });

    counters.forEach(c => observer.observe(c));
}

function initFAQ() {
    document.querySelectorAll('.faq-item').forEach(item => {
        const btn = item.querySelector('.faq-question');
        if (!btn) return;

        btn.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        });
    });
}

function initForms() {
    document.querySelectorAll('.contact-form').forEach(form => {
        form.addEventListener('submit', async e => {
            e.preventDefault();

            const btn = form.querySelector('button[type="submit"]');
            const status = form.querySelector('.form-status');
            const originalText = btn.textContent;

            btn.disabled = true;
            btn.textContent = 'Sending...';

            try {
                const res = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: { Accept: 'application/json' }
                });

                if (res.ok) {
                    if (status) {
                        status.className = 'form-status success';
                        status.textContent = 'Thank you! Your enquiry has been sent. We\'ll be in touch shortly.';
                    }
                    form.reset();
                    btn.textContent = 'Sent Successfully';
                    setTimeout(() => { btn.textContent = originalText; btn.disabled = false; }, 3000);
                } else {
                    throw new Error('Failed');
                }
            } catch {
                if (status) {
                    status.className = 'form-status error';
                    status.textContent = 'Something went wrong. Please try again or call us directly.';
                }
                btn.textContent = originalText;
                btn.disabled = false;
            }
        });
    });
}
