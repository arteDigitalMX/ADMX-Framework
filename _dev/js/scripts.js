//INICIA ONLOAD
document.addEventListener("DOMContentLoaded", function() {

//Sticky Menú
var stickyElement = document.getElementById("stickyElement");
var stuck = false;
var stickPoint = getDistance();

function getDistance() {
  var topDist = stickyElement.offsetTop;
  return topDist;
}

window.onscroll = function(e) {
  var distance = getDistance() - window.pageYOffset;
  var offset = window.pageYOffset;
  if ( (distance <= 0) && !stuck) {
    stickyElement.style.position = 'fixed';
    stickyElement.style.top = '0px';
    stuck = true;
  } else if (stuck && (offset <= stickPoint)){
    stickyElement.style.position = 'static';
    stuck = false;
  }
}

//Menu
var myComponentElement = document.getElementById('menuResponsive');
nst.init(myComponentElement);

var toggleMenu = document.querySelector('.menu');
toggleMenu.onclick = function() {
	toggleMenu.classList.toggle('open');
}

//Scroll Spy
var spy = new Gumshoe('.mMenu a', {

	// Active classes
	navClass: 'active', // applied to the nav list item
	contentClass: 'none', // applied to the content

	// Nested navigation
	nested: false, // if true, add classes to parents of active link
	nestedClass: 'active', // applied to the parent items

	// Offset & reflow
	offset: 0, // how far from the top of the page to activate a content area
	reflow: false, // if true, listen for reflows

	// Event support
	events: true // if true, emit custom events

});


// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});



//-END ONLOAD
});