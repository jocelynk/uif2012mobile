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
       $('#logout').addClass('none');
       $('#nav').addClass('none');   
    } else {
       $('#sign-in').addClass('none');
    }
    
    $('#login').submit(function(e) { e.preventDefault(); self.authentication.getToken(self.authentication);});
  },
  nav: function() {
  console.log(this.authentication.authorized);
    self = this;
     $("#home").click(function(e) {
          e.preventDefault();
          self.transitioner.slideDown(self.homeDiv);
        });
    $("#sign-in").click(function(e) {
          e.preventDefault();
          self.transitioner.slideDown(self.authDiv);
        });
   document.getElementById("sign-in").addEventListener('touchstart', function(e) {
          e.preventDefault();
          self.transitioner.slideDown(self.authDiv);
        }, false);
    
    //Questions to ask: why is self now Authentcation? b/c it's loading from there?  
       $("#logout").click(function(e) {
       console.log(self);
          e.preventDefault();
          self.authentication.destroyToken(self.authentication);
        });
        
         $("#link-checkin").click(function(e) {
          e.preventDefault();
          console.log(self);
          self.transitioner.slideDown(self.checkinDiv);
        });
       
      $("#link-students").click(function(e) {
          e.preventDefault();
          console.log(self.authentication);
          self.transitioner.slideDown(self.studentsDiv);
        });
        
      $("#link-events").click(function(e) {
          e.preventDefault();
          self.transitioner.slideDown(self.eventsDiv);
        });
            
      /*document.getElementById("logout").addEventListener('touchstart', function(e) {
        e.preventDefault();
        this.transitioner(this.authDiv);
      }, false);
      
      document.getElementById("link-checkin").addEventListener('touchstart', function(e) {
        e.preventDefault();
        this.transitioner(this.checkinDiv);
      }, false);
      
      document.getElementById("link-students").addEventListener('touchstart', function(e) {
        e.preventDefault();
        this.transitioner(this.studentsDiv);
      }, false);
      
      document.getElementById("link-events").addEventListener('touchstart', function(e) {
        e.preventDefault();
        this.transitioner(this.eventsDiv);
      }, false);*/

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
