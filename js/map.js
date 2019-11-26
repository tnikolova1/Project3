



/*const carouselSlide = document.querySelector('.carousel_slide');
const carouselImages = document.querySelectorAll('.carousel_slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)';

nextBtn.addEventListener('click',function(){
 if (counter>= pictures.length-1) return;

  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX('+(-size*counter)+'px)';
});
/*
prev_button.addEventListener('click',()=>{
  if (counter<=0) return;
  pictureSlider.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  pictureSlider.style.transform = 'translateX('+(-size*counter)+'px)';
});

pictureSlider.addEventListener('transitioned',()=>{
  if (pictures[counter].id=='last_pic'){
    pictureSlider.style.transition="none";
    counter = pictureSlider.length - 2;
    pictureSlider.style.transform ='translateX('+(-size*counter)+'px)';
  }
  if (pictures[counter].id=='first_pic'){
    pictureSlider.style.transition="none";
    counter = pictureSlider.length - counter;
    pictureSlider.style.transform ='translateX('+(-size*counter)+'px)';
  }
}); */

/*function initMap() {
		var mapOptions = {
			zoom: 8,
			center: new google.maps.LatLng(37.5, -122),
			mapTypeId: 'roadmap'
		};

		var map = new google.maps.Map(document.getElementById('map'), mapOptions);

		var goldenGatePosition = {lat: 37.8199,lng: -122.4783};
		var marker = new google.maps.Marker({
			position: goldenGatePosition,
			map: map,
			title: 'Golden Gate Bridge',
      icon: image
		});
  }
    window.addEventListener('load', initMap );
*/
function initMap() {

  var tao = {lat: 41.893701, lng:-87.630018 }
  var yuzu = {lat: 41.896005, lng: -87.671676};
  var butterfly = {lat: 41.891125, lng: -87.656239};
  var naoki = {lat: 41.924254, lng: -87.636953};
  var rolla = {lat: 41.943351, lng: -87.649569};

//  var map = new google.maps.Map(
//      document.getElementById('map'), {zoom: 12, center: tao});

var map = new google.maps.Map(document.getElementById('map'),
   {
     center: tao,
     zoom: 12,
    mapTypeId: 'hybrid'

   });
   var tao = new google.maps.Marker(
   {
     position: tao,
     map: map,
     animation: google.maps.Animation.BOUNCE,
     icon: "images/sushi.png"});
   var tao_text = new google.maps.InfoWindow({content: '<p>Tao Chicago Restaurant * Address:632 N Dearborn St Chicago, IL 60654</p>'});
   tao.addListener('mouseover', function(){tao_text.open(map,tao);});
   tao.addListener('mouseout', function(){tao_text.close();});

   var yuzu = new google.maps.Marker(
   {
     position: yuzu,
     map: map,
     animation: google.maps.Animation.BOUNCE,
     icon: "images/sushi.png"});
   var yuzu_text = new google.maps.InfoWindow({content: '<p>Yuzu Sushi & Robata Grill * Address:1751 W Chicago Ave, Chicago, IL 60622</p>'});
   yuzu.addListener('mouseover', function(){yuzu_text.open(map,yuzu);});
   yuzu.addListener('mouseout', function(){yuzu_text.close();});

   var butterfly = new google.maps.Marker(
   {
     position: butterfly,
     map: map,
     animation: google.maps.Animation.BOUNCE,
     icon: "images/sushi.png"});
   var butterfly_text = new google.maps.InfoWindow({content: '<p>Butterfly Sushi Bar * Address:1139 W Grand Ave, Chicago, IL 60642</p>'});
   butterfly.addListener('mouseover', function(){butterfly_text.open(map,butterfly);});
   butterfly.addListener('mouseout', function(){butterfly_text.close();});

   var naoki = new google.maps.Marker(
   {
     position: naoki,
     map: map,
     animation: google.maps.Animation.BOUNCE,
     icon: "images/sushi.png"});
   var naoki_text = new google.maps.InfoWindow({content: '<p>Naoki Sushi * Address:2300 N Lincoln Park W Suite N, Chicago, IL 60614</p>'});
   naoki.addListener('mouseover', function(){naoki_text.open(map,naoki);});
   naoki.addListener('mouseout', function(){naoki_text.close();});

   var rolla = new google.maps.Marker(
   {
     position: rolla,
     map: map,
     animation: google.maps.Animation.BOUNCE,
     icon: "images/sushi.png"});
   var rolla_text = new google.maps.InfoWindow({content: '<p>Rollapalooza * Address:3344 N Halsted St, Chicago, IL 60657</p>'});
   rolla.addListener('mouseover', function(){rolla_text.open(map,rolla);});
   rolla.addListener('mouseout', function(){rolla_text.close();});
}


window.addEventListener('load', initMap );


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
