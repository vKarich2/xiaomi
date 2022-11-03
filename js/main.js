$(function(){
	$("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
	
	$(".bike__slider, .slider__items").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});


