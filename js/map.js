function initMap() {

  var tao = {lat: 41.893701, lng:-87.630018 }
  var yuzu = {lat: 41.896005, lng: -87.671676};
  var butterfly = {lat: 41.891125, lng: -87.656239};
  var naoki = {lat: 41.924254, lng: -87.636953};
  var rolla = {lat: 41.943351, lng: -87.649569};


  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: tao});

  var marker1 = new google.maps.Marker({position: tao, map: map});
  var marker2 = new google.maps.Marker({position: yuzu, map: map});
  var marker3 = new google.maps.Marker({position: butterfly, map: map});
  var marker4 = new google.maps.Marker({position: naoki, map: map});
  var marker5 = new google.maps.Marker({position: rolla, map: map});

}

 /*function initMap() {

    var map = document.getElementById('map');
	var tao = new google.maps.LatLng(41.893701, -87.630018);
	var yuzu = new google.maps.LatLng(41.896005, -87.671676);
	var butterfly = new google.maps.LatLng(41.891125, -87.656239);
	var naoki = new google.maps.LatLng(41.924254, -87.636953);
	var rolla = new google.maps.LatLng(41.943351, -87.649569);

	var map = {
		center: tao, yuzu, butterfly, naoki, rolla
		zoom: 16;
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var location = new google.maps.Map(map);


    var marker1 = new google.maps.Marker({
		position: tao,
		map: location,
	});

	var marker2 = new google.maps.Marker({
		position: yuzu,
		map: location,
	});
	var marker3 = new google.maps.Marker({
		position: butterfly,
		map: location,
	});
	var marker = new google.maps.Marker({
		position: naoki,
		map: location,
	});
	var marker = new google.maps.Marker({
		position: rolla,
		map: location,
	});
}
*/
//google.maps.event.addDomListener(window, 'load', initMap);
window.addEventListener('load', initMap );
