$(document).ready(function(){
	// Super Slides
	$('#slides').superslides({
		play:5000,
		animation:'fade',
		pagination:false
	});
	// Typed Js
	var typed = new Typed('.typed', {
		// Waits 1000ms after typing "First"
		strings: ['Web Developer','Flutter Developer'],
		loop:true,typeSpeed:80,
		showCursor: false
	});
	// Slide Navigation
	$("#navigation li a").click(function() {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 100 }, "slow");

    });
	
	// Owl Carousel skill section
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
			0:{
				items:1
			},
			700:{
				items:3
			},
			1000:{
				items:4
			},
			
		}
	});
	
	
	
	 var skillsTopOffset = $(".skillsSection").offset().top;
    $(window).scroll(function() {
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
	
			$('.chart').easyPieChart({
		easing:'easeInOut', 
		barColor:'white',
		trackColor:false,
		scaleColor:false,
		LineWidth:4,
		size:152,
		onStep(from, to, percent){
			$(this. el).find('.percent').text(Math.round(percent));
		}
    });
	
	
	}
    });
	
});