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
  // a 태그 클릭 이벤트
  $(".mobile-menu-box ul li > a").click(function (e) {
    let $this = $(this).parent(); // 클릭된 a 태그의 부모 li 요소
    let hasSubmenu = $this.find("> ul").length > 0; // 하위 메뉴 존재 여부 확인
    let href = $(this).attr("href"); // a 태그의 href 값 가져오기

    // 하위 메뉴가 있고 href가 "#"인 경우 기본 동작을 막고 서브메뉴 토글
    if (hasSubmenu && href === "#") {
      e.preventDefault(); // 기본 동작 막기
      toggleSubMenu($this); // 서브메뉴 토글 함수 호출
    }
    // 하위 메뉴가 없고 실제 URL인 경우 링크 이동 허용
    else if (!hasSubmenu && href !== "#") {
      window.location.href = href; // 링크 이동
    }
  });

  // 서브메뉴 토글 함수 정의
  function toggleSubMenu($menuItem) {
    let isActive = $menuItem.hasClass("active");

    // 다른 활성화된 형제들 초기화
    $menuItem.siblings(".active").find("ul").stop().slideUp(300);
    $menuItem.siblings(".active").find(".active").removeClass("active");
    $menuItem.siblings(".active").removeClass("active");

    // 현재 항목 토글
    if (isActive) {
      $menuItem.find("> ul").stop().slideUp(300);
      $menuItem.find(".active").removeClass("active");
      $menuItem.removeClass("active");
    } else {
      $menuItem.find("> ul").stop().slideDown(300);
      $menuItem.addClass("active");
    }

    // 하위 li 중 active가 있는지 확인하여 배너에 active 클래스 추가/제거
    if ($(".mobile-menu-box ul > li.active").length > 0) {
      $(".mobile-side-bar__banner").addClass("active");
    } else {
      $(".mobile-side-bar__banner").removeClass("active");
    }
  }

  // 이중 클릭 방지
  $(".mobile-menu-box ul").click(function () {
    return false;
  });

  // 메뉴 초기화
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
