//Authentication

/*var authDetails =  {
    token: '',
    email: '',
    authorized: false
}*/

var Authentication = function(transitioner) {
    this.token =  '';
    this.email =  '';
    this.authorized =  false;
    this.transitioner = transitioner;
    this.homeDiv = $('#home');
    this.authDiv = $('#authentication');
    this.checkinDiv = $('#checkin');
    this.eventsDiv = $('#events');
    this.studentsDiv = $('#students');
    this.scanDiv = $('#scan_page');
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
    },
    
    getToken: function(self) {
        var email = $('#email').val();
        self.email = email;
        var password = $('#password').val();
        console.log(email);
        $.ajax({
          url: "http://192.168.1.5:3000/getToken",
          type: "POST",
          cache : false,
          beforeSend: function(xhr, settings){settings.url},
          data: {"email": email, "password": password},
          success: function(data) {
            console.log(data.token);
            if(typeof data.token !== 'undefined') {
                self.token = data.token;
                self.authorized = true;
                if('localStorage' in window && window['localStorage'] !== null) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('authorized', true);
                    localStorage.setItem('email', email);
                }         
                self.transitioner.slideDown($('#home'));
                $('#password').val('');
                $('#email').val('');
                $('#nav').removeClass('none');
                $('#sign-in a').addClass('none');
                $('#logout a').removeClass('none');
            } else {
                   $("#login_flash").html(data.message);
                   $("#login_flash").fadeIn("slow", function() { $("#login_flash").fadeOut(1600)})
            }
           
            return false;
          },
          error: function(err) {
            console.log("ERROR: ");
            console.log(err.statusText);
          }
        });
        return false;
    },
    destroyToken: function(self) {
        var token = self.token;
        console.log(token);
        $.ajax({
          url: "http://192.168.1.5:3000/destroyToken",
          type: "DELETE",
          cache : false,
          data: {"id": token},
          success: function(data) {
            console.log(data.token);
            if(typeof data.token !== 'undefined') {
                console.log(data.token);
                self.resetAuthDetails();    
                self.transitioner.slideDown($('#authentication'));
                $('#nav i').addClass('none');
                $('#nav').addClass('none');
                $('#sign-in a').removeClass('none');
                $('#logout a').addClass('none');
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
    

}



//Page Ready
/*
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
        
})*/
