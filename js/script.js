$(function(){

  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow:".banner-prv",
    nextArrow:".banner-nxt",
  });

  $('.service-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical:true,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    rows:0,
    prevArrow:".top-arr",
    nextArrow:".btm-arr",
  });


  $('.test-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical:true,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    rows:0,
    asNavFor: '.test-rvw-2',
    prevArrow:".tt-arr",
    nextArrow:".tb-arr",
  });

  $('.test-rvw-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical:true,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    rows:0,
    asNavFor: '.test-slider'
  });


})

$(function(){
  $('.counter').counterUp({
      delay: 5,
      time: 1000
  });
})


