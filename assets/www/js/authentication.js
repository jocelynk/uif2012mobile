//Authentication

var authDetails =  {
    token: '',
    email: '',
    authorized: false
}

var Authentication = function(transitioner) {
    this.transitioner = transitioner;
    this.token =  '';
    this.email =  '';
    this.authorized =  false;
}

Authentication.prototype = {

    resetAuthDetails: function() {
        this.token = '';
        this.email = '';
        this.authorized = false;
        if('localStorage' in window && window['localStorage'] !== null) {
            localStorage.removeItem('token')
            localStorage.removeItem('authorized')
            localStorage.removeItem('email')   
        }           
    }
    
    getToken: function() {
        var email = $('#email').val();
        this.email = email;
        var password = $('#password').val();
        console.log(email);
        $.ajax({
          url: "http://128.237.227.50:3000/getToken",
          type: "POST",
          data: {"email": email, "password": password},
          success: function(data) {
            if(typeof data.token !== 'undefined') {
                this.token = data.token;
                this.authorized = true;
                if('localStorage' in window && window['localStorage'] !== null) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('authorized', true);
                    localStorage.setItem('email', email);
                }          
                window.location.replace("#checkin");
                $('#password').val('');
                $('#email').val('');
                $('#nav').removeClass('none');
                $('#sign-in').addClass('none');
                $('#logout').removeClass('none');
            } else {
                   $("#login_flash").html(data.message);
                   $("#login_flash").fadeIn("slow", function() { $("#login_flash").fadeOut(1600)})
            }
           
            return false;
          },
          error: function(err) {
            console.log("ERROR: ");
            console.log(err);
          }
        });
        //return false;
    } 

}

function getToken(test) {
    
}

function destroyToken() {
    var token = authDetails["token"];

    $.ajax({
      url: "http://128.237.227.50:3000/destroyToken",
      type: "DELETE",
      data: {"id": token},
      success: function(data) {
        console.log(data);
        if(typeof data.token !== 'undefined') {
            resetAuthDetails();    
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

//Nav Auth Links and Custom Click Links
function authEvents() {
    if(authDetails["authorized"]) {
        window.location.replace("#events"); 
    } else {
        $("#login_flash").html(data.message);
        $("#login_flash").fadeIn("slow", function() {$("#login_flash").fadeOut(1600)});
    }
}

function authCheckin() {
    if(authDetails["authorized"]) {
        window.location.replace("#checkin"); 
        getCurrentEvents(authDetails["token"]);
    } else {
        $("#login_flash").html(data.message);
        $("#login_flash").fadeIn("slow", function() { $("#login_flash").fadeOut(1600)});
    }
}

function authStudents() {
    if(authDetails["authorized"]) {
        window.location.replace("#students"); 
    } else {
        $("#login_flash").html(data.message);
        $("#login_flash").fadeIn("slow", function() { $("#login_flash").fadeOut(1600)});
    }
}


//Page Ready
$(document).ready(function() {
    $.ajaxSetup({
       headers: {"X-Requested-With": "XMLHttpRequest"},
       cache: false
    });
    if('localStorage' in window && window['localStorage'] !== null) {
        var temp = localStorage.getItem('token');
        console.log(temp);
        if(temp !== null) {
            authDetails["authorized"] = true;
            authDetails["token"] = temp;
            authDetails["email"] = localStorage.getItem('email');
        }
    }
    if(authDetails["authorized"] === false) {
       $('#logout').addClass('none');
       $('#nav').addClass('none');   
    } else {
       $('#sign-in').addClass('none');
    }
    $('#login').submit(getToken);
        
})
