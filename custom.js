//Merkez slide start//
const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3500,
  },
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//Merkez slide end//
//Mehsullar slide start//
// function selecionarOpcao(elmnt, className, color) {
//   var x = document.getElementsByClassName(className)[0].children;
//   for (i = 1; i < x.length; i++) {
//     x[i].style.backgroundColor = "#fff";
//     x[i].style.color = "#111";
//     x[i].style.border = "solid 1px " + color;
//   }
//   elmnt.style.backgroundColor = color;
//   elmnt.style.color = "#fff";
//   elmnt.style.border = "1px solid #eee";
// }
//Mehsullar slide end//
//Xidmetler slide start//
let index = 0;
let interv = setInterval(() => {
  services();
}, 2000);
services();
function services() {
  if (index == $(".service-item").length - 1) {
    $(`.service-item:eq(${index})`).css({
      transform: "scale(0.8)",
      opacity: "0.5",
    });
    $(".service-slide-scroll").animate({ top: "-30px" });
    index = 0;
  }
  $(".service-slide-scroll").animate({ top: "-" + index * 180 - 30 + "px" });
  $(`.service-item:eq(${index})`).css({
    transform: "scale(0.8)",
    opacity: "0.5",
    "box-shadow": "none",
  });
  $(`.service-item:eq(${index + 1})`).css({
    transform: "scale(1)",
    opacity: "1",
    "box-shadow": "0 5px 15px silver",
  });
  index++;
  $(".service-text").html(
    $(`.service-item:eq(${index + 1}) .service-item-body`).html()
  );
}
$(".service-info").hover(
  () => {
    clearInterval(interv);
  },
  () => {
    interv = setInterval(() => {
      services();
    }, 2000);
  }
);
//Xidmetler slide end//
//Musteri slide start//
const swipers = new Swiper(".swiper-partner", {
  autoplay: {
    delay: 0,
    disableOnInteraction: false, //ユーザーがスワイプなどの操作しても止まらない
    reverseDirection: true, // 逆方向有効化
  },
  loop: true,
  spaceBetween: 10,
  // loopedSlides: 14, //設定すると途中で止まる
  slidesPerView: 7,
  speed: 3000,
  allowTouchMove: false, // スワイプ無効,
});

const swiper2 = new Swiper(".swiper2", {
  autoplay: {
    delay: 0, // 途切れなくループ
    disableOnInteraction: false, //ユーザーがスワイプなどの操作しても止まらない
  },
  loop: true, // ループ有効
  spaceBetween: 10,
  // loopedSlides: 14, //設定すると途中で止まる
  slidesPerView: 7, // 一度に表示する枚数
  speed: 3000, // ループの時間
  allowTouchMove: false, // スワイプ無効
});
//Musteri slide end//

//Xidmetler slide start//
let VerticalCarousel = function (element) {
  this.slideUp = function () {
    let sliders = document.querySelectorAll(element);
    if (sliders && sliders !== null && sliders.length > 0) {
      sliders.forEach((el) => {
        el.lastElementChild.classList.add("vs-previous");
        let initCloneReverse = el
          .getElementsByClassName("vs-previous")[0]
          .cloneNode(true);
        el.prepend(initCloneReverse);
        el.lastElementChild.remove();
        el.firstElementChild.nextElementSibling.classList.add("vs-active");
        el.firstElementChild.nextElementSibling.nextElementSibling.classList.add(
          "vs-next"
        );
        setInterval(function () {
          let elClone = el
            .getElementsByClassName("vs-previous")[0]
            .cloneNode(true);
          el.appendChild(elClone);
          elClone.classList.remove("vs-previous");
          el.firstElementChild.remove();
          let first = el.querySelector(".vs-active");
          first.classList.add("vs-previous");
          first.classList.remove("vs-active");
          let second = el.querySelector(".vs-next");
          document.querySelector(".service-text h2").innerText =
            second.querySelector(".vs-carousel__item-title").innerText;
          document.querySelector(".service-text p").innerText =
            second.querySelector(".vs-carousel__item-description").innerText;
          second.classList.add("vs-active");
          second.classList.remove("vs-next");
          second.nextElementSibling.classList.toggle("vs-next");
        }, 3000);
      });
    }
  };
};
let c = new VerticalCarousel(".vs-carousel");
c.slideUp();
//Xidmetler slide end//
//mousestart
document.body.onload = function () {
  "use strict";
  var el = document.querySelector(".rs-cf3d");
  var cf3d = new CarouselFlow(el, {
    mode: "flip",
    useAutoplay: true,
    useMousewheel: false,
    useReflection: false,
  });
  window.cf3d = cf3d;
};

var xMousePos = 0;
var yMousePos = 0;
var lastScrolledLeft = 0;
var lastScrolledTop = 0;

$(document).mousemove(function (event) {
  captureMousePosition(event);
});

$(window).scroll(function (event) {
  if (lastScrolledLeft != $(document).scrollLeft()) {
    xMousePos -= lastScrolledLeft;
    lastScrolledLeft = $(document).scrollLeft();
    xMousePos += lastScrolledLeft;
  }
  if (lastScrolledTop != $(document).scrollTop()) {
    yMousePos -= lastScrolledTop;
    lastScrolledTop = $(document).scrollTop();
    yMousePos += lastScrolledTop;
  }
  $(".cursor").css({ top: yMousePos - 70 + "px", left: xMousePos - 70 + "px" });
});
function captureMousePosition(e) {
  xMousePos = e.pageX;
  yMousePos = e.pageY;
  $(".cursor").css({ top: e.pageY - 70 + "px", left: e.pageX - 70 + "px" });
}

$("body").click(function () {
  $(".cursor").addClass("expand");
  setTimeout(() => {
    $(".cursor").removeClass("expand");
  }, 500);
});

//mouseend
//oclock start

$.fn.jQuerySimpleCounter = function (options) {
  var settings = $.extend(
    {
      start: 0,
      end: 100,
      easing: "swing",
      duration: 400,
      complete: "",
    },
    options
  );

  var thisElement = $(this);

  $({ count: settings.start }).animate(
    { count: settings.end },
    {
      duration: settings.duration,
      easing: settings.easing,
      step: function () {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete,
    }
  );
};

$("#number1").jQuerySimpleCounter({ end: 12, duration: 3000 });
$("#number2").jQuerySimpleCounter({ end: 55, duration: 3000 });
$("#number3").jQuerySimpleCounter({ end: 359, duration: 2000 });
$("#number4").jQuerySimpleCounter({ end: 246, duration: 2500 });

/* AUTHOR LINK */
$(".about-me-img").hover(
  function () {
    $(".authorWindowWrapper").stop().fadeIn("fast").find("p").addClass("trans");
  },
  function () {
    $(".authorWindowWrapper")
      .stop()
      .fadeOut("fast")
      .find("p")
      .removeClass("trans");
  }
);

//oclock end

(function (e) {
  e.fn.circle = function (t) {
    var n = e.extend(
      {
        speed: "5000",
      },
      t
    );
    return this.each(function () {
      function t() {
        var e = i.find("li.block.active").index();
        c.removeClass("active"), c.eq(e).addClass("active");
      }

      function o() {
        var n;
        i.addClass("disable-hover"),
          i.stop(!0, !0).animate(
            {
              rotatedeg: (p.deg += p.step),
            },
            {
              duration: 400,
              step: function (t) {
                t >= 360 ? (t -= 360) : t <= -360 && (t += 360),
                  e(this).css("transform", "rotate(" + t + "deg)"),
                  e(this).css("-webkit-transform", "rotate(" + t + "deg)");
              },
              complete: function () {
                (p.active = i.find("li.active").removeClass("active")),
                  "right" == p.direction &&
                    p.step == d &&
                    (p.active.prev() && p.active.prev().length
                      ? ((n = p.active.prev().index()),
                        p.active.prev().addClass("active"))
                      : (p.active.siblings(":last-child").addClass("active"),
                        (n = 9))),
                  "left" == p.direction &&
                    p.step == u &&
                    (p.active.next() && p.active.next().length
                      ? ((n = p.active.next().index()),
                        p.active.next().addClass("active"))
                      : (p.active.siblings(":first-child").addClass("active"),
                        (n = 0))),
                  i.is(":animated"),
                  i.removeClass("disable-hover"),
                  t();
                $("header .lotties .current").removeClass("current");
                $(`header .lotties .lottie:eq(${n})`).addClass("current");
                $("header .detail-texts .current").removeClass("current");
                $(`header .detail-texts .detail-text:eq(${n})`).addClass(
                  "current"
                );
              },
            },
            "ease"
          );
      }

      function r() {
        i.addClass("disable-hover"),
          i.stop(!0, !0).animate(
            {
              rotatedeg: (p.deg += p.step),
            },
            {
              duration: 400,
              step: function (t) {
                t >= 360 ? (t -= 360) : t <= -360 && (t += 360),
                  e(this).css("transform", "rotate(" + t + "deg)"),
                  e(this).css("-webkit-transform", "rotate(" + t + "deg)");
              },
              complete: function () {
                (p.active = i.find("li.active")),
                  i.is(":animated"),
                  i.removeClass("disable-hover");
              },
            },
            "ease"
          );
      }
      var i = e(this),
        s = i.find("li").length,
        a = i.find(" > li .icon"),
        l = "count" + s,
        u = 0,
        c = i.next().find(".animate"),
        p = {
          duration: n.speed,
          deg: 0,
          step: u,
          active: i.find("li.active"),
          direction: "left",
        };
      switch (s) {
        case 10:
          u = -36;
          break;
        case 9:
          u = -40;
          break;
        case 8:
          u = -45;
          break;
        case 7:
          u = -51.5;
          break;
        case 6:
          u = -60;
          break;
        case 5:
          u = -72;
          break;
        case 4:
          u = -90;
          break;
        case 3:
          u = -120;
          break;
        case 2:
          u = -180;
          break;
        case 1:
          u = -360;
      }
      i.addClass(l);
      var d = u - 2 * u;
      i.find("> li").first().addClass("active"),
        i.find("> li").first().find("a").attr("href"),
        c.eq(0).addClass("active"),
        e(a).on("click", function () {
          $("header .lotties .current").removeClass("current");
          $(`header .lotties .lottie:eq(${e(this).parent().index()})`).addClass(
            "current"
          );
          $("header .detail-texts .current").removeClass("current");
          $(
            `header .detail-texts .detail-text:eq(${e(this).parent().index()})`
          ).addClass("current");
          var n = e(this).parent().index() - i.find("li.active").index();
          i.children("li").removeClass("active"),
            e(this).parent().addClass("active"),
            (p.step = -n * d),
            n * d >= 288 && (p.step = -n * d + 360),
            n * d <= -288 && (p.step = -n * d - 360),
            r(),
            (p.step = u),
            (p.direction = "left"),
            t();
        });
      var f = i.parent().find("div.next"),
        h = i.parent().find("div.prev");
      f.on("click", function () {
        //sag click
        i.is(":animated") || ((p.direction = "left"), (p.step = u), o());
      }),
        h.on("click", function () {
          //sol click
          i.is(":animated") || ((p.direction = "right"), (p.step = d), o());
        });
    });
  };
  setInterval(() => {
    $(".next").click();
  }, 8000);

  $("header>.prev").click(() => {
    $("header .services .prev").click();
  });
  $("header>.next").click(() => {
    $("header .services .next").click();
  });
})(jQuery);

$(function () {
  //Background image
  $("div").each(function () {
    var url = $(this).attr("data-image");
    if (url) {
      $(this).css("background-image", "url(" + url + ")");
    }
  });

  $("section").each(function () {
    var url = $(this).attr("data-image");
    if (url) {
      $(this).css("background-image", "url(" + url + ")");
    }
  });

  // Service Auto height circle
  function autoHeightCircle() {
    var circle = $(".circle--rotate"),
      circleInner = $(".animate-wrapper"),
      circleH = circle.width(),
      circleInnerH = circleInner.width();
    circle.height(circleH);
    circleInner.height(circleInnerH);
  }

  $("#circle--rotate").circle();
  autoHeightCircle();
  $(window).resize(function () {
    autoHeightCircle();
  });
});
window.addEventListener("scroll", function () {
  if (
    this.document.querySelector(".counter").getBoundingClientRect().top < 800 &&
    document.querySelector(".counter").className == "counter"
  ) {
    counter("projectcount", 0, 300, 20, "+");
    counter("clientount", 0, 10, 1000, null);
    counter("branchcount", 0, 25, 1000, null);
    counter("yearcount", 0, 350, 20, "+");
    document.querySelector(".counter").classList.add("counted");
  } else if (
    this.document.querySelector(".counter").getBoundingClientRect().top > 800
  ) {
    document.querySelector(".counter").classList.remove("counted");
  }
});
function counter(id, start, end, duration, plus) {
  let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
      current += increment;
      obj.textContent = current + plus;
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
}

document.querySelector("body").onscroll = function () {
  console.log(window.scrollY);
  if (window.scrollY > 30) {
    document.querySelector("nav").classList.add("fixed");
  } else {
    document.querySelector("nav").classList.remove("fixed");
  }
};
