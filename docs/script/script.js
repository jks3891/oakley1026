console.clear();

// 검색창
function SearchBar() {
  $("#search-bar-open").click(function () {
    $(".search-box").slideDown(500);
  });

  $(".search-box__close-btn").click(function () {
    $(".search-box").slideUp(500);
  });

  $(".icon-magnifier").click(function () {
    $(".search-box").slideUp(500);
  });

  $(".search-box").click(function () {
    $(".search-box").slideUp(500);
  });

  $(".search-box-ctn").click(function (e) {
    e.stopPropagation();
  });
}

SearchBar();

// 스크롤 탑바
function ScrollTopBar() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(".top-bar").addClass("active");
    } else {
      $(".top-bar").removeClass("active");
    }
  });
}

ScrollTopBar();

// 햄버거 메뉴 클릭
$(".icon-menu").click(function () {
  $(".icon-menu .line").toggleClass("active");
  $(".mobile-side-bar").toggleClass("active");
  $(".top-bar .icon-search").toggleClass("active");
});

// 모바일 메뉴 구현
function MobileMenuBox1__init() {
  // $('.mobile-menu-box-1 ul').slideUp();

  $(".mobile-menu-box ul > li").click(function () {
    let $this = $(this);
    let has = $this.hasClass("active");

    // 클릭당한 대상의 active 붙어있는 형제들 먼저 호출
    // 그의 모든 후손은 slideUp이 되라!!
    $this.siblings(".active").find("ul").stop().slideUp(300);

    // 클릭당한 대상의 active 붙어있는 형제들 먼저 호출
    // 형제들 호출 뒤, active 붙어있는 후손들부터 active 제거!
    $this.siblings(".active").find(".active").removeClass("active");

    // 클릭당한 대상의 active 붙어있는 형제들 호출 후 active 제거!
    $this.siblings(".active").removeClass("active");

    if (has) {
      $this.find("> ul").stop().slideUp(300);
      $this.find(".active").removeClass("active");
      $this.removeClass("active");
    } else {
      $this.find("> ul").stop().slideDown(300);
      $this.addClass("active");
    }

    // mobile-menu-box의 하위 li 중 active가 있는지 확인
    if ($(".mobile-menu-box ul > li.active").length > 0) {
      // active가 있으면 banner에 active 추가
      $(".mobile-side-bar__banner").addClass("active");
    } else {
      // active가 없으면 banner에서 active 제거
      $(".mobile-side-bar__banner").removeClass("active");
    }
  });

  $(".mobile-menu-box ul").click(function () {
    return false;
  });

  $(".icon-menu .line").click(function () {
    $(".mobile-menu-box ul li ul").stop().slideUp(300);
    $(".mobile-side-bar__banner").removeClass("active");
    $(".mobile-menu-box ul > li").removeClass("active");
  });
}

MobileMenuBox1__init();

// 헬프 팝업
function helpPopup() {
  $(".help-side-btn").click(function () {
    $(".help-popup").addClass("active");
    $("body").addClass("active");
  });

  $(".help-popup, .help-popup__close-btn").click(function () {
    $(".help-popup").removeClass("active");
    $("body").removeClass("active");
  });

  $(".help-popup__content").click(function (e) {
    e.stopPropagation();
  });
}

helpPopup();

// 푸터 메뉴
function FooterMenu() {
  $(".footer__top-bar2 .footer__menu").click(function () {
    let $this = $(this);
    let has = $this.hasClass("active");

    if (has) {
      $this.find("> ul").stop().slideUp(300);
      $this.removeClass("active");
    } else {
      $(".footer__menu ul").stop().slideUp(300);
      $this.find("> ul").stop().slideDown(300);
      $(".footer__menu").removeClass("active");
      $this.addClass("active");
    }

    $(".footer__menu ul").click(function (e) {
      e.stopPropagation();
    });
  });
}

FooterMenu();

// 페이지 업 버튼
function ScrollPageUp() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(".page-up").addClass("active");
    } else {
      $(".page-up").removeClass("active");
    }
  });

  $(".page-up").click(function () {
    $("html").scrollTop("0");
  });
}

ScrollPageUp();
