$(document).ready(function () {

   $(".timescroller").mobiscroll({
        preset: 'time',
        theme: 'default',
        display: 'modal',
        animate: 'fade',
        mode: 'scroller', 
        stepMinute: 15
        });


     // tactile feedback / button effects
   
   $("#addIcon").bind("touchstart", function(e)
   {
       e.preventDefault();
       $(this).addClass("pressed");
   }); 
   
   $("#addIcon").bind("touchend", function(e)
   {
       e.preventDefault();
       $(this).removeClass("pressed");  
   });
   
   
  // for click devices
  $("a.btn-navbar").bind('tapone', function (e) {
    e.preventDefault();
    var toggle = "";
    console.log("changing touchstart");
    var icon = $(this).find("i");
    (icon.attr("class") === "icon-chevron-up") ? toggle = "icon-chevron-down" : toggle = "icon-chevron-up"
    icon.attr("class", toggle);
    ($("#nav-button").attr("class") === "icon-chevron-up") ? toggle = "icon-chevron-down" : toggle = "icon-chevron-up";
    $("#nav-button").attr("class", toggle);
  });


});
