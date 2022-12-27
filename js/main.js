$(document).ready(function(){
    $("#menu-icon").click(function(){
        $("#menu").toggleClass("active");

        $(this).toggleClass("active");
    });
});