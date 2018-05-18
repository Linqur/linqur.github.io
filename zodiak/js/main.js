$(document).ready(function(){
/*Плавная навигация*/
	$("#navigator").on("click","a", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	    top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top}, 700);
  	});
	$("#bot-nav").on("click","a", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
	    top = $(id).offset().top;
	    $('body,html').animate({scrollTop: top}, 700);
  	});
  	$("#button-to-form").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 700,
         easing: "swing"
      });
      return false;
   });
/*Плавная навигация*/

/*Слайдеры*/
  	$('.about-img-slider').slick({
  		arrows: false,
  		infinite: true,
  		speed: 500,
  		fade: true,
  		autoplay: true,
		autoplaySpeed: 3000,
  	});
 	$('.comments-slider').slick({
 		arrows: false,
 		dots: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		responsive: [{
      		breakpoint: 1199,
      		settings: {
		        slidesToShow: 1,
      		}
    	}
		]
	});
/*Выравнивение высоты блоков с отзывами*/
	$('.comments-slider').on('setPosition', function () {		      
    $(this).find('.slick-slide').height('auto');		      
    var slickTrack = $(this).find('.slick-track');		      
    var slickTrackHeight = $(slickTrack).height();		      
    $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');		      
  });	
/*Выравнивение высоты блоков с отзывами*/
	$('.beliv-slider').slick({
 		arrows: true,
 		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
	      		breakpoint: 1199,
	      		settings: {
			        slidesToShow: 3,
	      		}
      		},
      		{
	      		breakpoint: 768,
	      		settings: {
			        slidesToShow: 2,
	      		}
	      	},
      		{
	      		breakpoint: 450,
	      		settings: {
			        slidesToShow: 1,
	      		}
      		}
    	]
	});
/*Слайдеры*/

/*навигаия в сервисе*/
var service_links = document.getElementsByClassName('service-link');

function change_list(e, id){
	for (var i = 0; i < 8; i++) {
		service_links[i].className = "service-link";
	}
	service_links[e].className = "service-link active";
}
for(var i = 0; i < service_links.length; i++) {
	service_links[i].addEventListener('click', change_list.bind(this, i));
}
/*навигаия в сервисе*/

/*Текст услуг*/
var json = '{ "text" : "text qwerty", "ImgLinks" : ["img/service/kamaz.png","img/service/kamaz.png"] }';
var obj = JSON.parse(json);
// document.getElementById("service-text").innerHTML = obj.text;

/*Текст услуг*/
}); 

/*карата*/
var myMap;
ymaps.ready(function () {
	var squareLayout = ymaps.templateLayoutFactory.createClass('<img src="img/map-logo.png">');
	var myMap = new ymaps.Map("map", {
	  	center: [55.747395, 52.427867],
	  	zoom: 15
  	});
	var myPlacemark = new ymaps.Placemark([55.747395, 52.427867],{
		 balloonContent: 'Россия, Республика Татарстан, Набережные Челны, 30-й комплекс, 24',
		},
		{
		iconLayout: 'default#image',
	    iconImageHref: 'img/map-logo.png',
	    iconImageSize: [38, 45],
	    iconImageOffset: [-10, -30]
	});
	myMap.geoObjects.add(myPlacemark);
});	
/*карата*/