/*
------------------------------------------------------------------------
* Template Name    : Elvish | Responsive Bootstrap 4 Personal Template * 
* Author           : ThemesBoss                                        *
* Version          : 1.0.0                                             *
* Created          : May 2018                                          *
* File Description : Main Js file of the template                      *
*-----------------------------------------------------------------------
*/

!function(o){"use strict";var t;o(window).on("scroll",function(){o(window).scrollTop()>=50?o(".sticky").addClass("stickyadd"):o(".sticky").removeClass("stickyadd")}),o(".navbar-nav a, .scroll_down a").on("click",function(t){var a=o(this);o("html, body").stop().animate({scrollTop:o(a.attr("href")).offset().top-0},1500,"easeInOutExpo"),t.preventDefault()}),o("#navbarCollapse").scrollspy({offset:20}),t=0,o(window).on("scroll",function(){var a=o("#counter").offset().top-window.innerHeight;0==t&&o(window).scrollTop()>a&&(o(".lan_fun_value").each(function(){var t=o(this),a=t.attr("data-count");o({countNum:t.text()}).animate({countNum:a},{duration:2e3,easing:"swing",step:function(){t.text(Math.floor(this.countNum))},complete:function(){t.text(this.countNum)}})}),t=1)}),o(window).on("load",function(){var t=o(".work-filter"),a=o("#menu-filter");t.isotope({filter:"*",layoutMode:"masonry",animationOptions:{duration:750,easing:"linear"}}),a.find("a").on("click",function(){var n=o(this).attr("data-filter");return a.find("a").removeClass("active"),o(this).addClass("active"),t.isotope({filter:n,animationOptions:{animationDuration:750,easing:"linear",queue:!1}}),!1})}),o(".img-zoom").magnificPopup({type:"image",closeOnContentClick:!0,mainClass:"mfp-fade",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]}}),o("#owl-demo").owlCarousel({autoPlay:7e3,stopOnHover:!0,navigation:!1,paginationSpeed:1e3,goToFirstSpeed:2e3,singleItem:!0,autoHeight:!0}),o(".blog_play").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),o(window).on("scroll",function(){o(this).scrollTop()>100?o(".back_top").fadeIn():o(".back_top").fadeOut()}),o(".back_top").click(function(){return o("html, body").animate({scrollTop:0},1e3),!1}),o("#status").fadeOut(),o("#preloader").delay(350).fadeOut("slow"),o("body").delay(350).css({overflow:"visible"})}(jQuery);