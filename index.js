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

/* ------- For article cards ------- */
let articleCards = document.getElementsByClassName('card');
for (var i = 0; i < articleCards.length; i++) {
  articleCards[i].addEventListener('mouseenter', active);
  articleCards[i].addEventListener('mouseleave', nonActiveCard);
  let cardComponents = articleCards[i].children;
  let noOfComponents = cardComponents.length;
  console.log(cardComponents[noOfComponents - 1].firstElementChild);
  console.log(cardComponents[noOfComponents - 1].firstElementChild.parentNode.parentNode);

  cardComponents[noOfComponents - 1].firstElementChild.addEventListener('click', nonActiveLink);
}

function active(event) {
  let card = event.target;
  card.classList.remove('teal');
  card.classList.add('pink');
  card.classList.add('z-depth-5');
}

function nonActiveCard(event) {
  let card = event.target;
  card.classList.remove('pink');
  card.classList.add('teal');
  card.classList.remove('z-depth-5');
}

function nonActiveLink(event) {
  let card = event.target.parentNode.parentNode;
  card.classList.remove('pink');
  card.classList.add('teal');
  card.classList.remove('z-depth-5');
}

/* ------- For contact form ------- */
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
