//change functions to use bindthis
var LoaderApp = function () {
    this.setup();
    this.auth();
    this.nav();
    console.log(window.plugins.barcodeScanner);
  }

LoaderApp.prototype = {
  setup: function () {
    this.transitioner = new Transitioner();
    this.homeDiv = $('#home');
    this.authDiv = $('#authentication');
    this.checkinDiv = $('#checkin');
    this.eventsDiv = $('#events');
    this.studentsDiv = $('#students');
    this.scanDiv = $('#scan_page');
    this.authentication = new Authentication(this.transitioner);
    this.event = new Event();
    this.photoCapture = new Camera();
  },

  auth: function () {
    var self = this;
    if ('localStorage' in window && window['localStorage'] !== null) {
      var temp = localStorage.getItem('token');
      console.log("LocalStorage: " + temp);
      if (temp !== null) {
        this.authentication.authorized = true;
        this.authentication.token = temp;
        this.authentication.email = localStorage.getItem('email');
      }
    }
    if (this.authentication.authorized === false) {
      if(!$('#logout').hasClass('none')) {
        $('#logout').addClass('none');
        $('#logout a').addClass('none');
        $('#nav').addClass('none');
        $('#nav i').addClass('none');
        $('#username').html('');
      }
    } else {
      if(!$('#sign-in').hasClass('none')) {  
          $('#user').html(this.authentication.email)
          $('#sign-in').addClass('none');
          $('#sign-in a').addClass('none');
      }
    }

    $('#login').submit(function (e) {
      e.preventDefault();
      self.authentication.getToken(self.authentication);
    });
  },
  nav: function () {
    var self = this;

    //mobile on touch events  
    $("#sign-in").bind('tapone', function (e) {
      e.preventDefault();
      $('ul#menu').slideUp()
      self.transitioner.slideDown(self.authDiv);
    });

    $("#link-home").bind('tapone', function (e) {
      console.log("test");
      e.preventDefault();
      $('ul#menu').slideUp()
      self.transitioner.slideDown(self.homeDiv);
    });

    $("#logout").bind('tapone', function (e) {
      e.preventDefault();
      self.authentication.destroyToken(self.authentication);
      self.transitioner.slideDown(self.authDiv);
    });

    $("#link-checkin").bind('tapone', function (e) {
      var toggle = "";
      var icon = $("nav").find("i");
      (icon.attr("class") === "icon-chevron-up") ? toggle = "icon-chevron-down" : toggle = "icon-chevron-up"
      icon.attr("class", toggle);

      e.preventDefault();
      $('ul#menu').slideUp()
      self.event.initCheckin();
      self.event.getCurrentEvents(self.authentication.token);
      self.transitioner.slideDown(self.checkinDiv);
    });

    $("#link-students").bind('tapone', function (e) {
      var toggle = "";
      var icon = $("nav").find("i");
      (icon.attr("class") === "icon-chevron-up") ? toggle = "icon-chevron-down" : toggle = "icon-chevron-up"
      icon.attr("class", toggle);

      $('#student_result').html('');
      $('#photo_buttons').addClass('none');
      $('#image').prop('src', '');

      e.preventDefault();
      $('ul#menu').slideUp();
      self.transitioner.slideDown(self.studentsDiv);
    });

    $("#link-events").bind('tapone', function (e) {
      var toggle = "";
      var icon = $("nav").find("i");
      (icon.attr("class") === "icon-chevron-up") ? toggle = "icon-chevron-down" : toggle = "icon-chevron-up"
      icon.attr("class", toggle);

      e.preventDefault();
      $('ul#menu').slideUp()
      self.event.getProgramsAndSections(self.authentication.token);
      self.event.initEvent(self.authentication.token);
      self.transitioner.slideDown(self.eventsDiv);
    });

  }
}
