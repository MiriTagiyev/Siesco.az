let lastService = "web";
$("#bitrixreadmore-services>ul>li").click(function () {
  $("#bitrixreadmore-services>ul>li.active").removeClass("active");
  $(this).addClass("active");
  const currentService = $(this).attr("href");
  $(".bitriksreadmore-detail ." + lastService + "-text").animate(
    { left: "-100%" },
    () => {
      $(".bitriksreadmore-detail ." + currentService + "-text").animate({
        left: "0",
      });
    }
  );
  $(".bitriksreadmore-detail ." + lastService + "-img").animate(
    { right: "-100%" },
    () => {
      $(".bitriksreadmore-detail ." + currentService + "-img").animate({
        right: "0",
      });
    }
  );
  lastService = currentService;
});
window.onload = () => {
  $("#bitrixreadmore-services>ul>li:first-child").click();
};

let lastStatus = "web";
$(document).ready(function () {
  $("#bitrixreadmore-services>ul>li:first").addClass("active");
  $("#bitrixreadmore-services>ul>li").click(function () {
    $("#bitrixreadmore-services>ul>li.active").removeClass("active");
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
