// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
	console.log("onDeviceReady()");
	navigator.geolocation.getCurrentPosition(generateMap, onError);
        console.log(position); 
	
	$( "#qrScanBtn" ).click(function() {
  		doScan();
		
	
		
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