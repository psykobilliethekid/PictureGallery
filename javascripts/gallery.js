$(document).ready(function(){
    $(".img").click(function(){
       var RenFaire = $(this).children("img").attr("src");
        //alert(RenFaire);
       $("#display img").attr("src", RenFaire);
    });
                        
});