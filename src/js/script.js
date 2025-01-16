
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
   
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
   
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
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
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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

// $(function () {
//     // ハンバーガーメニュー
//     $(".js-hamburger,.js-drawer").click(function () {
//       $(".js-hamburger").toggleClass("is-active");
//       $(".js-drawer").fadeToggle();
//     });
  
//     // スライダー
//     const swiper = new Swiper(".swiper", {
//       loop: true,
//       effect: "fade",
//       speed: 3000,
//       allowTouchMove: false,
//       autoplay: {
//         delay: 3000,
//       },
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     });
  
    // スクロールするとロゴの色変更
    $(window).on("scroll", function () {
      const sliderHeight = $(".mv").height();
      if (sliderHeight - 30 < $(this).scrollTop()) {
        $(".js-top").addClass("is-active");
      } else {
        $(".js-top").removeClass("is-active");
      }
    });
  
//     // タブ切り替え
//     $('.tab_box .tab_btn').each(function (index) {
//       $(this).on('click', function () {
//         // すべてのボタンとパネルから 'active' クラスを削除
//         $('.tab_box .tab_btn, .tab_box .tab_panel').removeClass('active');
  
//         // クリックされたボタンに 'active' クラスを追加
//         $(this).addClass('active');
  
//         // クリックされたボタンに対応するパネルに 'active' クラスを追加
//         $('.tab_box .tab_panel').eq(index).addClass('active');
//       });
//     });
  
//     // モーダル
//     const trigger = $('.modal__trigger');
//     const wrapper = $('.modal__wrapper');
//     const layer = $('.modal__layer');
//     const container = $('.modal__container');
//     const close = $('.modal__close');
  
//     // モーダルを開くボタンをクリックしたら、モーダル本体を表示
//     trigger.each(function (index) {
//       $(this).on('click', function () {
//         wrapper.eq(index).css({
//           display: 'block',
//           opacity: 0,
//           transition: 'opacity 0.4s ease-in-out'
//         }).animate({ opacity: 1 });
  
//         container.scrollTop(0);
  
//         $('body').css('overflow', 'hidden');
//         $('html').css('overflow', 'hidden');
//         $('body').css('background-color', 'rgba(0, 0, 0, 0.5)');
//       });
//     });
  
//     // 背景とモーダルを閉じるボタンをクリックしたら、モーダル本体を非表示
//      layer.on('click', function () { wrapper.animate({ opacity: 0 }, 400, function () { $(this).css('display', 'none'); $('body').css('overflow', 'auto'); $('html').css('overflow', 'auto'); }); }); close.on('click', function () { wrapper.animate({ opacity: 0 }, 400, function () { $(this).css('display', 'none'); $('body').css('overflow', 'auto'); $('html').css('overflow', 'auto'); }); }); });