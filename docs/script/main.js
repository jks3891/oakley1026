console.clear();
AOS.init();

// 메인 영상 스와이퍼
function MainSwiper() {
  const swiper = new Swiper(".main-swiper .swiper", {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 500,

    autoplay: {
      delay: 16000,
    },

    pagination: {
      el: ".main-swiper .swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

MainSwiper();

// 클릭하면 나타나는 가상거울 팝업창
function VertualPopup() {
  $(".vertual-banner .button").click(function () {
    $(".vertual-popup").addClass("active");
    $("body").addClass("active");
  });

  $(".vertual-popup").click(function () {
    $(".vertual-popup").removeClass("active");
    $("body").removeClass("active");
  });

  $(".vertual-popup__video").click(function (e) {
    e.stopPropagation();
  });

  $(".vertual-popup__btn").click(function () {
    $(".vertual-popup").removeClass("active");
    $("body").removeClass("active");
  });
}

VertualPopup();

// 커스텀 슬라이드
function SwiperBox__init(no) {
  const swiper = new Swiper(`.tab-box__body .swiper-${no}`, {
    loop: true,
    speed: 500,
    centeredSlides: true,
    slidesPerView: 1.4,
    slidesPerGroup: 1,

    navigation: {
      nextEl: ".tab-box__body .swiper-button-next",
      prevEl: ".tab-box__body .swiper-button-prev",
    },

    pagination: {
      el: `.tab-box__body .swiper-${no} .swiper-pagination`,
      clickable: true, // 페이지네이션 버튼 클릭
    },

    breakpoints: {
      600: {
        slidesPerView: 3, // 한 화면에서 보여질 슬라이드 개수
        spaceBetween: 30, // 슬라이드 사이의 여백
      },
    },
  });
}

SwiperBox__init(1);
SwiperBox__init(2);
SwiperBox__init(3);

// 탭 메뉴
function TabBox__changed(eventType, tbName, tbItemNo) {}
function TabBox__init() {
  $("[data-tb]").each(function (index, el) {
    const $el = $(el);
    const tbAttrValue = $el.attr("data-tb");

    const tbAttrValueBits = tbAttrValue.split("__");

    const tbName = tbAttrValueBits[0];
    const tbItemNo = parseInt(tbAttrValueBits[1]);
    const tbItemType = tbAttrValueBits[2];

    $el.data("data-tbName", tbName);
    $el.data("data-tbItemNo", tbItemNo);
    $el.data("data-tbItemType", tbItemType);

    if (tbItemType == "head") {
      const $items = $(`[data-tb^="${tbName}__"]`);
      const $bodyItem = $(`[data-tb="${tbName}__${tbItemNo}__body"]`);

      $el.click(function () {
        const $activedItems = $(`[data-tb^="${tbName}__"].tb-active`);

        if ($activedItems.length > 0) {
          const oldNo = $activedItems.eq(0).data("data-tbItemNo");

          if (oldNo == tbItemNo) {
            return;
          }

          $activedItems.removeClass("tb-active");
          $("html").removeClass(`${tbName}__${oldNo}__actived`);
          if (TabBox__changed) {
            TabBox__changed("inactive", tbName, oldNo);
          }
        }

        $(`[data-tb="${tbName}__${tbItemNo}__head"]:not(.tb-active)`).addClass(
          "tb-active"
        );
        $bodyItem.addClass("tb-active");

        $("html").addClass(`${tbName}__${tbItemNo}__actived`);
        if (TabBox__changed) {
          TabBox__changed("active", tbName, tbItemNo);
        }
      });
    }
  });

  $("[data-tb-clicked]").click();
}

TabBox__init();
