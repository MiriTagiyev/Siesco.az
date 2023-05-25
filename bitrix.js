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
document.querySelectorAll(".jpg-container img").forEach((x) => {
  x.addEventListener("click", function () {
    document.querySelector(".popimag").style.display = "block";
    document.querySelector(".popimag img").src = x.src;
    document.querySelector(".widget").style.display = "none";
  });
});

document.querySelector(".popimag span i").onclick = () => {
  document.querySelector(".popimag").style.display = "none";
  document.querySelector(".widget").style.display = "block";
};
