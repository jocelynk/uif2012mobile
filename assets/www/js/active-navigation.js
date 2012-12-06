$(document).ready(function()
{
    $("#navbar li").click(function(auth_token)
    {
        $(this).addClass('active').siblings().removeClass('active');   
    }); 

    $("#link-home").click(function()
    {
        console.log("clicked"); 
        $("#navbar li").each(function()
        {
            $(this).removeClass("active");  
        }) 
    })

    //reset type=date inputs to text
    $( document ).bind( "mobileinit", function(){
        $.mobile.page.prototype.options.degradeInputs.date = true;
    });


    $("#date").bind('change', function()
    {
        console.log($("input").val()); 
        if ($(this).val().length > 1)
        {
            $("#checkin .hidden").removeClass('hidden').addClass('visible'); 
        }
        else
        {
            $("#checkin .visible").removeClass('visible').addClass('hidden');
        }
    }); 
    
    // for click devices
    // why this works...i have no idea
    $("a.btn-navbar")[0].addEventListener("touchstart", function(e) { e.preventdefault();
    //$("a.btn-navbar").click(function() {
        var toggle = "";  
        var icon = $(this).find("i"); 
        (icon.attr("class") === "icon-chevron-up")? toggle="icon-chevron-down": toggle="icon-chevron-up"
        icon.attr("class", toggle); 
        ($("#nav-button").attr("class") === "icon-chevron-up") ? toggle="icon-chevron-down": toggle="icon-chevron-up"; 
        $("#nav-button").attr("class", toggle); 
    },false);


});
    