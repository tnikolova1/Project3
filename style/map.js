
      function initMap() {
      
       var map = new google.maps.Map(
       document.getElementById('map'), {zoom: 8, center: {lat: -34.397, lng: 150.644});
      }
      
google.maps.event.addDomListener(window, 'load', initMap);  