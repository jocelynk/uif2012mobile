//Authentication
var Authentication = function (transitioner) {
    this.token = '';
    this.email = '';
    this.authorized = false;
    this.transitioner = transitioner;
    this.homeDiv = $('#home');
    this.authDiv = $('#authentication');
    this.checkinDiv = $('#checkin');
    this.eventsDiv = $('#events');
    this.studentsDiv = $('#students');
    this.scanDiv = $('#scan_page');
  }

Authentication.prototype = {

  resetAuthDetails: function () {
    this.token = '';
    this.email = '';
    this.authorized = false;
    if ('localStorage' in window && window['localStorage'] !== null) {
      localStorage.removeItem('token')
      localStorage.removeItem('authorized')
      localStorage.removeItem('email')
    }
  },

  getToken: function (self) {
    var email = $('#email').val();
    self.email = email;
    var password = $('#password').val();
    $.ajax({
      url: "http://uif2012.herokuapp.com/getToken",
      type: "POST",
      cache: false,
      beforeSend: function (xhr, settings) {
        settings.url
      },
      data: {
        "email": email,
        "password": password
      },
      success: function (data) {
        if (typeof data.token !== 'undefined') {
          self.token = data.token;
          self.authorized = true;
          if ('localStorage' in window && window['localStorage'] !== null) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('authorized', true);
            localStorage.setItem('email', email);
          }
          self.transitioner.slideDown($('#home'));
          $('#password').val('');
          $('#email').val('');
          $('#nav').removeClass('none');
          $('#nav i').removeClass('none');
          $('#user').html(localStorage.getItem('email'));
          $('#sign-in').addClass('none');
          $('#sign-in a').addClass('none');
          $('#logout').removeClass('none');
          $('#logout a').removeClass('none');
        } else {
          $("#login_flash").html(data.message);
          $("#login_flash").removeClass('none');
          $("#login_flash").fadeIn("slow", function () {
            $("#login_flash").fadeOut(1600)
          })
        }

        return false;
      },
      error: function (err) {
        console.log("ERROR: ");
        console.log(err.statusText);
      }
    });
    return false;
  },
  destroyToken: function (self) {
    var token = self.token;
    $.ajax({
      url: "http://uif2012.herokuapp.com/destroyToken",
      type: "DELETE",
      cache: false,
      data: {
        "id": token
      },
      success: function (data) {
        if (typeof data.token !== 'undefined') {
          self.resetAuthDetails();
          $('#nav i').addClass('none');
          $('#nav').addClass('none');
          $('#sign-in').removeClass('none');
          $('#sign-in a').removeClass('none');
          $('#logout a').addClass('none');
          $('#logout').addClass('none');
          $('#user').html('');
          self.transitioner.slideDown($('#authentication'));
          
        } 
        return false;
      },
      error: function (err) {
        console.log(err);
      }
    });
    return false;
  }


}
