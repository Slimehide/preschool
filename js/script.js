$(document).ready(function(){
	$('.faq__wrapper .elem').on('click' ,function(e){
		if ($(this).hasClass('opened')) {
			$(this).removeClass('opened');
			$(this).find('.content').slideUp(300);
		} else{
			$(this).addClass('opened');
			$(this).find('.content').slideDown(300);			
		}
	});

	$('.info__popup').on("mouseenter" ,function(e){
		$('.float__popup').fadeIn(150);
		$('.float__popup').css("left" , $(this).offset().left - 50);
		$(".float__popup").css("top" , $(this).offset().top - $('.float__popup').outerHeight() - 20);
	});
	$('.info__popup').on("mouseleave" ,function(){
		$('.float__popup').fadeOut(150);
	});

	$('.menu__btn>a').on('click' ,function(e){
		e.preventDefault();
		if ($(this).hasClass('opened')) {
			$(this).removeClass('opened');
			$('body,html').css("overflow-y" ,"initial");
			$('.right__part .menu').css('top' ,"-100%");
		} else {
			$(this).addClass("opened");
			$('body,html').css("overflow-y" ,"hidden");
			$('.right__part .menu').css('top' ,"0px");
		}
	});
});