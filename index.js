// Materialize JS
$(document).ready(function () {
  // Triggers sidebar
  $('.sidenav').sidenav();
  // Creates submission pop up
  //$('.modal').modal();
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();
});

// Vanilla JS

/* ------- For contact form -------- */
document.addEventListener('DOMContentLoaded', function () {
  // Attach `change` event listener to checkbox
  document.getElementById('othercheckbox').onchange = toggleOtherText;
}, false);

function toggleOtherText() {
  document.getElementById('othertextarea').disabled = !document.getElementById('othertextarea').disabled;

  if (!document.getElementById('othertextarea').disabled) {
    document.getElementById('otherlabel').style.color = "#1a237e";
  } else {
    document.getElementById('otherlabel').style.color = "grey";
  }
}

let form = document.getElementsByTagName('form')['contactform']
form.addEventListener('submit', thankTheReader);

function thankTheReader(event) {
  event.preventDefault();
  let popUp = document.getElementById('thankYouPopUp');

  let popUpOptions = document.getElementsByClassName('thankYouFooter')[0];

  for (var i = 0; i < popUpOptions.children.length; i++) {
    popUpOptions.addEventListener('click', removePopUp)
  }

  popUp.style.display = 'block';
}

function removePopUp(event) {
  let elem = event.target;
  let popUp = elem.parentNode.parentNode;
  popUp.style.display = 'none';
}
