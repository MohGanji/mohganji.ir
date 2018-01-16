/*=========================================

Template Name: pixie - Personal Portfolio Template
Author: mhbthemes
Version: 1.0
Design and Developed by: mhbthemes

NOTE: This is the custom jQuery file for the template

=========================================*/


(function ($) {
	"use strict";
    
    var $window = $(window),
            $body = $('body');
    
    jQuery(document).ready(function($){

 /*=======================================
            DEMO PANLE JS
    =======================================*/
        $("span.color_1").on("click", function(){
            $("body").addClass("color_1_theme").removeClass("color_2_theme color_3_theme color_4_theme");
        });
        $("span.color_2").on("click", function(){
            $("body").addClass("color_2_theme").removeClass("color_1_theme color_3_theme color_4_theme");
        });
    $("span.color_3").on("click", function(){
            $("body").addClass("color_3_theme").removeClass("color_1_theme color_2_theme color_4_theme");
        });
    $("span.color_4").on("click", function(){
            $("body").addClass("color_4_theme").removeClass("color_1_theme color_3_theme color_2_theme");
        });
    	$(".spiner_button").on("click", function(event){
            event.preventDefault();
            if ( $(this).hasClass("slide_in_out") ) {
            $(".demo_panel_box").stop().animate({left:"-215px"}, 400);
            } else {
            $(".demo_panel_box").stop().animate({left:"0px"}, 400);
            }
            $(this).toggleClass("slide_in_out");
            return false;
        });

    
    
    /*=============================
                Sticky header
    ==============================*/
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

        $window.on('scroll', function() {
          if ($(".navbar").offset().top > 100) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
              } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
              }
        });
      
        
     /*=============================
                Smoothscroll js
        ==============================*/
        $(function() {
          $('a.smoth-scroll').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
          });
        });  
            
        
    /*======================================
        jquery scroll spy
    ========================================*/
        $body.scrollspy({
        
            target : ".navbar-collapse",
            offset : 95
        
        });
        
        
     /*=================================
            Bootstrap menu fix
     ==================================*/
        $(".navbar-toggle").on("click", function(){
        
            $body.addClass("mobile-menu-activated");
        
        });
        
        $("ul.nav.navbar-nav li a").on("click", function(){
        
            $(".navbar-collapse").removeClass("in");
        
        });
        
        
    /*====================================================
        background-image flickering solution for mobile
        =======================================================*/
         var bg = jQuery("#home");
        function resizeBackground() {
            bg.height(jQuery(window).height() + 60);
      }
      resizeBackground();
        
    
    /*==========================
        Intro typer
    ============================*/
    var element = $(".element");

        $(function() {
            element.typed({
                strings: ["Backend Developer", "Telegram bot developer", "Computer Enthusiast", "Geek", "Linux Lover"],
                typeSpeed: 100,
                loop: true,
            });
        });
        
        
     /*=============================
            Parallax
    ==============================*/
    $window.stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });

    /*=============================
        CounterUp
    ==============================*/
    $('.counter').counterUp({
        delay: 4,
         time: 800
    });
    

    });
    
   
    $window.on('load', function(){
          /*=============================
                Preloder
        ==============================*/
         $('.spinner').fadeOut(); 
        $('.preloader').delay(350).fadeOut(500);
        $body.delay(350).css({'overflow':'visible'});
            
        });


    

}(jQuery));	

