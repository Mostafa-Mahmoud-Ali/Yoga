/*global $, window*/
$('document').ready(function () {
    "use strict";
    
    $('.Option_Box .Gear').click(function () {
        $('.Option_Box .Color_Option').fadeToggle();
    });
    
    
    
    
    
    $('.Option_Box .Color_Option ul li').eq(0).css('backgroundColor', '#6c9894').end()
        .eq(1).css('backgroundColor', '#e67575').end()
        .eq(2).css('backgroundColor', '#7b87ff').end()
        .eq(3).css('backgroundColor', '#d12cff').end()
        .eq(4).css('backgroundColor', '#c9c038');
    
    
    
    
    
    $('.Option_Box .Color_Option ul li').eq(0).click(function () {
        $('link[href*=theme]').attr("href", $(this).attr('data-value'));
        $('link[rel*=shortcut]').attr("href", $(this).attr('logo'));
        $('.Pricing .pric img').attr("src", $(this).attr('pricing'));
        $('.navbar .navbar-brand img').attr("src", $(this).attr('logo'));
        $('.join_Now .yoga_img img').attr("src", $(this).attr('join'));
        $('.Trainer_Devandra img').attr("src", $(this).attr('trainer'));
        $('.Option_Box .Color_Option').fadeOut(500);
    });
    
    $('.Option_Box .Color_Option ul li').eq(1).click(function () {
        $('link[href*=theme]').attr("href", $(this).attr('data-value'));
        $('link[rel*=shortcut]').attr("href", $(this).attr('logo'));
        $('.Pricing .pric img').attr("src", $(this).attr('pricing'));
        $('.navbar .navbar-brand img').attr("src", $(this).attr('logo'));
        $('.join_Now .yoga_img img').attr("src", $(this).attr('join'));
        $('.Trainer_Devandra img').attr("src", $(this).attr('trainer'));
        $('.Option_Box .Color_Option').fadeOut(500);
    });
    
    $('.Option_Box .Color_Option ul li').eq(2).click(function () {
        $('link[href*=theme]').attr("href", $(this).attr('data-value'));
        $('link[rel*=shortcut]').attr("href", $(this).attr('logo'));
        $('.Pricing .pric img').attr("src", $(this).attr('pricing'));
        $('.navbar .navbar-brand img').attr("src", $(this).attr('logo'));
        $('.join_Now .yoga_img img').attr("src", $(this).attr('join'));
        $('.Trainer_Devandra img').attr("src", $(this).attr('trainer'));
        $('.Option_Box .Color_Option').fadeOut(500);
    });
    
    $('.Option_Box .Color_Option ul li').eq(3).click(function () {
        $('link[href*=theme]').attr("href", $(this).attr('data-value'));
        $('link[rel*=shortcut]').attr("href", $(this).attr('logo'));
        $('.Pricing .pric img').attr("src", $(this).attr('pricing'));
        $('.navbar .navbar-brand img').attr("src", $(this).attr('logo'));
        $('.join_Now .yoga_img img').attr("src", $(this).attr('join'));
        $('.Trainer_Devandra img').attr("src", $(this).attr('trainer'));
        $('.Option_Box .Color_Option').fadeOut(500);
    });
    
    $('.Option_Box .Color_Option ul li').eq(4).click(function () {
        $('link[href*=theme]').attr("href", $(this).attr('data-value'));
        $('link[rel*=shortcut]').attr("href", $(this).attr('logo'));
        $('.Pricing .pric img').attr("src", $(this).attr('pricing'));
        $('.navbar .navbar-brand img').attr("src", $(this).attr('logo'));
        $('.join_Now .yoga_img img').attr("src", $(this).attr('join'));
        $('.Trainer_Devandra img').attr("src", $(this).attr('trainer'));
        $('.Option_Box .Color_Option').fadeOut(500);
    });
    
    
    
    
    
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 500) {
            $('.Scroll_Top').fadeIn();
        } else {
            $('.Scroll_Top').fadeOut();
        }
    });
    
    
    
    
    
    $('.Scroll_Top').click(function () {
        $('body').animate({scrollTop: 0}, 1000);
    });
    
    
    
    
    $('.navbar-inverse .navbar-toggle').click(function () {
        $('.join_Now .yoga_img').toggleClass('mmm');
    });
    
    
    
    
});






$('body').css("overflow", "hidden");
$(window).load(function () {
    "use strict";
    $('.Loading-Screen .Loading').fadeOut(1000, function () {
        $('body').css("overflow", "auto");
        $(this).parent().fadeOut(1000, function () {
            $('.Loading-Screen').remove();
        });
    });
});