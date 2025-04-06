
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    // ハンバーガーメニュー
    $(".js-hamburger,.js-drawer").click(function () {
        $(".js-hamburger").toggleClass("is-drawer-active");
        $("body").toggleClass("is-drawer-active");
        $(".js-drawer").fadeToggle();
    });

    // ウィンドウ幅が768px以上になったらドロアーを閉じる
    $(window).resize(function() {
        if ($(window).width() >= 768) {
            $(".js-hamburger").removeClass("is-drawer-active");
            $("body").removeClass("is-drawer-active");
            $(".js-drawer").fadeOut();
        }
    });

    // スクロールするとロゴの色変更
    $(window).on("scroll", function () {
        const sliderHeight = $(".mv").height();
        if (sliderHeight - 30 < $(this).scrollTop()) {
          $(".js-top").addClass("is-return-button-active");
        } else {
          $(".js-top").removeClass("is-return-button-active");
        }
      });
});

// mySwiperが2回宣言されているので、変数名を変更
const mvSwiper = new Swiper('.js-mv', {
  // Optional parameters
  loop: true,
  autoplay: {
      delay: 5000,
  },
  effect: 'fade',
  speed: 600,
 
});

const campaignSwiper = new Swiper(".js-campaign", {
    spaceBetween: 24, 
    conteredSlides: true,
  
    // Optional parameters
    loop: true,
    loopAdditionalslides: 1,
    // loopslides: 3,
    autoplay: {
        delay: 5000,
    },
    // speed: 5000,

    // Navigation arrows
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  // スライドの表示枚数
  slidesPerView: 'auto',
    breakpoints: {
          // スライドの表示枚数：768px以上の場合
      768: {
        spaceBetween: 40,
        slidesPerView: 'auto',
      },
    },
  });

//要素の取得とスピードの設定
var box = $('.voice-card__figure , .information__image , .price__header-image'),
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
