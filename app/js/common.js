$(function() {

	var
		screen = 0,
		pages = $('.page'),
		container = $('.main-content'),
		inscroll = false;
	if ($(window).width() > 480){
		$('.page:first-child').addClass('active');	
		$('body').on('mousewheel', function(event){
			var 
				activePage = pages.filter('.active');
			
			if(!inscroll){
				inscroll = true;
				if(event.deltaY > 0){
					if (activePage.prev().length) {
						screen--;
					}
				}else{
					if (activePage.next().length) {
					screen++;
					}
				}
			}
			var
				position = (-screen * 100) + "%";

			pages.eq(screen).addClass('active').siblings().removeClass('active');
			container.css('top', position);
			setTimeout(function(){
					inscroll = false;
				},1500);
		});
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
	$("video").get(0).play()

	

});
