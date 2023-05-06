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
  lastService = currentService;
});
window.onload = () => {
  $("#it-services>ul>li:first-child").click();
};

var situation = [
  {
    basliq: "1C:Françayzinq",
    sual: "1C:Françayzinq nədir?",
    photo: "/img/Mikro.png",
    info1:
      "Əməkdaşlarımız - «1С» tərəfindən sertifikatlaşdırılmış, «1С» proqramının sadə quraşdırılması və konfiqurasiyasından başlayaraq proqramın digər paketlərlə inteqrasiyasına, istifadəçi təlimlərinə, mühasibat uçotunun və ofis işlərinin avtomatlaşdırılmasına qədər hərtərəfli xidmətləri yerinə yetirmək qabiliyyətinə malik mütəxəssislərdir.",
  },
  {
    basliq: "1C:Real Avtomatlaşdırma Mərkəzi",
    sual: "1C:Real Avtomatlaşdırma Mərkəzi nədir?",
    photo: "/img/1CNew.png",
    info1:
      "Real Avtomatlaşdırma Mərkəzlərinin əməkdaşları tələblərin səmərəli müəyyən edilməsi texnologiyası üzrə təlim keçmiş və sertifikatlaşdırılmışdırlar – onlar «1С» standartlarına uyğun olaraq şirkətin biznes proseslərinin ilkin qiymətləndirilməsini tez və keyfiyyətli şəkildə aparmağa kömək edəcək və müştərinin biznes effektivliyini artırma metodlarını təklif edəcəklər",
  },
  {
    basliq: "1C:ERP Mərkəzi - namizəd",
    sual: "1C:ERP Mərkəzi nədir?",
    photo: "/img/it.png",
    info1:
      "'1C: ERP Mərkəzi' statusuna malik tərəfdaş 1C ERP həllərinin müntəzəm satışı,tətbiqlərin həyata keçirilməsi, habelə digər tərəfdaşlar tərəfindən həyata keçirilən layihələrə nəzarət etmək hüququna malikdir.Status müəssisənin idarə edilməsi üçün «1С» şirkətinin ERP-həllərində səlahiyyətlərin olmasını ifadə edir; bütün alt sistemlər üzrə mütəxəssislər: Konsultantlar, sertifikatlı layihə menecerləri; uğurlu tətbiqlər; keyfiyyət idarəetmə sistemləri.",
  },
  {
    basliq: "1C-Bitriks tərəfdaşı",
    sual: "1C-Bitriks nədir?",
    photo: "/img/bitrix.png",
    info1: "1C-Bitriks tərəfdaşı",
  },
];

for (let i = 0; i < situation.length; i++) {
  document.querySelector(
    "#status-services ul"
  ).innerHTML += `<li onclick="funk(${i})">${situation[i].basliq}</li>`;
}

function funk(i) {
  document.querySelector(".status-info").innerText = situation[i].info1;
  document.querySelector(".status-photo img").src = situation[i].photo;
  // document.querySelector(".status-basliq").innerText = situation[i].sual;
}

let lastStatus = "web";
$(document).ready(function () {
  $("#status-services>ul>li:first").addClass("active");
  $("#status-services>ul>li").click(function () {
    $("#status-services>ul>li.active").removeClass("active");
    $(this).addClass("active");
  });
});
