var authDetails =  {
	token: ''	
}

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

$(document).ready(function() {
		$('#login').submit(getToken);
})

function test() {
	$('#test2').html(authDetails["token"]);
}

function getToken() {
	$.ajax({
      url: "http://128.237.74.78:3000/test",
      dataType: "jsonp",
      beforeSend: function(xhr) {xhr.setRequestHeader("Accept", "text/javascript")},
      type: "GET",
      //processData: false,
      //beforeSend: function(jqXHR, settings) {
   	  	  //$('#test').append(settings.url);
   	  //	 console.log(settings.url);
   	  //},
      contentType: "application/json",
      data: {"email": "profh@cmu.edu", "password": "secret"},
      success: function(data) {
        authDetails["token"] = data.token;
        $('#test').html('<h1>'+data.token+'</h1>');
        return false;
      },
      error: function(err) {
        console.log(err);
      }
    });
    return false;
}