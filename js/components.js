/* ================================================================
   components.js — Nav + Footer injection · HopeWave v3
   ================================================================ */
(function(){
  const inPages = window.location.pathname.includes('/pages/');
  const R = inPages ? '../' : './';

  const nav = `
<nav class="hw-nav" role="navigation" aria-label="Main navigation">
  <div class="hw-nav-inner">
    <a href="${R}index.html" class="hw-brand" aria-label="HopeWave home">
      <div class="hw-brand-icon" aria-hidden="true"><i class="bi bi-heart-fill"></i></div>
      <span class="accent">Hope Wave</span>
    </a>
    <ul class="hw-links" id="hw-links-list" role="list">
      <li><a href="${R}index.html">Home</a></li>
      <li><a href="${R}pages/about.html">About</a></li>
      <li class="has-drop">
        <a href="${R}pages/causes.html" aria-haspopup="true">Causes <i class="bi bi-chevron-down" style="font-size:9px"></i></a>
        <div class="hw-drop" role="menu">
          <a href="${R}pages/causes.html" role="menuitem">All Causes</a>
          <a href="${R}pages/cause-detail.html" role="menuitem">Cause Detail</a>
          <a href="${R}pages/impact.html" role="menuitem">Our Impact</a>
        </div>
      </li>
      <li><a href="${R}pages/events.html">Events</a></li>
      <li><a href="${R}pages/volunteer.html">Volunteer</a></li>
      <li class="has-drop">
        <a href="#" aria-haspopup="true">More <i class="bi bi-chevron-down" style="font-size:9px"></i></a>
        <div class="hw-drop" role="menu">
          <a href="${R}pages/team.html" role="menuitem">Our Team</a>
          <a href="${R}pages/gallery.html" role="menuitem">Gallery</a>
          <a href="${R}pages/blog.html" role="menuitem">Blog</a>
          <a href="${R}pages/faq.html" role="menuitem">FAQ</a>
          <a href="${R}pages/partners.html" role="menuitem">Partners</a>
          <a href="${R}pages/contact.html" role="menuitem">Contact</a>
        </div>
      </li>
    </ul>
    <div class="hw-right">
      <a href="${R}pages/login.html" class="hw-signin">Sign In</a>
      <a href="${R}pages/donate.html" class="hw-donate-btn">
        <i class="bi bi-heart-fill"></i> Donate
      </a>
      <button class="hw-toggle" id="hw-toggle-btn" aria-label="Open menu" aria-expanded="false" aria-controls="hw-mobile-nav">
        <i class="bi bi-list" id="hw-toggle-icon"></i>
      </button>
    </div>
  </div>
</nav>
<nav class="hw-mobile-nav" id="hw-mobile-nav" aria-label="Mobile navigation">
  <a href="${R}index.html">Home</a>
  <a href="${R}pages/about.html">About Us</a>
  <div class="mob-group-label">Causes</div>
  <a href="${R}pages/causes.html">All Causes</a>
  <a href="${R}pages/cause-detail.html">Cause Detail</a>
  <a href="${R}pages/impact.html">Our Impact</a>
  <div class="mob-group-label">Get Involved</div>
  <a href="${R}pages/events.html">Events</a>
  <a href="${R}pages/volunteer.html">Volunteer</a>
  <a href="${R}pages/team.html">Our Team</a>
  <div class="mob-group-label">Explore</div>
  <a href="${R}pages/gallery.html">Gallery</a>
  <a href="${R}pages/blog.html">Blog</a>
  <a href="${R}pages/faq.html">FAQ</a>
  <a href="${R}pages/partners.html">Partners</a>
  <a href="${R}pages/contact.html">Contact</a>
  <div class="mob-group-label">Account</div>
  <a href="${R}pages/login.html">Sign In</a>
  <a href="${R}pages/register.html">Create Account</a>
  <div class="mob-donate-wrap">
    <a href="${R}pages/donate.html" class="mob-donate">
      <i class="bi bi-heart-fill"></i> Donate Now
    </a>
  </div>
</nav>`;

  const footer = `
<footer class="hw-footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-brand">Hope<span class="accent">Wave</span></div>
        <p class="footer-desc">Empowering communities through bold, transparent, compassionate action. 98% of donations reach programs directly — tracked, verified, and reported back to every donor.</p>
        <div class="footer-socials">
          <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" aria-label="Twitter / X"><i class="bi bi-twitter-x"></i></a>
          <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
          <a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
        </div>
      </div>
      <div>
        <div class="footer-head">Navigate</div>
        <ul class="footer-links">
          <li><a href="${R}index.html"><i class="bi bi-chevron-right"></i>Home</a></li>
          <li><a href="${R}pages/about.html"><i class="bi bi-chevron-right"></i>About Us</a></li>
          <li><a href="${R}pages/causes.html"><i class="bi bi-chevron-right"></i>All Causes</a></li>
          <li><a href="${R}pages/events.html"><i class="bi bi-chevron-right"></i>Events</a></li>
          <li><a href="${R}pages/volunteer.html"><i class="bi bi-chevron-right"></i>Volunteer</a></li>
          <li><a href="${R}pages/impact.html"><i class="bi bi-chevron-right"></i>Our Impact</a></li>
          <li><a href="${R}pages/blog.html"><i class="bi bi-chevron-right"></i>Blog</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-head">Support</div>
        <ul class="footer-links">
          <li><a href="${R}pages/donate.html"><i class="bi bi-chevron-right"></i>Donate Now</a></li>
          <li><a href="${R}pages/team.html"><i class="bi bi-chevron-right"></i>Our Team</a></li>
          <li><a href="${R}pages/gallery.html"><i class="bi bi-chevron-right"></i>Gallery</a></li>
          <li><a href="${R}pages/faq.html"><i class="bi bi-chevron-right"></i>FAQ</a></li>
          <li><a href="${R}pages/partners.html"><i class="bi bi-chevron-right"></i>Partners</a></li>
          <li><a href="${R}pages/contact.html"><i class="bi bi-chevron-right"></i>Contact</a></li>
          <li><a href="${R}pages/login.html"><i class="bi bi-chevron-right"></i>Donor Login</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-head">Contact</div>
        <div class="footer-contact">
          <div class="footer-contact-row"><i class="bi bi-geo-alt-fill"></i><span>142 Hope Avenue, Suite 300<br>New York, NY 10001, USA</span></div>
          <div class="footer-contact-row"><i class="bi bi-telephone-fill"></i><span>+1 (800) 467-3968</span></div>
          <div class="footer-contact-row"><i class="bi bi-envelope-fill"></i><span>hello@hopewave.org</span></div>
          <div class="footer-contact-row"><i class="bi bi-clock-fill"></i><span>Mon&ndash;Fri: 9am&ndash;6pm EST</span></div>
        </div>
      </div>
    </div>
    <div class="color-bar"></div>
    <div class="footer-bottom">
      <span>&copy; 2026 HopeWave. All rights reserved. 501(c)(3) &mdash; EIN 47-2901847.</span>
      <div class="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Cookies</a>
      </div>
    </div>
  </div>
</footer>
<button class="scroll-top" aria-label="Back to top"><i class="bi bi-arrow-up"></i></button>`;

  /* Inject */
  const ni = document.getElementById('nav-inject');
  const fi = document.getElementById('footer-inject');
  if(ni) ni.outerHTML = nav;
  if(fi) fi.outerHTML = footer;

  /* Active link */
  const cur = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.hw-links a, .hw-mobile-nav a').forEach(a=>{
    const lf = (a.getAttribute('href')||'').split('/').pop();
    if(lf===cur||(cur===''&&lf==='index.html')) a.classList.add('active');
  });
})();
