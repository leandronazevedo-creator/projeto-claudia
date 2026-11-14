/* ============================================================
   Black November: contagem regressiva até 30/11 às 23h59 (Brasília)
   O prazo é definido no <head> (window.BN_DEADLINE).
   ============================================================ */
(function () {
  var deadline = window.BN_DEADLINE || Date.parse('2026-11-30T23:59:59-03:00');
  var pad = function (n) { return n < 10 ? '0' + n : String(n); };
  var slots = {
    d: document.querySelectorAll('[data-bn="d"]'),
    h: document.querySelectorAll('[data-bn="h"]'),
    m: document.querySelectorAll('[data-bn="m"]'),
    s: document.querySelectorAll('[data-bn="s"]'),
    short: document.querySelectorAll('[data-bn="short"]')
  };
  var fill = function (list, text) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].textContent !== text) list[i].textContent = text;
    }
  };
  var timer;

  var tick = function () {
    var left = deadline - Date.now();
    if (left <= 0) {
      /* acabou com a página aberta: leva para a oferta normal */
      clearInterval(timer);
      location.replace('../' + location.search);
      return;
    }
    var sec = Math.floor(left / 1000);
    var d = Math.floor(sec / 86400);
    var h = Math.floor((sec % 86400) / 3600);
    var m = Math.floor((sec % 3600) / 60);
    var s = sec % 60;
    fill(slots.d, pad(d));
    fill(slots.h, pad(h));
    fill(slots.m, pad(m));
    fill(slots.s, pad(s));
    fill(slots.short, (d > 0 ? d + (d === 1 ? ' dia ' : ' dias ') : '') + pad(h) + ':' + pad(m) + ':' + pad(s));
  };

  tick();
  timer = setInterval(tick, 1000);
})();
