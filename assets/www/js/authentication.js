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
          url: "http://128.237.74.78:3000/getToken",
          type: "POST",
          data: {"email": email, "password": password},
          success: function(data) {
            console.log(data);
            if(typeof data.token !== 'undefined') {
                self.token = data.token;
                self.authorized = true;
                if('localStorage' in window && window['localStorage'] !== null) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('authorized', true);
                    localStorage.setItem('email', email);
                }         
                self.transitioner.slideDown($('#checkin'));
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
        return false;
    },
    destroyToken: function(self) {
        var token = self.token;
        $.ajax({
          url: "http://128.237.74.78:3000/destroyToken",
          type: "DELETE",
          data: {"id": token},
          success: function(data) {
            console.log(data);
            if(typeof data.token !== 'undefined') {
                self.resetAuthDetails();    
                self.transitioner.slideDown($('#authentication'));
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
