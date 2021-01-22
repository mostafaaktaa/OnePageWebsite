/*global $, alert, console*/

$(function () {
    'use strict';
    
    // Adjust Header Height 
    
    var myHeader = $('.header');
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
        
        myHeader.height($(window).height());
        
    });
    
    // links add Active Class
    
    $('.links li a').on("click", function () {
        
        $(this).parent().addClass('active').siblings().removeClass('active');
                
    });
    
    // adjust BX Slider List Item center
    


    $('.bxslider').each(function () {
         $('.myslider').css('paddingTop', ($(window).height() - $('.bxslider li').height())/2);
        
    });
   
    $(window).resize(function () {
        
       $('.myslider').css('paddingTop', ($(window).height() - $('.bxslider li').height())/2);
        
    });

    
    
    //Triger The Bx Slider
    
    $(function () {
        $('.bxslider').bxSlider({
          
            pager: false
        });
    });
    
    //Smooth Scroll to div
    
    $('.links li a').click(function () {
       
        $('html, body').animate({
            
            scrollTop : $('#'+$(this).data('value')).offset().top
            
        },1000);
        
    });
    
    // our auto slider code
    
    
    (function autoslider(){
        
        $('.slider .active').each(function (){
            
            if(!$(this).is(':last-child')){
                
                $(this).delay(3000).fadeOut(1000, function (){
                   
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    autoslider();
                    
                });
                
            }
            else{
                
                $(this).delay(3000).fadeOut(1000, function(){
                   
                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    
                    autoslider();
                    
                });
                
            }
            
        })
        
    }());
    
    // triger mixitup
    var containerEl = document.querySelector('.gallery');

    var mixer = mixitup(containerEl);
    
    $('.shuffle-Controls li').click(function (){
       $(this).addClass('active').siblings().removeClass('active');
    });
    
    
    
});