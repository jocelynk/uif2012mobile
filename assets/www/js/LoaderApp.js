//change functions to use bindthis

var LoaderApp = function(){
    this.setup();
    this.auth();
    this.nav();
    console.log(window.plugins.barcodeScanner);
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
    this.event = new Event();
    this.photoCapture = new Camera();
  },
  
  auth: function() {
    var self = this;
    if('localStorage' in window && window['localStorage'] !== null) {
        var temp = localStorage.getItem('token');
        console.log("LocalStorage: " + temp);
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
    var self = this;
    //Questions to ask: why is self now Authentication? b/c it's loading from there?  
    //for browser click events
    $("#link-home").click(function(e) {
        e.preventDefault(); 
        $('ul#menu').slideUp()
        self.transitioner.slideDown(self.homeDiv);
    });
    
    $("#sign-in").click(function(e) {
        e.preventDefault();
        $('ul#menu').slideUp()
        self.transitioner.slideDown(self.authDiv);
    });
    /*
    $("#logout").click(function(e) {
        e.preventDefault();
        $('ul#menu').slideUp()
        self.authentication.destroyToken(self.authentication);
     });
        
     $("#link-checkin").click(function(e) {
        e.preventDefault();
        $('ul#menu').slideUp();
        self.event.initCheckin();
        self.event.getCurrentEvents(self.authentication.token);
        self.transitioner.slideDown(self.checkinDiv);
      });
      
       
      $("#link-students").click(function(e) {
        e.preventDefault();
        $('ul#menu').slideUp();
        $('#student_result').html('');
        $('#photo_buttons').addClass('none');
        $('#image').prop('src', '');
        self.transitioner.slideDown(self.studentsDiv);
      });
        
      $("#link-events").click(function(e) {
        e.preventDefault();    
        $('ul#menu').slideUp()
        self.event.initEvent(self.authentication.token);
        self.event.getProgramsAndSections(self.authentication.token);
          
        self.transitioner.slideDown(self.eventsDiv);
      });
      */
      //mobile on touch events  
      document.getElementById("sign-in").addEventListener('touchstart', function(e) {
        e.preventDefault(); 
        $('ul#menu').slideUp() 
        self.transitioner.slideDown(self.authDiv);
      }, false);
    
      document.getElementById("link-home").addEventListener('touchstart', function(e) {
        e.preventDefault();
        $('ul#menu').slideUp()     
        self.transitioner.slideDown(self.homeDiv);
      }, false);
            
      document.getElementById("logout").addEventListener('touchstart', function(e) {
        e.preventDefault();
        self.authentication.destroyToken(self.authentication);
        self.transitioner.slideDown(self.authDiv);
      }, false);
      
      document.getElementById("link-checkin").addEventListener('touchstart', function(e) {
        var toggle = "";  
        var icon = $("nav").find("i"); 
        (icon.attr("class") === "icon-chevron-up")? toggle="icon-chevron-down": toggle="icon-chevron-up"
        icon.attr("class", toggle);
        
        e.preventDefault();
        $('ul#menu').slideUp()
        self.event.initCheckin();
        self.event.getCurrentEvents(self.authentication.token);
        self.transitioner.slideDown(self.checkinDiv);
      }, false);
      
      document.getElementById("link-students").addEventListener('touchstart', function(e) {
        var toggle = "";  
        var icon = $("nav").find("i"); 
        (icon.attr("class") === "icon-chevron-up")? toggle="icon-chevron-down": toggle="icon-chevron-up"
        icon.attr("class", toggle);
        
        $('#student_result').html('');
        $('#photo_buttons').addClass('none');
        $('#image').prop('src', '');
        
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
        self.event.getProgramsAndSections(self.authentication.token);
        self.event.initEvent(self.authentication.token);
        self.transitioner.slideDown(self.eventsDiv);
      }, false);

  }
}
