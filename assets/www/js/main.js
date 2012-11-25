var scanCode = function() {
    window.plugins.barcodeScanner.scan(
        function(result) {
        document.write(result.text);
        //alert("Scanned Code: " + result.text 
               // + ". Format: " + result.format
               // + ". Cancelled: " + result.cancelled);
    }, function(error) {
        alert("Scan failed: " + error);
    });
}
