$(document).ready(function()
{
     /*console.log($('.nativedatepicker')[0]);
     $('button.nativedatepicker')[0].addEventListener('touchstart', function(event) {
        var currentField = $(this); console.log("TOUCHING");
        var myNewDate = Date.parse(currentField.val()) || new Date();
        // Same handling for iPhone and Android
        console.log("TOUCHING");
        window.plugins.datePicker.show({
            date : myNewDate,
            mode : 'date', // date or time or blank for both
            allowOldDates : true
        }, function(returnDate) {
            var newDate = new Date(returnDate);
            currentField.val(newDate.toString("dd/MMM/yyyy"));

            // This fixes the problem you mention at the bottom of this script with it not working a second/third time around, because it is in focus.
            currentField.blur();
        });
    },false);*/
/*
    $('.nativetimepicker')[0].addEventListener('touchstart', function(event) {
        var currentField = $(this);
        var time = currentField.val();
        var myNewTime = new Date();
        console.log("TOUCHING");
        myNewTime.setHours(time.substr(0, 2));
        myNewTime.setMinutes(time.substr(3, 2));

        // Same handling for iPhone and Android
        window.plugins.datePicker.show({
            date : myNewTime,
            mode : 'time', // date or time or blank for both
            allowOldDates : true
        }, function(returnDate) {
          // returnDate is generated by .toLocaleString() in Java so it will be relative to the current time zone
            var newDate = new Date(returnDate);
            currentField.val(newDate.toString("HH:mm"));

            currentField.blur();
        });
    },false);
    */
    // for click devices
    // why this works...i have no idea
    $("a.btn-navbar")[0].addEventListener("touchstart", function(e) { e.preventDefault();
    //$("a.btn-navbar").click(function() {
        var toggle = ""; 
        console.log("changing touchstart"); 
        var icon = $(this).find("i"); 
        (icon.attr("class") === "icon-chevron-up")? toggle="icon-chevron-down": toggle="icon-chevron-up"
        icon.attr("class", toggle); 
        ($("#nav-button").attr("class") === "icon-chevron-up") ? toggle="icon-chevron-down": toggle="icon-chevron-up"; 
        $("#nav-button").attr("class", toggle); 
    },true);


});
    