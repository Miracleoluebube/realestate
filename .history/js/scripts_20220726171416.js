// const navbarToggler = document.querySelector(".navbar-toggler");
// const collapseNavbarCollapse = document.querySelector(".collapse navbar-collapse");

// navbarToggler.addEventListener("click", () => {
// 	navbarToggler.classList.toggle("active");
// 	collapseNavbarCollapse.toggle("active");	
// })

$(document).ready(function(){

	"use strict";
	
    // CAROUSEL BANNER
    $(".carousel-sliders").owlCarousel({
		animateOut: 'fadeOut',
    	animateIn: 'flipInX',
	    loop: true,
	    autoplay: true,
        autoplayTimeout: 5000,
	    nav: true,
	    dots: false,
	    navContainer: '.banner .custom-nav',
	    items: 1,
	});

	// CAROUSEL TESTIMONIALS
	$(".carousel-testimonials").owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		items: 1
	});
