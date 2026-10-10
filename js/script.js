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

/* Some quando o hero, o card de preço ou o CTA final estão na tela,
   para nunca mostrar dois botões iguais ao mesmo tempo */
if (stickyCta && hero && typeof IntersectionObserver !== 'undefined') {
  var watched = [hero, document.getElementById('checkout'), document.getElementById('cta-final')]
    .filter(function (el) { return el; });
  var onScreen = {};

  var setSticky = function (show) {
    stickyCta.classList.toggle('is-visible', show);
    stickyCta.setAttribute('aria-hidden', show ? 'false' : 'true');
    stickyCta.inert = !show;
  };

  setSticky(false);
  var stickyObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      onScreen[entry.target.id] = entry.isIntersecting;
    });
    var anyVisible = watched.some(function (el) { return onScreen[el.id] !== false; });
    setSticky(!anyVisible);
  }, { threshold: 0 });
  watched.forEach(function (el) { stickyObserver.observe(el); });
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
    if (result) {
      result.hidden = false;
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      result.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
    }
  });
});

/* ============================================================
   Lightbox: toque no print para ampliar
   ============================================================ */
var lightbox = document.getElementById('lightbox');

if (lightbox) {
  var lightboxImg = lightbox.querySelector('.lightbox__img');
  var closeBtn = lightbox.querySelector('.lightbox__close');

  var lastTrigger = null;

  var closeLightbox = function () {
    lightbox.hidden = true;
    lightboxImg.removeAttribute('src');
    document.body.style.overflow = '';
    if (lastTrigger) lastTrigger.focus();
  };

  document.querySelectorAll('.print[data-full]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      lightboxImg.src = this.getAttribute('data-full');
      var innerImg = this.querySelector('img');
      if (innerImg) lightboxImg.alt = innerImg.alt;
      lastTrigger = this;
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    /* único controle da janela: o foco fica no botão de fechar */
    if (e.key === 'Tab') { e.preventDefault(); closeBtn.focus(); }
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
