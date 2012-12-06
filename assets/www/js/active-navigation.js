$(document).ready(function()
{

    //reset type=date inputs to text
    $( document ).bind( "mobileinit", function(){
        $.mobile.page.prototype.options.degradeInputs.date = true;
    });

    
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
    