// Example program card: Approve / Edit toggle
(function () {
  var card = document.querySelector('.program');
  var approve = document.getElementById('approve-btn');
  var edit = document.getElementById('edit-btn');
  var text = document.getElementById('status-text');
  if (card && approve && edit && text) {
    approve.addEventListener('click', function () {
      card.classList.add('is-approved');
      approve.textContent = 'Approved';
      text.textContent = 'Approved. Ready to send to your client.';
    });
    edit.addEventListener('click', function () {
      card.classList.remove('is-approved');
      approve.textContent = 'Approve';
      text.textContent = 'Editing. Approve when it looks right.';
    });
  }

  // Copy email button
  var copy = document.getElementById('copy-btn');
  var email = document.getElementById('email-text');
  if (copy && email) {
    copy.addEventListener('click', function () {
      var addr = email.textContent.trim();
      var done = function () { copy.textContent = 'Copied'; setTimeout(function () { copy.textContent = 'Copy email'; }, 1800); };
      var fallback = function () {
        var r = document.createRange(); r.selectNodeContents(email);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        copy.textContent = 'Selected. Press Ctrl+C';
      };
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(addr).then(done, fallback);
        } else { fallback(); }
      } catch (e) { fallback(); }
    });
  }
})();
