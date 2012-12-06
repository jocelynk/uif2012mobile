var LoaderApp = function(){
    this.setup();
    this.auth();
    this.nav();
}

LoaderApp.prototype = {
  setup: function() {
    this.transitioner = new Transitioner();
    this.homeDiv = $('#home');
    this.authDiv = $('#authentication');
    this.checkinDiv = $('#checkin');
    this.eventsDiv = $('#events');
    this.studentsDiv = $('#students');
    this.scanDiv = $('#scan_page');
    this.authentication = new Authentication(this.transitioner);
  },
  
  auth: function() {
    var self = this;
    if('localStorage' in window && window['localStorage'] !== null) {
        var temp = localStorage.getItem('token');
        console.log(temp);
        if(temp !== null) {
            this.authentication.authorized = true;
            this.authentication.token = temp;
            this.authentication.email = localStorage.getItem('email');
        }
    }
    if( this.authentication.authorized === false) {
       $('#logout a').addClass('none');
       $('#nav').addClass('none');   
    } else {
       $('#sign-in a').addClass('none');
    }
    
    $('#login').submit(function(e) { e.preventDefault(); self.authentication.getToken(self.authentication);});
  },
  nav: function() {
    self = this;
    //Questions to ask: why is self now Authentcation? b/c it's loading from there?  
    //for browser click events
    $("#home").click(function(e) {
        e.preventDefault(); 
        $('ul#menu').slideUp()
        self.transitioner.slideDown(self.homeDiv);
    });
    
    $("#sign-in").click(function(e) {
        e.preventDefault();
        $('ul#menu').slideUp()
        self.transitioner.slideDown(self.authDiv);
    });
    
    $("#logout").click(function(e) {
        e.preventDefault();
        $('ul#menu').slideUp()
        self.authentication.destroyToken(self.authentication);
     });
        
     $("#link-checkin").click(function(e) {
        e.preventDefault();
        $('ul#menu').slideUp()
        console.log(self.authentication.token);
        getCurrentEvents(self.authentication.token);
        self.transitioner.slideDown(self.checkinDiv);
      });
       
      $("#link-students").click(function(e) {
        e.preventDefault();
      $('ul#menu').slideUp()
        self.transitioner.slideDown(self.studentsDiv);
      });
        
      $("#link-events").click(function(e) {
        e.preventDefault();    
        $('ul#menu').slideUp()  
        self.transitioner.slideDown(self.eventsDiv);
      });
      
      //mobile on touch events  
      document.getElementById("sign-in").addEventListener('touchstart', function(e) {
        e.preventDefault(); 
        $('ul#menu').slideUp() 
        self.transitioner.slideDown(self.authDiv);
      }, false);
    
      document.getElementById("home").addEventListener('touchstart', function(e) {
        e.preventDefault();
        $('ul#menu').slideUp()     
        self.transitioner.slideDown(self.homeDiv);
      }, false);
            
      document.getElementById("logout").addEventListener('touchstart', function(e) {
        e.preventDefault();
        $('ul#menu').slideUp()
        self.transitioner.slideDown(self.authDiv);
      }, false);
      
      document.getElementById("link-checkin").addEventListener('touchstart', function(e) {
        var toggle = "";  
        var icon = $("nav").find("i"); 
        (icon.attr("class") === "icon-chevron-up")? toggle="icon-chevron-down": toggle="icon-chevron-up"
        icon.attr("class", toggle);
        
        e.preventDefault();
        $('ul#menu').slideUp()
        getCurrentEvents(self.authentication.token);
        self.transitioner.slideDown(self.checkinDiv);
      }, false);
      
      document.getElementById("link-students").addEventListener('touchstart', function(e) {
        var toggle = "";  
        var icon = $("nav").find("i"); 
        (icon.attr("class") === "icon-chevron-up")? toggle="icon-chevron-down": toggle="icon-chevron-up"
        icon.attr("class", toggle);
        
        e.preventDefault();
        $('ul#menu').slideUp();
        self.transitioner.slideDown(self.studentsDiv);
      }, false);
      
      document.getElementById("link-events").addEventListener('touchstart', function(e) {
        var toggle = "";  
        var icon = $("nav").find("i"); 
        (icon.attr("class") === "icon-chevron-up")? toggle="icon-chevron-down": toggle="icon-chevron-up"
        icon.attr("class", toggle);
        
        e.preventDefault();
        $('ul#menu').slideUp()
        self.transitioner.slideDown(self.eventsDiv);
      }, false);

  }
  
  
//Nav Auth Links and Custom Click Links
/*
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
}*/
}
