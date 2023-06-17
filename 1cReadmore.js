let lastService = "web";
$("#readmore-services>ul>li").click(function () {
  $("#readmore-services>ul>li.active").removeClass("active");
  $(this).addClass("active");
  const currentService = $(this).attr("href");
  $(".readmore-detail ." + lastService + "-text").animate(
    { left: "-100%" },
    () => {
      $(".readmore-detail ." + currentService + "-text").animate({ left: "0" });
    }
  );
  $(".readmore-detail ." + lastService + "-img").animate(
    { right: "-100%" },
    () => {
      $(".readmore-detail ." + currentService + "-img").animate({ right: "0" });
    }
  );
  document.querySelector(".readmore-detail").style.height =
    document.querySelector(`.${currentService}-text`).clientHeight + "px";
  lastService = currentService;
});
window.onload = () => {
  $("#readmore-services>ul>li:first-child").click();
};

let lastStatus = "web";
$(document).ready(function () {
  $("#readmore-services>ul>li:first").addClass("active");
  $("#readmore-services>ul>li").click(function () {
    $("#readmore-services>ul>li.active").removeClass("active");
    $(this).addClass("active");
  });
});
$(".jpg-container img").each(function () {
  $(this).on("click", function () {
    $(".popimag").fadeIn();
    $(".popimag img").attr("src", $(this).attr("src"));
    $(".widget").hide();
  });
});

$(".popimag span i").on("click", function () {
  $(".popimag").fadeOut();
  $(".widget").show();
});
