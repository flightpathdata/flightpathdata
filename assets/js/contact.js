/* Progressive enhancement for every .cform on the page: submit via fetch
   so the visitor stays put, and show the inline success block. With JS
   off, the form does a normal POST to Web3Forms and follows `redirect`. */
document.querySelectorAll('.cform').forEach(function (form) {
  var wrap = form.closest('.cform-wrap');
  var btn = form.querySelector('button[type="submit"]');
  var label = btn ? btn.textContent : '';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.classList.remove('is-error');
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

    var data = new FormData(form);
    data.delete('redirect'); // no-JS only

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data
    }).then(function (r) {
      return r.json().catch(function () { return { success: r.ok }; });
    }).then(function (res) {
      if (res && res.success) {
        if (wrap) wrap.classList.add('is-sent');
        form.reset();
      } else {
        throw new Error('rejected');
      }
    }).catch(function () {
      form.classList.add('is-error');
    }).then(function () {
      if (btn) { btn.disabled = false; btn.textContent = label; }
    });
  });
});
