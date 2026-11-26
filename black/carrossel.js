/* ============================================================
   Carrossel de depoimentos: setas, arrastar (rolagem nativa com
   snap) e contador. A ampliação no toque vem do lightbox de
   js/script.js (.print[data-full]).
   ============================================================ */
(function () {
  var car = document.querySelector('.bk-car');
  if (!car) return;
  var track = car.querySelector('.bk-car__track');
  var slides = track.querySelectorAll('.bk-car__slide');
  var prev = car.querySelector('.bk-car__arrow--prev');
  var next = car.querySelector('.bk-car__arrow--next');
  var count = document.querySelector('.bk-car__count');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var step = function () {
    /* passa o que cabe na tela, no mínimo um card */
    var card = slides[0].getBoundingClientRect().width;
    var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    var perView = Math.max(1, Math.floor((track.clientWidth + gap) / (card + gap)));
    return perView * (card + gap);
  };

  var update = function () {
    var max = track.scrollWidth - track.clientWidth - 2;
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= max;
    if (count) {
      var card = slides[0].getBoundingClientRect().width;
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      var first = Math.round(track.scrollLeft / (card + gap)) + 1;
      if (track.scrollLeft >= max) {
        first = slides.length - Math.max(1, Math.floor((track.clientWidth + gap) / (card + gap))) + 1;
      }
      count.textContent = Math.min(first, slides.length) + ' de ' + slides.length;
    }
  };

  [prev, next].forEach(function (btn) {
    btn.addEventListener('click', function () {
      var dir = Number(btn.getAttribute('data-dir'));
      track.scrollBy({ left: dir * step(), behavior: reduce ? 'auto' : 'smooth' });
    });
  });

  track.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { e.preventDefault(); next.click(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev.click(); }
  });

  var ticking = false;
  track.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { update(); ticking = false; });
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
