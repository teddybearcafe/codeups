jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // ハンバーガーメニュー
  $(".js-hamburger,.js-drawer").click(function () {
    $(".js-hamburger").toggleClass("is-drawer-active");
    $("body").toggleClass("is-drawer-active");
    $(".js-drawer").fadeToggle();
  });

  // ウィンドウ幅が768px以上になったらドロアーを閉じる
  $(window).resize(function () {
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
const mvSwiper = new Swiper(".js-mv", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 5000,
  },
  effect: "fade",
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
  slidesPerView: "auto",
  breakpoints: {
    // スライドの表示枚数：768px以上の場合
    768: {
      spaceBetween: 40,
      slidesPerView: "auto",
    },
  },
});

//要素の取得とスピードの設定
var box = $(".voice-card__figure , .information__image , .price__header-image"),
  speed = 700;

//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function () {
  $(this).append('<div class="color"></div>');
  var color = $(this).find($(".color")),
    image = $(this).find("img");
  var counter = 0;

  image.css("opacity", "0");
  color.css("width", "0%");
  //inviewを使って背景色が画面に現れたら処理をする
  color.on("inview", function () {
    if (counter == 0) {
      $(this)
        .delay(200)
        .animate({ width: "100%" }, speed, function () {
          image.css("opacity", "1");
          $(this).css({ left: "0", right: "auto" });
          $(this).animate({ width: "0%" }, speed);
        });
      counter = 1;
    }
  });
});

// タブ切り替え
//任意のタブにURLからリンクするための設定
function GethashID(hashIDName) {
  if (hashIDName) {
    //タブ設定
    $(".tab-area li")
      .find("a")
      .each(function () {
        //タブ内のaタグ全てを取得
        var idName = $(this).attr("href"); //タブ内のaタグのリンク名（例）#lunchの値を取得
        if (idName == hashIDName) {
          //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
          var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
          $(".tab-area li").removeClass("tab-button--active"); //タブ内のliについているactiveクラスを取り除き
          $(".tab-area li a img").removeClass("tab-button__link-icon--active"); //タブ内のimgについているactiveクラスを取り除き
          $(parentElm).addClass("tab-button--active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
          $(parentElm).find("a img").addClass("tab-button__link-icon--active"); //対応するimgにactiveクラスを追加
          //表示させるエリア設定
          $(".tab-panel").removeClass("tab-panel--active"); //もともとついているis-activeクラスを取り除き
          $(hashIDName).addClass("tab-panel--active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加
        }
      });
  }
}

//タブをクリックしたら
$(".tab-button a").on("click", function () {
  var idName = $(this).attr("href"); //タブ内のリンク名を取得
  GethashID(idName); //設定したタブの読み込みと
  return false; //aタグを無効にする
});

// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on("load", function () {
  $(".tab-area li:first-of-type").addClass("tab-button--active"); //最初のliにactiveクラスを追加
  $(".tab-area li:first-of-type a img").addClass(
    "tab-button__link-icon--active"
  ); //最初のimgにactiveクラスを追加
  $(".tab-panel:first-of-type").addClass("tab-panel--active"); //最初の.areaにis-activeクラスを追加
  var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
  GethashID(hashName); //設定したタブの読み込み
});

// 最初のアーカイブアイテムを開いた状態にする
$(document).ready(function() {
  $(".article-archive__item:first-child").addClass("article-archive__item--open");
  $(".article-archive__item:first-child .article-archive__list").show();
});

$(".article-archive__item-btn").click(function () {
  const parentItem = $(this).closest(".article-archive__item");

  // 月リストの表示/非表示
  $(this).siblings(".article-archive__list").stop().slideToggle();

  // アイテムの状態を更新
  parentItem.toggleClass("article-archive__item--open");
});
