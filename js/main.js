// Define Header and Footer HTML as strings for reliable injection across all environments
const headerHTML = `
<!-- Top Contact Bar -->
<div class="top-bar">
    <div class="container">
        <div class="top-contact">
            <span><i data-lucide="phone"></i> +91 80003 69880</span>
            <span><i data-lucide="mail"></i> projexel.engr@gmail.com</span>
        </div>
        <div class="top-hours">
            <span><i data-lucide="clock"></i> Mon-Fri: 9am - 6pm, Sat: 10am - 2pm</span>
        </div>
    </div>
</div>

<!-- Main Navigation Header -->
<header>
    <div class="container nav-container">
        <a href="index.html" class="logo">
            <img src="images/logo.png" alt="Projexel Engineering">
        </a>

        <nav class="nav-links">
            <a href="index.html">Home</a>
            <a href="about.html">About Us</a>
            <a href="services.html">Services</a>
            <a href="projects.html">Projects</a>
            <a href="clients.html">Clients</a>
            <a href="blog.html">Blog</a>
        </nav>

        <a href="contact.html" class="btn btn-primary top-btn">Contact Us</a>

        <button class="mobile-menu-btn">
            <i data-lucide="menu"></i>
        </button>
    </div>
</header>
`;

const footerHTML = `
<!-- Footer -->
<footer>
    <div class="container">
        <div class="footer-grid" style="grid-template-columns: 1.5fr 1fr 1.5fr;">
            <div>
                <a href="index.html" class="logo mb-4 d-block">
                    <img src="images/logo.png" alt="Projexel Engineering" style="height: 50px; filter: brightness(0) invert(1);">
                </a>
                <p style="margin-top: 20px; line-height: 1.6; color: #ccc;">Setting the global benchmark in EPC, E&I, and Industrial Engineering services through an unwavering commitment to quality and execution excellence.</p>
            </div>
            <div>
                <h4 class="footer-heading">Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="services.html">Our Services</a></li>
                    <li><a href="projects.html">Portfolio</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>
            <div>
                <h4 class="footer-heading">Contact Us</h4>
                <div class="footer-contact-info">
                    <p style="margin-bottom: 15px; display: flex; gap: 15px;">
                        <i data-lucide="map-pin" style="width: 20px; flex-shrink: 0; color: white;"></i>
                        <span>1004, Sudarshan Saket, Behind Godrej Garden City, Chainpur Road, Jagatpur, Ahmedabad – 382470</span>
                    </p>
                    <p style="margin-bottom: 15px; display: flex; gap: 15px; align-items: center;">
                        <i data-lucide="mail" style="width: 20px; flex-shrink: 0; color: white;"></i>
                        <span>projexel.engr@gmail.com</span>
                    </p>
                    <p style="display: flex; gap: 15px; align-items: center;">
                        <i data-lucide="phone" style="width: 20px; flex-shrink: 0; color: white;"></i>
                        <span>+91 80003 69880</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="footer-bottom" style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 30px; margin-top: 50px;">
            <p>&copy; 2026 Projexel Engineering. All rights reserved.</p>
            <div class="social-links" style="display: flex; gap: 15px;">
                <a href="#" style="background: #f5f5f5; width: 35px; height: 35px; display: flex; align-items: center; justify-content: center; border-radius: 50%; color: #333; transition: 0.3s;"><i class="ri-linkedin-fill"></i></a>
                <a href="#" style="background: #f5f5f5; width: 35px; height: 35px; display: flex; align-items: center; justify-content: center; border-radius: 50%; color: #333; transition: 0.3s;"><i class="ri-twitter-x-fill"></i></a>
            </div>
        </div>
    </div>
</footer>
`;

function injectComponents() {
    const headerPlaceholder = document.querySelector('#header-placeholder');
    const footerPlaceholder = document.querySelector('#footer-placeholder');

    if (headerPlaceholder) headerPlaceholder.innerHTML = headerHTML;
    if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;

    // Re-initialize logic
    initCommonLogic();
}

function initCommonLogic() {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.classList.toggle('active');
        });
    }

    // Set active nav link based on current URL
    const path = window.location.pathname;
    const page = path.split("/").pop() || 'index.html';
    
    const menuItems = document.querySelectorAll('.nav-links a');
    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === page) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    injectComponents();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
