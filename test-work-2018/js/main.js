 $(document).ready(function(){



// articles toggle news
$(".toggleBtn").click(function(e){
		e.preventDefault();
    $(this).parent().toggleClass("open");
    $(this).toggleClass("open");
    if($(this).hasClass('open')){
    	$(this).children().attr('src', 'images/arrow-up.png');
    }else{
    	$(this).children().attr('src', 'images/arrow-down.png');
    }
});


// footer category
$(".mobile-category-title").click(function(e){
		e.preventDefault();
		$(this).children('img').toggleClass('open-category');
		$(this).siblings('.mobile-category-content').toggleClass('mobile-category-open');

});


// mobile menu


$('.mobileMButton').click(function() {
	$('.overlay').fadeToggle('slow');
	$('.mMenu').fadeToggle('slow');
	$(this).toggleClass('open');
	if($(this).hasClass('open')){
		$(this).children().attr('src', 'images/close.png');
	}else{
			$(this).children().attr('src', 'images/mobile-menu.png');
	}
})


if (screen.width == '768') {


 $('.multiple-items').slick({
      infinite: true,
      dots: true,
      slidesToShow: 3,

    });

}





if (screen.width == '640') {


 $('.multiple-items').slick({
      infinite: true,
      dots: true,
      slidesToShow: 1,

    });

}





     });







