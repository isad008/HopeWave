/* ========================================
   HopeWave - Main JavaScript
   Version: 1.0.0
======================================== */

(function () {
  "use strict";

  /* ---- Preloader ---- */
  window.addEventListener("load", function () {
    setTimeout(function () {
      const preloader = document.querySelector(".preloader");
      if (preloader) {
        preloader.style.opacity = "0";
        preloader.style.transition = "opacity 0.5s ease";
        setTimeout(() => preloader.remove(), 500);
      }
    }, 1600);
  });

  /* ---- Sticky Navbar ---- */
  const navbar = document.querySelector(".navbar-hopewave");
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        navbar.style.boxShadow = "0 4px 30px rgba(26,60,94,0.15)";
      } else {
        navbar.classList.remove("scrolled");
        navbar.style.boxShadow = "0 2px 20px rgba(26,60,94,0.08)";
      }
    });
  }

  /* ---- Scroll to Top ---- */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        scrollTop.classList.add("show");
      } else {
        scrollTop.classList.remove("show");
      }
    });
    scrollTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---- Fade-up Animation on Scroll ---- */
  const fadeEls = document.querySelectorAll(".fade-up");
  if (fadeEls.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    fadeEls.forEach((el) => observer.observe(el));
  }

  /* ---- Counter Animation ---- */
  function animateCounter(el) {
    const target = parseFloat(el.getAttribute("data-target"));
    const suffix = el.getAttribute("data-suffix") || "";
    const prefix = el.getAttribute("data-prefix") || "";
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      const display = Number.isInteger(target) ? Math.floor(current) : current.toFixed(1);
      el.textContent = prefix + display + suffix;
    }, duration / steps);
  }

  const counterEls = document.querySelectorAll("[data-counter]");
  if (counterEls.length) {
    const counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
            entry.target.classList.add("counted");
            animateCounter(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counterEls.forEach((el) => counterObserver.observe(el));
  }

  /* ---- Progress Bars ---- */
  const progressBars = document.querySelectorAll(".progress-fill[data-width]");
  if (progressBars.length) {
    const progressObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
            entry.target.classList.add("animated");
            const width = entry.target.getAttribute("data-width");
            entry.target.style.width = width + "%";
          }
        });
      },
      { threshold: 0.3 }
    );
    progressBars.forEach((bar) => {
      bar.style.width = "0%";
      progressObserver.observe(bar);
    });
  }

  /* ---- Donation Amount Selector (Hero) ---- */
  const amountBtns = document.querySelectorAll(".amount-btn");
  amountBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      amountBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
    });
  });

  /* ---- Donation Amount Selector (Donate Page) ---- */
  const amountOptions = document.querySelectorAll(".amount-option");
  amountOptions.forEach((opt) => {
    opt.addEventListener("click", function () {
      amountOptions.forEach((o) => o.classList.remove("selected"));
      this.classList.add("selected");
      const customInput = document.getElementById("customAmount");
      if (customInput) {
        const val = this.getAttribute("data-amount");
        if (val !== "custom") customInput.value = val;
        else customInput.focus();
      }
    });
  });

  /* ---- Donate Tab Toggle ---- */
  const donateTabBtns = document.querySelectorAll(".donate-tab-btn");
  donateTabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      donateTabBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
    });
  });

  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /* ---- Mobile navbar close on link click ---- */
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link:not(.dropdown-toggle)");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });

  /* ---- Newsletter Form ---- */
  const newsletterForm = document.querySelector(".newsletter-form-el");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const input = this.querySelector(".newsletter-input");
      if (input && input.value) {
        input.value = "";
        showAlert("Thank you for subscribing! We'll keep you updated.", "success");
      }
    });
  }

  /* ---- Contact Form ---- */
  const contactForm = document.querySelector(".contact-form-el");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showAlert("Thank you for your message! We'll get back to you within 24 hours.", "success");
      this.reset();
    });
  }

  /* ---- Volunteer Form ---- */
  const volunteerForm = document.querySelector(".volunteer-form-el");
  if (volunteerForm) {
    volunteerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showAlert("Thank you for signing up to volunteer! We'll contact you soon with next steps.", "success");
      this.reset();
    });
  }

  /* ---- Donate Form ---- */
  const donateForm = document.querySelector(".donate-form-el");
  if (donateForm) {
    donateForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showAlert("Thank you for your generous donation! You will receive a confirmation email shortly.", "success");
    });
  }

  /* ---- Alert helper ---- */
  function showAlert(message, type) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    alert.style.cssText =
      "top: 100px; right: 20px; z-index: 9999; min-width: 320px; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.15);";
    alert.innerHTML = `${message}<button type="button" class="btn-close" data-bs-dismiss="alert"></button>`;
    document.body.appendChild(alert);
    setTimeout(() => alert.remove(), 5000);
  }

  /* ---- Parallax effect (subtle) ---- */
  const parallaxEl = document.querySelector(".parallax-bg");
  if (parallaxEl) {
    window.addEventListener("scroll", function () {
      const scrolled = window.scrollY;
      parallaxEl.style.transform = `translateY(${scrolled * 0.3}px)`;
    });
  }

  /* ---- Testimonial Carousel (simple auto-slide) ---- */
  // Bootstrap carousel handles this; just ensure autoplay
  const testimonialCarousel = document.getElementById("testimonialCarousel");
  if (testimonialCarousel) {
    new bootstrap.Carousel(testimonialCarousel, { interval: 4000, ride: "carousel" });
  }

})();
