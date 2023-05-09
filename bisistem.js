let lastBi = "web";
$("#bi-services>ul>li").click(function () {
  $("#bi-services>ul>li.active").removeClass("active");
  $(this).addClass("active");
  const currentService = $(this).attr("href");
  $(".bi-detail ." + lastBi + "-text").animate({ left: "-100%" }, () => {
    $(".bi-detail ." + currentService + "-text").animate({ left: "0" });
  });
  $(".bi-detail ." + lastBi + "-img").animate({ right: "-100%" }, () => {
    $(".bi-detail ." + currentService + "-img").animate({ right: "0" });
  });
  lastBi = currentService;
});
window.onload = () => {
  $("#bi-services>ul>li:first-child").click();
};
