// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
	console.log("onDeviceReady()");
	navigator.geolocation.getCurrentPosition(generateMap, onError);
        console.log(position);
	loadTrips();
	
	$( "#qrScanBtn" ).click(function() {
  		doScan();
		
	
		
	});
}

$( document ).ready(function() {
    console.log( "ready!" );
    
loadTrips();

});


function loadTrips(){
	// Create our Firebase reference
	var tripsToDisplay = 3;	
	var tripListRef = new Firebase('https://phototrips.firebaseio.com//locations');
	var tripListView = tripListRef.limit(tripsToDisplay);
	
	tripListRef.once('value', function(dataSnapshot) {
		// store dataSnapshot for use in below examples.
		tripListView = dataSnapshot.val();
		console.log(tripListView);
		//length of an object.
		//console.log(Object.keys(tripListView).length)
		var listItems = "";
		
		$.each(tripListView, function(key, val) {
			var location = [];
			
			console.log('Key: ' + key + '  Val: ' + val)
			location.push(key);
			$.each(val, function(key, val) {
				location.push(val); 
				
			});
			
			
			listItems += '<li"><a href="#"><img src="imgs/places/thailand.jpg">'
			listItems += '<h2>' + location[0] + "</h2>";
			listItems += '<p>' + location[3] + '</p></a>'
			
			

		});
		
		console.log(listItems);
		$("#trip-list").html(listItems);
		$("#trip-list").listview("refresh");
	});
	
	
	
	
		
		
}
	
	
  







function doScan(){
	console.log("doScan()");
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			alert("We got a barcode\n" +
				"Result: " + result.text + "\n" +
				"Format: " + result.format + "\n" +
				"Cancelled: " + result.cancelled);
	  	}, 
	  	function (error) {
			alert("Scanning failed: " + error);
	  	}
	);	
}