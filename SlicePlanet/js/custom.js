$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded');
});
/* viewport width */
function viewport(){
	var e = window,
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){
 			$(this).attr('placeholder', placeholder);
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'),
		$('.main-nav-list').slideToggle();
		return false;
	});

	/* components */

	/*

	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};

	*/
	// sidebar toggle click Title (display content)
		// var arrowContainer = $('.jq-selectbox__trigger-arrow');
		// var arrowUp = $('<img>', { src: '../img/icons/arrow-up.png'});


		// 	$('.jq-selectbox__trigger-arrow').html('<img src="../img/icons/arrow-down.png">');



customJs();

function customJs() {
    $('.sidebar-filter').styler();

    //  append arrow into container
    let arrowContainer = $('.sidebar-filter .jq-selectbox__trigger-arrow');
    arrowContainer.html('<img src="img/icons/arrow-down.png">');

    $('.sidebar-title').click(function() {
        // toggle title sidebar
        $(this).find('.toggleArrow').parent().siblings('.sidebar-content').slideToggle();


        // active ScrollBar
        let countLi = $(this).siblings('.sidebar-content ').find('#slideContent').children('li');
        console.log(countLi.length);
        if (countLi.length > 6) {
            $(this).siblings('.sidebar-content ').mCustomScrollbar({
                axis: "y"
            });

        }


        // if statment for select arrows
        if ($(this).find('.jqselect').hasClass('dropdown')) {
            $(this).find('.jq-selectbox__trigger-arrow').html('<img src="img/icons/arrow-up.png">');
        } else {
            $(this).find('.jq-selectbox__trigger-arrow').html('<img src="img/icons/arrow-down.png">');
        }



    })

    //slider

    $('.multiple-items').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="parent-arrow slick-prev"><img src="img/icons/arrow-prev.png" ></div>',
        nextArrow: '<div class="parent-arrow slick-next"><img src="img/icons/arrow-next.png" ></div>',
        responsive: [

            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 451,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

        ]
    });

}












	/* components */



});

var handler = function(){

	var height_footer = $('footer').height();
	var height_header = $('header').height();
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	if (viewport_wid <= 991) {

	}

}
$(window).bind('load', handler);
$(window).bind('resize', handler);



