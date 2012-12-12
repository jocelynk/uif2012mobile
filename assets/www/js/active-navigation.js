$(document).ready(function () {

   $(".timescroller").mobiscroll({
        preset: 'time',
        theme: 'default',
        display: 'modal',
        animate: 'fade',
        mode: 'scroller', 
        stepMinute: 15
        });


   $('.datescroller').mobiscroll({
        preset: 'date',
        invalid: { daysOfWeek: [0, 6], daysOfMonth: ['5/1', '12/24', '12/25'] },
        theme: 'default',
        display: 'modal',
        mode: 'scroller',
        animate: 'fade',
        dateOrder: 'yy-mm-dd'
    });

  // for click devices
  // why this works...i have no idea
  $("a.btn-navbar").bind('tapone', function (e) {
    e.preventDefault();
    //$("a.btn-navbar").click(function() {
    var toggle = "";
    console.log("changing touchstart");
    var icon = $(this).find("i");
    (icon.attr("class") === "icon-chevron-up") ? toggle = "icon-chevron-down" : toggle = "icon-chevron-up"
    icon.attr("class", toggle);
    ($("#nav-button").attr("class") === "icon-chevron-up") ? toggle = "icon-chevron-down" : toggle = "icon-chevron-up";
    $("#nav-button").attr("class", toggle);
  });


});
