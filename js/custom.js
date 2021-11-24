$(function(){
    "use strict";

    // Adjust Header Height
    $(".header").height($(window).height());

    // Nice Scroll Trigger
    $("body").niceScroll({
        cursorcolor : "#415B90",
        cursorwidth : "7px",
        cursorborder : "1px solid #415B90"
    });

    // Gallery
    $(".third-section .item img").each(function(){
        $(this).click(function(){
            $(".popup-images").fadeIn();
            $($(this).data("class")).fadeIn().addClass("active").siblings().removeClass("active").css("display","none");
        });
    });
    $(".popup-images").click(function(){
        $(this).fadeOut();
        $(".popup-images-image div").hide().removeClass("active");
    });
    $(".popup-images-image div img").click(function(e){
        e.stopPropagation();
    });
    $(".popup-images-image div i").click(function(e){
        e.stopPropagation();
    });
    $(".popup-images-image div p").click(function(e){
        e.stopPropagation();
    });
    $(".popup-images-image .fa-close").click(function(){
        $(".popup-images").fadeOut();
    });
    $(".popup-images-image .fa-chevron-right").each(function(){
        $(this).click(function(){
            $(this).parent().removeClass("active").hide().next().addClass("active").show();
        });
    });
    $(".popup-images-image .fa-chevron-left").each(function(){
        $(this).click(function(){
            $(this).parent().removeClass("active").hide().prev().addClass("active").show();
        });
    });
    $(document).keyup(function(e){
        var keyCode = e.keyCode || e.which;
        if (keyCode === 27) {
            $(".popup-images").fadeOut();
        }
    });

    // form
    $(".colored").each(function(){
        $(this).on("focus",function(){
            $(this).css("border-color","#415b90");
        });
        $(this).on("blur",function(){
            $(this).css("border-color","#eee");
        });
    });
});