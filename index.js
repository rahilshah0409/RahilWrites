// Wait for the page to finish loading
document.addEventListener('DOMContentLoaded', function () {
    // Attach `change` event listener to checkbox
    document.getElementById('othercheckbox').onchange = toggleOtherText;
  }, false);

  function toggleOtherText() {
    document.getElementById('othertextarea').disabled = !document.getElementById('othertextarea').disabled;
  }