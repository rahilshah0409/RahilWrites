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
  console.log("Event type is " + event.type);
  let popUp = document.getElementById('thankYouPopUp');
  popUp.style.display = 'block';
}