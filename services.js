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
      "Əməkdaşlarımız 1C tərəfindən sertifikatlaşdırılmış mütəxəssislərdir və 1C proqramının sadə quraşdırılması və konfiqurasiyasından tutmuş proqramın digər paketlərlə inteqrasiyasına, istifadəçilərin təliminə, mühasibat və ofis işlərinin avtomatlaşdırılmasına qədər bir sıra xidmətləri yüksək keyfiyyətlə yerinə yetirə bilirlər.",
  },
  {
    basliq: "1C:Real Avtomatlaşdırma Mərkəzi",
    sual: "1C:Real Avtomatlaşdırma Mərkəzi nədir?",
    photo: "/img/1CNew.png",
    info1:
      "Real Avtomatlaşdırma Mərkəzlərinin işçiləri ehtiyacların səriştəli müəyyən edilməsi texnologiyasına uyğun olaraq təlim keçmiş və sertifikatlaşdırılmışdır - onlar 1C standartlarına uyğun olaraq şirkətin biznes proseslərinin ilkin sorğusunu tez və səmərəli keçirməyə kömək edəcək və işin səmərəliliyini artırmaq yollarını təklif edəcəklər.",
  },
  {
    basliq: "1C:ERP Mərkəzi - namizəd",
    sual: "1C:ERP Mərkəzi nədir?",
    photo: "/img/it.png",
    info1:
      "'1C: ERP Mərkəzi' statusuna malik tərəfdaş 1C ERP həllərinin müntəzəm satışı, tətbiqlərin həyata keçirilməsi, həmçinin digər tərəfdaşlar tərəfindən həyata keçirilən layihələrə nəzarət etmək hüququna malikdir.Vəziyyət müəssisənin idarə edilməsi üçün '1C' şirkətinin ERP-həllərində səlahiyyətlərin mövcudluğu deməkdir; bütün alt sistemlərdə mütəxəssislər: məsləhətçilər, sertifikatlı layihə menecerləri; uğurlu tətbiqlər; keyfiyyət idarəetmə sistemləri.",
  },
  {
    basliq: "1C-Bitriks tərəfdaşı",
    sual: "1C-Bitriks nədir?",
    photo: "/img/bitrix.png",
    info1:
      "Real Avtomatlaşdırma Mərkəzlərinin işçiləri ehtiyacların səriştəli müəyyən edilməsi texnologiyasına uyğun olaraq təlim keçmiş və sertifikatlaşdırılmışdır - onlar 1C standartlarına uyğun olaraq şirkətin biznes proseslərinin ilkin sorğusunu tez və səmərəli keçirməyə kömək edəcək və işin səmərəliliyini artırmaq yollarını təklif edəcəklər.",
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
