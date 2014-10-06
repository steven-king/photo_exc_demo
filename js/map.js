function onError(error) {
        console.log("onError()");
        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    }
    
function generateMap(position) {
        console.log("generateMap()");
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        var currentLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        
        var mapOptions = {
          //center: new google.maps.LatLng(-34.397, 150.644),
          center: currentLatLng,
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
        
         var marker = new google.maps.Marker({
                position: currentLatLng,
                map: map,
                title: 'Current Location'
                
        
        });
         //google.maps.event.trigger(map, "resize");
      }


/* For Browser testing. Comment out for app testing.*/
 var position ={
        coords:{latitude:-34.397, longitude:150.644}
}
console.log(position.coords.latitude);


google.maps.event.addDomListener(window, 'load',generateMap(position));
