$(function() {
	$('#pagepiling').pagepiling({
		navigation: {
            'textColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4']
        },
	});

	if ($(window).width() > 480){
		
		$('body').on('mousewheel', function(event){
		if ($('.section-4').hasClass('active')) {
	    	$("video").get(0).play()
	  	}else{
	    	$("video").get(0).pause();
	  	}
	});
		
		}
	$('body').on('mousewheel', function(event){
		if ($('.section-2').hasClass("active")){
			$('.s2-img-camera').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 2000);
			$('.s2-img-camera').addClass('anim-camera');
			$('.s2-img-coffee').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 2200);
			$('.s2-img-coffee').addClass('anim-coffee');
			$('h2').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 3000);
			$('h2').addClass('anim-s3-txt');
			$('.s2-img-plenka, .s2-img-plenka-2, .s2-img-instax').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 2200);
		}else{
			$('.s2-img-camera').removeClass('anim-camera');
			$('.s2-img-coffee').removeClass('anim-coffee');
			$('h2').removeClass('anim-s3-txt');
		}
	});

	

});
