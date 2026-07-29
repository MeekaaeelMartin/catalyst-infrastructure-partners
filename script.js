document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    toggle.addEventListener('click', () => links.classList.toggle('active'));

    links.querySelectorAll('a').forEach(a =>
        a.addEventListener('click', () => links.classList.remove('active'))
    );

    // Navbar background on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.style.background = window.scrollY > 50
            ? 'rgba(15, 26, 46, 0.98)'
            : 'rgba(26, 39, 68, 0.95)';
    });

    // Animated counters
    const counters = document.querySelectorAll('.stat-number');
    const observed = new Set();

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting || observed.has(entry.target)) return;
            observed.add(entry.target);
            const el = entry.target;
            const target = +el.dataset.target;
            const duration = 2000;
            const start = performance.now();

            const tick = now => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(eased * target).toLocaleString();
                if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        });
    }, { threshold: 0.3 });

    counters.forEach(c => observer.observe(c));

    // Fade-in on scroll
    const fadeEls = document.querySelectorAll(
        '.card, .outcome-card, .stat, .step, .partner-card, .contact-card, .why-matters'
    );
    fadeEls.forEach(el => el.classList.add('fade-in'));

    const fadeObserver = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(el => fadeObserver.observe(el));

    // Form submission
    document.getElementById('contactForm').addEventListener('submit', e => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        btn.textContent = 'Sent! We\'ll be in touch.';
        btn.style.background = '#1e5c28';
        setTimeout(() => {
            btn.textContent = 'Send Enquiry';
            btn.style.background = '';
            e.target.reset();
        }, 3000);
    });
});
