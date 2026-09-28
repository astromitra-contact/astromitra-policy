// Small vanilla-JS helpers shared by both legal pages:
//  1) highlights the current section in the table of contents while scrolling
//  2) shows a back-to-top button once the reader has scrolled down
(function () {
  var sections = Array.prototype.slice.call(document.querySelectorAll('.am-card[id]'));
  var links = Array.prototype.slice.call(document.querySelectorAll('.am-toc a'));
  var toTop = document.getElementById('toTop');

  function onScroll() {
    var y = window.scrollY + 130;
    var currentId = null;
    sections.forEach(function (s) { if (s.offsetTop <= y) currentId = s.id; });
    links.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + currentId);
    });
    if (toTop) toTop.classList.toggle('show', window.scrollY > 500);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
