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
  document.querySelector(".bi-detail").style.height =
    document.querySelector(`.${currentService}-text`).clientHeight + "px";
  lastBi = currentService;
});
window.onload = () => {
  $("#bi-services>ul>li:first-child").click();
};

let lastStatus = "web";
$(document).ready(function () {
  $("#bi-services>ul>li:first").addClass("active");
  $("#bi-services>ul>li").click(function () {
    $("#bi-services>ul>li.active").removeClass("active");
    $(this).addClass("active");
  });
});

document.querySelector("body").onscroll = function () {
  console.log(window.scrollY);
  if (window.scrollY > 30) {
    document.querySelector("nav").classList.add("fixed");
  } else {
    document.querySelector("nav").classList.remove("fixed");
  }
};
