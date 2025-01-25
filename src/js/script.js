
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    // ハンバーガーメニュー
    $(".js-hamburger,.js-drawer").click(function () {
        $(".js-hamburger").toggleClass("is-active");
        $(".js-drawer").fadeToggle();
      });
});

const mySwiper = new Swiper('.mv .swiper', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 5000,
    },
    effect: 'fade',
    speed: 600,
   
  });


  const mySwiper1 = new Swiper('.campaign .swiper', {
    // Optional parameters
    loop: true,
    // loopAdditionalSlides: 1,
    slidesPerView: 'auto',
    spaceBetween: '1.5rem', 
    autoplay: {
        delay: 5000,
    },
    speed: 600,
    fadeEffect: {
      crossFade: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.campaign__swiper-button-next',
      prevEl: '.campaign__swiper-button-prev',
    },
  });


//要素の取得とスピードの設定
var box = $('.voice-card__figure , .information__image'),
    speed = 700;  
 
//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;
 
    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
          $(this).delay(200).animate({'width':'100%'},speed,function(){
                   image.css('opacity','1');
                   $(this).css({'left':'0' , 'right':'auto'});
                   $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
     });
});
  
    // スクロールするとロゴの色変更
    $(window).on("scroll", function () {
      const sliderHeight = $(".mv").height();
      if (sliderHeight - 30 < $(this).scrollTop()) {
        $(".js-top").addClass("is-active");
      } else {
        $(".js-top").removeClass("is-active");
      }
    });
    