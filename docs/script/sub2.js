// 커스텀 필터 카테고리
function CustomColor(no) {
  $(`.custom-page__color-wrap${no} li`).first().addClass("active");

  $(`.custom-page__color-wrap${no} li`).click(function () {
    let $this = $(this);

    $(`.custom-page__color-wrap${no} li`).removeClass("active");
    $this.addClass("active");
  });
}

CustomColor(1);
CustomColor(2);
CustomColor(3);
CustomColor(4);
CustomColor(5);

// 이미지 줌
function ToggleZoom() {
  $(".custom-page__sunglass-img").click(function () {
    let $this = $(this);

    $this.toggleClass("zoom");
  });
}

ToggleZoom();

// 커스텀 이미지 보여지기
$(document).ready(function () {
  $(".front-color").first().addClass("active");
  function SetActiveColor(category, no) {
    $(`#${category}-color-${no}-btn`).click(function () {
      $(".front-color, .temples-color, .lens-color, .case-color").removeClass(
        "active"
      );

      $(`.${category}-color-${no}`).addClass("active");
    });
  }

  for (let i = 1; i <= 8; i++) {
    if (i <= 6) SetActiveColor("lens", i); // lens 카테고리
    if (i <= 7) SetActiveColor("case", i); // case 카테고리
    SetActiveColor("front", i); // front 카테고리
    SetActiveColor("temples", i); // temples 카테고리
  }
});

// 클릭하면 나타나는 가상거울 팝업창
function VertualPopup() {
  $(".custom-page__sunglass-btn").click(function () {
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
