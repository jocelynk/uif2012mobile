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
}); 