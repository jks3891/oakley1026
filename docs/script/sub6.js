AOS.init();

// 상품 페이지 스와이퍼
function ProdSwiper__Main() {
  var prodSwipers = $(".detail__top .prod-swiper");

  prodSwipers.each(function (index, container) {
    var $container = $(container);

    // 썸네일 스와이퍼
    var swiperThumb = new Swiper($container.find(".mySwiper")[0], {
      loop: true,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    // 메인 스와이퍼
    var swiperMain = new Swiper($container.find(".mySwiper2")[0], {
      loop: true,
      navigation: {
        nextEl: $container.find(".swiper-button-next")[0],
        prevEl: $container.find(".swiper-button-prev")[0],
      },
      thumbs: {
        swiper: swiperThumb,
      },
    });
  });
}

ProdSwiper__Main();

// 상세 페이지 하트
function HeartColor() {
  $("#button-heart").click(function () {
    let $this = $(this);

    let has = $this.hasClass("active");

    if (has) {
      $this.removeClass("active");
    } else {
      $this.addClass("active");
    }
  });
}

HeartColor();

// 상품 페이지 바텀 슬라이드
function ProdSwiper() {
  const swiper = new Swiper(".detail__bottom .swiper", {
    loop: false,
    speed: 500,
    slidesPerView: 2.5,
    slidesPerGroup: 1,
    spaceBetween: 10,

    navigation: {
      nextEl: ".detail__bottom .swiper-button-next",
      prevEl: ".detail__bottom .swiper-button-prev",
    },

    breakpoints: {
      800: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
}

ProdSwiper();
