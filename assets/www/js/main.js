//Authentication

var authDetails =  {
    token: '',
    email: '',
    authorized: false
}

function getToken() {
    var email = $('#email').val();
    authDetails["email"] = email;
    var password = $('#password').val();
    console.log(email);
    $.ajax({
      url: "http://128.237.74.78:3000/getToken",
      type: "POST",
      data: {"email": email, "password": password},
      success: function(data) {
        console.log("DATA");
        console.log(data);
        if(typeof data.token !== 'undefined') {
            authDetails["token"] = data.token;
            authDetails["authorized"] = true;
            console.log(data.token);
            window.location.replace("#events");
            $('#nav').removeClass('none');
            $('#sign-in').addClass('none');
            $('#logout').removeClass('none');
        } else {
               $(".flash").html(data.message);
               $(".flash").fadeIn("slow", function() { $(".flash").fadeOut(1600)})
        }
       
        return false;
      },
      error: function(err) {
        console.log("ERROR: ");
        console.log(err);
      }
    });
    return false;
}

function destroyToken() {
    var token = authDetails["token"];

    $.ajax({
      url: "http://128.237.74.78:3000/destroyToken",
      type: "DELETE",
      data: {"id": token},
      success: function(data) {
        console.log(data);
        if(typeof data.token !== 'undefined') {
            authDetails["token"] = '';
            authDetails["email"] = '';
            authDetails["authorized"] = false;
            window.location.href = "#home";
            $('#nav').addClass('none');
            $('#sign-in').removeClass('none');
            $('#logout').addClass('none');
        } else {
               $(".flash").html(data.message);
               $(".flash").fadeIn("slow", function() { $(".flash").fadeOut(1600)})
        }
       
        return false;
      },
      error: function(err) {
        console.log(err);
      }
    });
    return false;
}

//Nav Auth Links

function authEvents() {
    if(authDetails["authorized"]) {
        window.location.replace("#events"); 
    } else {
        $(".flash").html(data.message);
        $(".flash").fadeIn("slow", function() { $(".flash").fadeOut(1600)});
    }
}

function authCheckin() {
    if(authDetails["authorized"]) {
        window.location.replace("#checkin"); 
    } else {
        $(".flash").html(data.message);
        $(".flash").fadeIn("slow", function() { $(".flash").fadeOut(1600)});
    }
}

function authStudents() {
    if(authDetails["authorized"]) {
        window.location.replace("#students"); 
    } else {
        $(".flash").html(data.message);
        $(".flash").fadeIn("slow", function() { $(".flash").fadeOut(1600)});
    }
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
    $.ajaxSetup({
       headers: {"X-Requested-With": "XMLHttpRequest"}

    });
    if(!authDetails["authorized"]) {
       $('#logout').addClass('none');
       $('#nav').addClass('none');   
    }
    $('#login').submit(getToken);
        
})
