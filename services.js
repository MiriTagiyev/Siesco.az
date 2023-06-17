let lastService = "web";
$("#it-services>ul>li").click(function () {
  $("#it-services>ul>li.active").removeClass("active");
  $(this).addClass("active");
  const currentService = $(this).attr("href");
  $(".it-detail ." + lastService + "-text").animate({ left: "-100%" }, () => {
    $(".it-detail ." + currentService + "-text").animate({ left: "0" });
  });
  $(".it-detail ." + lastService + "-img").animate({ right: "-100%" }, () => {
    $(".it-detail ." + currentService + "-img").animate({ right: "0" });
  });
  document.querySelector(".it-detail").style.height =
    document.querySelector(`.${currentService}-text`).clientHeight + "px";
  lastService = currentService;
});
window.onload = () => {
  $("#it-services>ul>li:first-child").click();
};

$("#chatme").click(function () {
  $(".widget").toggleClass("open");
});

const currentYear = new Date().getFullYear();
const footerYear = document.getElementById("footer-year");
footerYear.textContent = `© ${currentYear} «Siesco» - Bütün hüquqlar qorunur.`;

$("#mobile").click(function () {
  $(".webtemp").hide();
});
$("#idare").click(function () {
  $(".webtemp").hide();
});
$("#smm").click(function () {
  $(".webtemp").hide();
});
$("#design").click(function () {
  $(".webtemp").hide();
});
$("#web").click(function () {
  $(".webtemp").show();
});

document.querySelector("body").onscroll = function () {
  console.log(window.scrollY);
  if (window.scrollY > 30) {
    document.querySelector("nav").classList.add("fixed");
  } else {
    document.querySelector("nav").classList.remove("fixed");
  }
};

$("nav>ul>li").click(function () {
  $("nav>ul>li>ul").slideUp();
  $(this).find("ul").slideDown();
});
$("nav .fa-bars").click(function () {
  $("nav>ul").slideToggle();
  $(".right-menu").toggle();
});
