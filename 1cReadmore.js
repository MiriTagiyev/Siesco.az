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
