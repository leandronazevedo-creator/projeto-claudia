/* ============================================================
   Trilhos do dia e da jornada: preenchem com a rolagem e acendem cada horário
   ============================================================ */
(function () {
  var rails = document.querySelectorAll('.day-rail');
  if (!rails.length) return;
  var ticking = false;

  function update() {
    ticking = false;
    var mark = window.innerHeight * 0.62;
    rails.forEach(function (rail) {
      var rect = rail.getBoundingClientRect();
      var p = Math.max(0, Math.min(1, (mark - rect.top) / rect.height));
      rail.style.setProperty('--p', p.toFixed(4));
      rail.querySelectorAll('.day-moment').forEach(function (m) {
        var t = m.querySelector('.day-moment__time').getBoundingClientRect();
        m.classList.toggle('is-lit', t.top + t.height / 2 <= mark);
      });
    });
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();

/* ============================================================
   CTA fixo: fora do foco do teclado enquanto está escondido
   ============================================================ */
(function () {
  var sticky = document.getElementById('stickyCta');
  if (!sticky || typeof MutationObserver === 'undefined') return;
  new MutationObserver(function () {
    sticky.inert = !sticky.classList.contains('is-visible');
  }).observe(sticky, { attributes: true, attributeFilter: ['class'] });
})();
