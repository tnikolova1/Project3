
      function initMap() {
      
    var map = document.getElementById('map');
	var tao = new google.maps.LatLng(41.893701, -87.630018);
	var yuzu = new google.maps.LatLng(41.896005, -87.671676);
	var butterfly = new google.maps.LatLng(41.891125, -87.656239);
	var naoki = new google.maps.LatLng(41.924254, -87.636953);
	var rolla = new google.maps.LatLng(41.943351, -87.649569);
	
	var myMap = {
		center: tao, yuzu, butterfly, naoki, rolla
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(map, mapOptions);
      }
      
google.maps.event.addDomListener(window, 'load', initMap);  

