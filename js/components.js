(function () {
    const currentPage = document.body.dataset.page || 'home';

    const navLinks = [
        { href: '/', label: 'Home', page: 'home' },
        { href: '/about', label: 'About', page: 'about' },
        { href: '/services', label: 'Services', page: 'services' },
        { href: '/process', label: 'Process', page: 'process' },
        { href: '/partnership', label: 'Partnership', page: 'partnership' },
        { href: '/track-record', label: 'Track Record', page: 'track-record' },
        { href: '/faq', label: 'FAQ', page: 'faq' },
        { href: '/contact', label: 'Contact', page: 'contact', cta: true }
    ];

    const navHTML = `
    <nav class="navbar" id="navbar">
        <div class="container nav-container">
            <a href="/" class="nav-logo">
                <img src="/assets/logos/catalyst-compact-light.png" alt="Catalyst Infrastructure Partners" width="160" height="56">
            </a>
            <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
                <span></span><span></span><span></span>
            </button>
            <ul class="nav-links" id="navLinks">
                ${navLinks.map(link => `
                    <li><a href="${link.href}" class="${currentPage === link.page ? 'active' : ''} ${link.cta ? 'nav-cta' : ''}">${link.label}</a></li>
                `).join('')}
            </ul>
        </div>
    </nav>`;

    const partnerBarHTML = `
    <div class="partner-bar">
        <div class="container partner-bar-inner">
            <span class="partner-bar-label">Our Partners</span>
            <div class="partner-bar-logos">
                <div class="partner-logo-wrap">
                    <img src="/assets/logos/catalyst-compact.png" alt="Catalyst Infrastructure Partners" class="partner-logo partner-logo--catalyst">
                </div>
                <span class="partner-divider"></span>
                <div class="partner-logo-wrap">
                    <img src="/assets/logos/opele-energy.png" alt="Opele Energy" class="partner-logo partner-logo--opele">
                </div>
                <span class="partner-divider"></span>
                <div class="partner-logo-wrap">
                    <img src="/assets/logos/jade-sky.png" alt="Jade-Sky" class="partner-logo partner-logo--jade">
                </div>
            </div>
        </div>
    </div>`;

    const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <img src="/assets/logos/catalyst-compact-light.png" alt="Catalyst Infrastructure Partners" class="footer-logo">
                    <p class="footer-tagline">Connecting Capital | Powering Infrastructure | Building Value. Unlocking long-term value through fully funded distributed energy solutions.</p>
                </div>
                <div class="footer-col">
                    <h4>Company</h4>
                    <a href="/about">About Us</a>
                    <a href="/partnership">Partnership</a>
                    <a href="/track-record">Track Record</a>
                    <a href="/faq">FAQ</a>
                </div>
                <div class="footer-col">
                    <h4>Solutions</h4>
                    <a href="/services">Our Services</a>
                    <a href="/process">Our Process</a>
                    <a href="/services#outcomes">Outcomes</a>
                    <a href="/contact">Get a Quote</a>
                    <a href="sitemap.xml">Sitemap</a>
                </div>
                <div class="footer-col">
                    <h4>Partners</h4>
                    <div class="footer-partners">
                        <img src="/assets/logos/catalyst-compact-light.png" alt="Catalyst Infrastructure Partners">
                        <img src="/assets/logos/opele-energy-light.png" alt="Opele Energy">
                        <img src="/assets/logos/jade-sky-light.png" alt="Jade-Sky">
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} Catalyst Infrastructure Partners. All rights reserved.</p>
                <div class="footer-legal">
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-and-conditions">Terms & Conditions</a>
                </div>
            </div>
        </div>
    </footer>`;

    const navMount = document.getElementById('site-nav');
    const footerMount = document.getElementById('site-footer');
    const partnerMount = document.getElementById('partner-bar');

    if (navMount) navMount.innerHTML = navHTML;
    if (footerMount) footerMount.innerHTML = footerHTML;
    if (partnerMount) partnerMount.innerHTML = partnerBarHTML;
})();
