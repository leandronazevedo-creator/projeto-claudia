/* ============================================================
   Trilho do dia: preenche com a rolagem e acende cada horário
   ============================================================ */
(function () {
  var rail = document.querySelector('.day-rail');
  if (!rail) return;
  var moments = rail.querySelectorAll('.day-moment');
  var ticking = false;

  function update() {
    ticking = false;
    var rect = rail.getBoundingClientRect();
    var mark = window.innerHeight * 0.62;
    var p = (mark - rect.top) / rect.height;
    p = Math.max(0, Math.min(1, p));
    rail.style.setProperty('--p', p.toFixed(4));

    moments.forEach(function (m) {
      var t = m.querySelector('.day-moment__time').getBoundingClientRect();
      m.classList.toggle('is-lit', t.top + t.height / 2 <= mark);
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
