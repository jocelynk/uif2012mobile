$(document).ready(function()
{
    $("#navbar li").click(function()
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


});