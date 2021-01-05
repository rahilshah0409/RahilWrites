// Materialize JS
$(document).ready(function () {
  // Triggers sidebar
  $('.sidenav').sidenav();
  // Creates submission pop up
  $('.modal').modal();
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();
});

// Wait for the page to finish loading
document.addEventListener('DOMContentLoaded', function () {
    // Attach `change` event listener to checkbox
    document.getElementById('othercheckbox').onchange = toggleOtherText;
  }, false);

  function toggleOtherText() {
    document.getElementById('othertextarea').disabled = !document.getElementById('othertextarea').disabled;
  }