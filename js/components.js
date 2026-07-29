(function () {
    const currentPage = document.body.dataset.page || 'home';

    const navLinks = [
        { href: 'index.html', label: 'Home', page: 'home' },
        { href: 'about.html', label: 'About', page: 'about' },
        { href: 'services.html', label: 'Services', page: 'services' },
        { href: 'process.html', label: 'Process', page: 'process' },
        { href: 'partnership.html', label: 'Partnership', page: 'partnership' },
        { href: 'track-record.html', label: 'Track Record', page: 'track-record' },
        { href: 'faq.html', label: 'FAQ', page: 'faq' },
        { href: 'contact.html', label: 'Contact', page: 'contact', cta: true }
    ];

    const navHTML = `
    <nav class="navbar" id="navbar">
        <div class="container nav-container">
            <a href="index.html" class="nav-logo">
                <img src="assets/logos/catalyst-light.svg" alt="Catalyst Infrastructure Partners - Connecting Capital Powering Infrastructure Building Value" width="200" height="48">
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
            <span class="partner-bar-label">Prepared For</span>
            <div class="partner-bar-logos">
                <img src="assets/logos/ipic-group.svg" alt="Ipic Group institutional property portfolio partner" width="120" height="32">
                <span class="partner-divider"></span>
                <img src="assets/logos/catalyst-light.svg" alt="Catalyst Infrastructure Partners commercial energy leadership" width="180" height="32">
                <span class="partner-divider"></span>
                <img src="assets/logos/opele-energy.svg" alt="Opele Energy funding and delivery partner" width="120" height="32">
                <span class="partner-divider"></span>
                <img src="assets/logos/jade-sky.svg" alt="Jade-Sky engineering and EPC delivery partner" width="120" height="32">
            </div>
        </div>
    </div>`;

    const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <img src="assets/logos/catalyst-light.svg" alt="Catalyst Infrastructure Partners" class="footer-logo">
                    <p class="footer-tagline">Connecting Capital | Powering Infrastructure | Building Value. Unlocking long-term value through fully funded distributed energy solutions.</p>
                </div>
                <div class="footer-col">
                    <h4>Company</h4>
                    <a href="about.html">About Us</a>
                    <a href="partnership.html">Partnership</a>
                    <a href="track-record.html">Track Record</a>
                    <a href="faq.html">FAQ</a>
                </div>
                <div class="footer-col">
                    <h4>Solutions</h4>
                    <a href="services.html">Our Services</a>
                    <a href="process.html">Our Process</a>
                    <a href="services.html#outcomes">Outcomes</a>
                    <a href="contact.html">Get a Quote</a>
                    <a href="sitemap.xml">Sitemap</a>
                </div>
                <div class="footer-col">
                    <h4>Partners</h4>
                    <div class="footer-partners">
                        <img src="assets/logos/catalyst-light.svg" alt="Catalyst">
                        <img src="assets/logos/opele-energy.svg" alt="Opele Energy">
                        <img src="assets/logos/jade-sky.svg" alt="Jade-Sky">
                        <img src="assets/logos/ipic-group.svg" alt="Ipic Group">
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} Catalyst Infrastructure Partners. All rights reserved.</p>
                <div class="footer-legal">
                    <a href="privacy-policy.html">Privacy Policy</a>
                    <a href="terms-and-conditions.html">Terms & Conditions</a>
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
