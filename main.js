// MOVING DIV "#blank" TO DIFFERENT PARENT, DEPENDING ON MEDIA WIDTH.

// A constant keeping track of Medias width. <600px = true, >600px = false
const mediaQueryList = window.matchMedia('(max-width: 600px)');

// A function, dafining what should happen when the variable is true and false (move #blank to correct div).
function handleWidthChange(evt) {
	if (evt.matches) {
		$("#blank").prependTo($("#plate_c"));
		$("#info_a").prependTo($("#scroll"));
		$("#info_c").prependTo($("#scroll"));
		$("#info_d").prependTo($("#scroll"));
	} else {
		$("#blank").prependTo($("#plate_b"));
		$("#info_a").prependTo($("#blank"));
		$("#info_c").prependTo($("#blank"));
		$("#info_d").prependTo($("#blank"));
	}
}

// The function is called once, using our constant, to make sure the look of our site corresponds to the window size used when opened.
handleWidthChange(mediaQueryList);

// An "EventListener", calls our function every time our constans changes value.
mediaQueryList.addEventListener('change', handleWidthChange);


// SHOWING "#blank", WHEN HOVERING/CLICKING "#x_x".

// Defining Javascript constans with same name as divs.
const footer_b = document.getElementById('footer_b');
const footer_a = document.getElementById('footer_a');
const blank = document.getElementById('blank');

/* Adding EventListeners and telling them what to do when hovering, and not hovering.
footer_b.addEventListener('mouseover', function handleMouseOverEvent() {
	blank.style.display = 'block' ;
})

footer_b.addEventListener('mouseout', function handleMouseOutEvent() {
	blank.style.display = 'none';
}) */

// Adding EventListeners and telling them what to do when clicking, and not hovering. //
footer_b.addEventListener('click', ()=>{
  if (blank.style.display === "none") {
    blank.style.display = "grid";
  } else {
    blank.style.display = "none";
  }
})


// ALBUM - add more div's whitout changing code.

// Counter
var x = 0

// Constants referencing divs.
const plate_a = document.getElementById("plate_a");
const plate_b = document.getElementById("plate_b");
const nav_container = document.getElementById("nav_container")

// Array with all elements with class "page"
const pages = document.getElementsByClassName("page");

var project_index = document.getElementById("project_index");
var project_name = document.getElementById("project_name")

// Displays first instance of pages on page load.
pages[0].style.display='block';
nav_container.style.color = pages[0].dataset.navtextcolor;
blank.style.backgroundColor = pages[0].dataset.navtextcolor;
blank.style.color = pages[0].dataset.blanktextcolor;
project_index.textContent = pages[0].dataset.index;
project_name.textContent = pages[0].dataset.name;
blank.style.display = "none";



// Counts downwars on each click, and calls function cycle().
plate_a.addEventListener('click', ()=>{
	if (0 < x)	{
		x--;
	} else {
		x = x
	}
	cycle()
})

// Counts upwards on each click, and calls function cycle().
plate_b.addEventListener('click', ()=>{
	if (x < (pages.length-1)) {
		x++;
	} else {
		x = x;
	}
	cycle()
})

// Cycles between pages and their attributes.
function cycle() {
	for (var i = pages.length - 1; i >= 0; i--) {
		if (pages[i] == pages[x]) {
			pages[i].style.display='block';
			nav_container.style.color = pages[x].dataset.navtextcolor;
			blank.style.backgroundColor = pages[x].dataset.navtextcolor;
			blank.style.color = pages[x].dataset.blanktextcolor;
			project_index.textContent = pages[x].dataset.index;
			project_name.textContent = pages[x].dataset.name;
		} else {
			pages[i].style.display='none'
		}
	}
}