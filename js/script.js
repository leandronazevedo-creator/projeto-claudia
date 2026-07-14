/* ============================================================
   FAQ Accordion
   ============================================================ */
document.querySelectorAll('.faq-q').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var expanded = this.getAttribute('aria-expanded') === 'true';
    var answer = document.getElementById(this.getAttribute('aria-controls'));

    document.querySelectorAll('.faq-q').forEach(function (other) {
      var otherAns = document.getElementById(other.getAttribute('aria-controls'));
      other.setAttribute('aria-expanded', 'false');
      if (otherAns) otherAns.hidden = true;
    });

    if (!expanded) {
      this.setAttribute('aria-expanded', 'true');
      if (answer) answer.hidden = false;
    }
  });
});

/* ============================================================
   Sticky CTA: aparece quando o hero sai da tela (mobile)
   ============================================================ */
var stickyCta = document.getElementById('stickyCta');
var hero = document.getElementById('hero');

if (stickyCta && hero && typeof IntersectionObserver !== 'undefined') {
  new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        stickyCta.classList.remove('is-visible');
        stickyCta.setAttribute('aria-hidden', 'true');
      } else {
        stickyCta.classList.add('is-visible');
        stickyCta.setAttribute('aria-hidden', 'false');
      }
    });
  }, { threshold: 0 }).observe(hero);
}

/* ============================================================
   Autoexame interativo: escolha de dedos revela o resultado
   ============================================================ */
document.querySelectorAll('.exam-opt').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.exam-opt').forEach(function (other) {
      other.classList.remove('is-active');
    });
    document.querySelectorAll('.exam-result').forEach(function (panel) {
      panel.hidden = true;
    });

    this.classList.add('is-active');
    var result = document.getElementById(this.getAttribute('data-result'));
    if (result) result.hidden = false;
  });
});

/* ============================================================
   Lightbox: toque no print para ampliar
   ============================================================ */
var lightbox = document.getElementById('lightbox');

if (lightbox) {
  var lightboxImg = lightbox.querySelector('.lightbox__img');
  var closeBtn = lightbox.querySelector('.lightbox__close');

  var closeLightbox = function () {
    lightbox.hidden = true;
    lightboxImg.src = '';
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.print[data-full]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      lightboxImg.src = this.getAttribute('data-full');
      var innerImg = this.querySelector('img');
      if (innerImg) lightboxImg.alt = innerImg.alt;
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });
}

/* ============================================================
   Smooth scroll para âncoras
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var id = this.getAttribute('href');
    if (id === '#') return;
    var target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
