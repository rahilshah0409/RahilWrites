// Materialize JS
$(document).ready(function () {
  // Triggers sidebar
  $('.sidenav').sidenav();
  // Creates submission pop up
  $('.modal').modal();
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

// Modal for submission pop-up after checking that relevant form questions have been filled in
// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.modal');
//   var instances = M.Modal.init(elems, options);
// });

document.addEventListener('DOMContentLoaded', enableSubmit(), false);

function enableSubmit() {
  let contactform = document.forms["contactform"];
  let fullname = contactform["fullname"];
  let email = contactform["email"];

  if (fullname.value != "") {
    document.getElementById('modalbtn').disabled = false;
  }
}

enableSubmit();