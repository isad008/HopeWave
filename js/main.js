/* ================================================================
   HopeWave v3 — main.js  ·  All interactivity
   ================================================================ */
(function () {
  'use strict';

  /* ── Navbar scroll ───────────────────────────────────────────── */
  const nav = document.querySelector('.hw-nav');
  if (nav) {
    const tick = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', tick, { passive: true });
    tick();
  }

  /* ── Mobile nav toggle ───────────────────────────────────────── */
  document.addEventListener('click', function (e) {
    const btn      = e.target.closest('#hw-toggle-btn');
    const mobileNav = document.getElementById('hw-mobile-nav');
    const icon     = document.getElementById('hw-toggle-icon');

    if (btn && mobileNav) {
      const open = mobileNav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      if (icon) icon.className = open ? 'bi bi-x-lg' : 'bi bi-list';
      document.body.style.overflow = open ? 'hidden' : '';
    } else if (mobileNav && mobileNav.classList.contains('open') && !e.target.closest('.hw-mobile-nav') && !e.target.closest('#hw-toggle-btn')) {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
      const b = document.getElementById('hw-toggle-btn');
      const ic = document.getElementById('hw-toggle-icon');
      if (b)  { b.setAttribute('aria-expanded', 'false'); b.setAttribute('aria-label', 'Open menu'); }
      if (ic) ic.className = 'bi bi-list';
    }
  });

  /* Close mobile nav on mobile-nav link click */
  document.addEventListener('click', function (e) {
    if (e.target.closest('.hw-mobile-nav a')) {
      const mobileNav = document.getElementById('hw-mobile-nav');
      const ic = document.getElementById('hw-toggle-icon');
      const b  = document.getElementById('hw-toggle-btn');
      if (mobileNav) { mobileNav.classList.remove('open'); document.body.style.overflow = ''; }
      if (ic) ic.className = 'bi bi-list';
      if (b)  { b.setAttribute('aria-expanded', 'false'); b.setAttribute('aria-label', 'Open menu'); }
    }
  });

  /* ── Scroll-to-top ───────────────────────────────────────────── */
  const stb = document.querySelector('.scroll-top');
  if (stb) {
    window.addEventListener('scroll', () => stb.classList.toggle('visible', window.scrollY > 500), { passive: true });
    stb.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ── IntersectionObserver: reveal animations ─────────────────── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    reveals.forEach(el => io.observe(el));
  }

  /* ── Progress bars ───────────────────────────────────────────── */
  document.querySelectorAll('.bar-fill[data-w], .impact-bar-fill[data-w]').forEach(bar => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { bar.style.width = bar.dataset.w + '%'; io.unobserve(bar); } });
    }, { threshold: 0.3 });
    io.observe(bar);
  });

  /* ── Counter animation ───────────────────────────────────────── */
  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const dur = 1600, fps = 60;
    const step = target / (dur / (1000 / fps));
    let cur = 0;
    const iv = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = prefix + (Number.isInteger(target) ? Math.floor(cur) : cur.toFixed(1)) + suffix;
      if (cur >= target) clearInterval(iv);
    }, 1000 / fps);
  }
  document.querySelectorAll('[data-count]').forEach(el => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !e.target.dataset.counted) {
          e.target.dataset.counted = '1';
          animateCount(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    io.observe(el);
  });

  /* ── FAQ accordion ───────────────────────────────────────────── */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── Donation amount selector ────────────────────────────────── */
  document.querySelectorAll('.amount-opt, .qd-amt').forEach(opt => {
    opt.addEventListener('click', function () {
      const grid = this.closest('.amount-grid, .qd-amounts');
      if (grid) grid.querySelectorAll('.amount-opt, .qd-amt').forEach(o => o.classList.remove('sel'));
      this.classList.add('sel');
      const inp = document.getElementById('customAmount');
      if (inp && this.dataset.amount !== 'custom') inp.value = this.dataset.amount;
      else if (inp) inp.focus();
    });
  });

  /* ── Give tab toggle ─────────────────────────────────────────── */
  document.querySelectorAll('.give-tab').forEach(tab => {
    tab.addEventListener('click', function () {
      this.closest('.give-tabs').querySelectorAll('.give-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });

  /* ── Filter buttons ──────────────────────────────────────────── */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      this.closest('.filter-bar').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  /* ── Gallery lightbox ────────────────────────────────────────── */
  const lb    = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  if (lb && lbImg) {
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        lbImg.src = item.querySelector('img').src;
        lb.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
    const closeLb = () => { lb.classList.remove('active'); document.body.style.overflow = ''; };
    lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
    document.querySelector('.lb-close')?.addEventListener('click', closeLb);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });
  }

  /* ── Toast notifications ─────────────────────────────────────── */
  function toast(msg) {
    const el = document.createElement('div');
    el.setAttribute('role', 'alert');
    Object.assign(el.style, {
      position: 'fixed', top: '90px', right: '20px', zIndex: '9999',
      padding: '15px 22px', borderRadius: '4px',
      fontFamily: "'Roboto',sans-serif", fontWeight: '600', fontSize: '14px',
      minWidth: '300px', maxWidth: '380px', color: '#fff',
      background: '#1D7A3A',
      boxShadow: '0 8px 32px rgba(0,0,0,.2)',
      transition: 'opacity .4s ease',
    });
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; setTimeout(() => el.remove(), 400); }, 4500);
  }

  /* ── Form submissions ────────────────────────────────────────── */
  const formMessages = {
    'donate-form':    '🎉 Thank you! Your donation is making a real difference.',
    'contact-form':   '✅ Message sent! We\'ll reply within 24 hours.',
    'volunteer-form': '🙌 Application received! We\'ll be in touch shortly.',
    'newsletter-form':'📬 You\'re subscribed! Expect impact stories soon.',
    'register-form':  '🎊 Account created! Welcome to HopeWave.',
    'login-form':     '✅ Signed in! Welcome back.',
  };
  Object.keys(formMessages).forEach(id => {
    const form = document.getElementById(id);
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      toast(formMessages[id]);
      if (id !== 'donate-form' && id !== 'login-form') form.reset();
    });
  });

  /* ── Password toggle ─────────────────────────────────────────── */
  document.querySelectorAll('.pw-eye').forEach(btn => {
    btn.addEventListener('click', () => {
      const inp  = btn.previousElementSibling;
      const icon = btn.querySelector('i');
      inp.type = inp.type === 'password' ? 'text' : 'password';
      icon.className = inp.type === 'text' ? 'bi bi-eye-slash-fill' : 'bi bi-eye-fill';
    });
  });

  /* ── Password strength ───────────────────────────────────────── */
  const pwI = document.getElementById('reg-password');
  const pwB = document.getElementById('pw-strength-fill');
  const pwL = document.getElementById('pw-strength-label');
  if (pwI && pwB && pwL) {
    pwI.addEventListener('input', () => {
      const v = pwI.value;
      let s = 0;
      if (v.length >= 8)      s++;
      if (/[A-Z]/.test(v))   s++;
      if (/[0-9]/.test(v))   s++;
      if (/[^A-Za-z0-9]/.test(v)) s++;
      const lvl = [
        { w: '0%',   c: 'transparent', t: '' },
        { w: '25%',  c: '#C8372D',     t: 'Weak' },
        { w: '50%',  c: '#E67E22',     t: 'Fair' },
        { w: '75%',  c: '#F5A623',     t: 'Good' },
        { w: '100%', c: '#1D7A3A',     t: 'Strong' },
      ];
      pwB.style.width = lvl[s].w;
      pwB.style.background = lvl[s].c;
      pwL.textContent = lvl[s].t ? 'Strength: ' + lvl[s].t : '';
      pwL.style.color = lvl[s].c;
    });
  }

})();
