// Canopy reference site — the only behavior the pages need.
(function () {
  // Hamburger menu inside the ink rail
  var toggle = document.querySelector('[data-menu-toggle]');
  if (toggle) {
    var menu = document.getElementById(toggle.getAttribute('aria-controls'));
    var iconOpen = toggle.querySelector('.icon-open');
    var iconClose = toggle.querySelector('.icon-close');
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
      menu.hidden = !open;
      if (iconOpen) iconOpen.hidden = open;
      if (iconClose) iconClose.hidden = !open;
    };
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
    // On phones the rail sits below the hero; the small hamburger in the green
    // stage jumps down to it and opens the menu.
    document.querySelectorAll('.stage-menu').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(true); });
    });
  }

  // Book-a-call form (front end only — wire the submit to a real endpoint)
  var form = document.querySelector('[data-book-form]');
  if (form) {
    var sent = document.querySelector('[data-book-sent]');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // TODO: POST the form data to the form backend (see CLAUDE.md, "Book a call form").
      form.hidden = true;
      sent.hidden = false;
      sent.focus();
    });
    var reset = document.querySelector('[data-book-reset]');
    if (reset) {
      reset.addEventListener('click', function () {
        form.reset();
        form.hidden = false;
        sent.hidden = true;
      });
    }
  }
})();
