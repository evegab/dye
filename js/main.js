(function($){"use strict";var cfg={scrollDuration:800,mailChimpURL:'https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc'},$WIN=$(window);var doc=document.documentElement;doc.setAttribute('data-useragent',navigator.userAgent);if(!Modernizr.svg){$(".header__logo img").attr("src","images/logof.png");}
var clPreloader=function(){$("html").addClass('cl-preload');$WIN.on('load',function(){$("#loader").fadeOut("slow",function(){$("#preloader").delay(300).fadeOut("slow");});$("html").removeClass('cl-preload');$("html").addClass('cl-loaded');});};var clMediaElement=function(){$('audio').mediaelementplayer({pluginPath:'https://cdnjs.com/libraries/mediaelement/',shimScriptAccess:'always'});};var clFitVids=function(){$(".video-container").fitVids();};var clPrettyPrint=function(){$('pre').addClass('prettyprint');$(document).ready(function(){prettyPrint();});};var clSearch=function(){var searchWrap=$('.header__search'),searchField=searchWrap.find('.search-field'),closeSearch=searchWrap.find('.header__overlay-close'),searchTrigger=$('.header__search-trigger'),siteBody=$('body');searchTrigger.on('click',function(e){e.preventDefault();e.stopPropagation();var $this=$(this);siteBody.addClass('search-is-visible');setTimeout(function(){searchWrap.find('.search-field').focus();},100);});closeSearch.on('click',function(e){var $this=$(this);e.stopPropagation();if(siteBody.hasClass('search-is-visible')){siteBody.removeClass('search-is-visible');setTimeout(function(){searchWrap.find('.search-field').blur();},100);}});searchWrap.on('click',function(e){if(!$(e.target).is('.search-field')){closeSearch.trigger('click');}});searchField.on('click',function(e){e.stopPropagation();});searchField.attr({placeholder:'Type Keywords',autocomplete:'off'});};var clMobileMenu=function(){var navWrap=$('.header__nav-wrap'),closeNavWrap=navWrap.find('.header__overlay-close'),menuToggle=$('.header__toggle-menu'),siteBody=$('body');menuToggle.on('click',function(e){var $this=$(this);e.preventDefault();e.stopPropagation();siteBody.addClass('nav-wrap-is-visible');});closeNavWrap.on('click',function(e){var $this=$(this);e.preventDefault();e.stopPropagation();if(siteBody.hasClass('nav-wrap-is-visible')){siteBody.removeClass('nav-wrap-is-visible');}});$('.header__nav .has-children').children('a').on('click',function(e){e.preventDefault();if($(".close-mobile-menu").is(":visible")==true){$(this).toggleClass('sub-menu-is-open').next('ul').slideToggle(200).end().parent('.has-children').siblings('.has-children').children('a').removeClass('sub-menu-is-open').next('ul').slideUp(200);}});};var clMasonryFolio=function(){var containerBricks=$('.masonry');containerBricks.imagesLoaded(function(){containerBricks.masonry({itemSelector:'.masonry__brick',percentPosition:true,resize:true});});containerBricks.imagesLoaded().progress(function(){containerBricks.masonry('layout');});};var clSlickSlider=function(){var $gallery=$('.slider__slides').slick({arrows:false,dots:true,infinite:true,slidesToShow:1,slidesToScroll:1,adaptiveHeight:true,pauseOnFocus:false,fade:true,cssEase:'linear'});$('.slider__slide').on('click',function(){$gallery.slick('slickGoTo',parseInt($gallery.slick('slickCurrentSlide'))+1);});};var clSmoothScroll=function(){$('.smoothscroll').on('click',function(e){var target=this.hash,$target=$(target);e.preventDefault();e.stopPropagation();$('html, body').stop().animate({'scrollTop':$target.offset().top},cfg.scrollDuration,'swing').promise().done(function(){if($('body').hasClass('menu-is-open')){$('.header-menu-toggle').trigger('click');}
window.location.hash=target;});});};var clPlaceholder=function(){$('input, textarea, select').placeholder();};var clAlertBoxes=function(){$('.alert-box').on('click','.alert-box__close',function(){$(this).parent().fadeOut(500);});};var clAOS=function(){AOS.init({offset:-400,duration:600,easing:'ease-in-sine',delay:100,once:true,disable:'mobile'});};var clAjaxChimp=function(){$('#mc-form').ajaxChimp({language:'es',url:cfg.mailChimpURL});$.ajaxChimp.translations.es={'submit':'Submitting...',0:'<i class="fa fa-check"></i> We have sent you a confirmation email',1:'<i class="fa fa-warning"></i> You must enter a valid e-mail address.',2:'<i class="fa fa-warning"></i> E-mail address is not valid.',3:'<i class="fa fa-warning"></i> E-mail address is not valid.',4:'<i class="fa fa-warning"></i> E-mail address is not valid.',5:'<i class="fa fa-warning"></i> E-mail address is not valid.'}};var clBackToTop=function(){var pxShow=500,goTopButton=$(".go-top")
if($(window).scrollTop()>=pxShow)goTopButton.addClass('link-is-visible');$(window).on('scroll',function(){if($(window).scrollTop()>=pxShow){if(!goTopButton.hasClass('link-is-visible'))goTopButton.addClass('link-is-visible')}else{goTopButton.removeClass('link-is-visible')}});};var clCustomZoomControl=function(controlDiv,map){var controlUIzoomIn=document.getElementById('map-zoom-in'),controlUIzoomOut=document.getElementById('map-zoom-out');controlDiv.appendChild(controlUIzoomIn);controlDiv.appendChild(controlUIzoomOut);google.maps.event.addDomListener(controlUIzoomIn,'click',function(){map.setZoom(map.getZoom()+1)});google.maps.event.addDomListener(controlUIzoomOut,'click',function(){map.setZoom(map.getZoom()-1)});};var clGoogleMap=function(){if(typeof google==='object'&&typeof google.maps==='object'){var latitude=37.422424,longitude=-122.085661,map_zoom=14,main_color='#0054a5',saturation_value=-30,brightness_value=5,marker_url=null,winWidth=$(window).width();$("#map-zoom-in, #map-zoom-out").show();if(winWidth>480){marker_url='images/icon-location@2x.png';}else{marker_url='images/icon-location.png';}
var style=[{elementType:"labels",stylers:[{saturation:saturation_value}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:'road.highway',elementType:'labels',stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{hue:main_color},{visibility:"on"},{lightness:brightness_value},{saturation:saturation_value}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{hue:main_color},{visibility:"on"},{lightness:brightness_value},{saturation:saturation_value}]},{featureType:"poi.government",elementType:"geometry.fill",stylers:[{hue:main_color},{visibility:"on"},{lightness:brightness_value},{saturation:saturation_value}]},{featureType:"poi.sport_complex",elementType:"geometry.fill",stylers:[{hue:main_color},{visibility:"on"},{lightness:brightness_value},{saturation:saturation_value}]},{featureType:"poi.attraction",elementType:"geometry.fill",stylers:[{hue:main_color},{visibility:"on"},{lightness:brightness_value},{saturation:saturation_value}]},{featureType:"poi.business",elementType:"geometry.fill",stylers:[{hue:main_color},{visibility:"on"},{lightness:brightness_value},{saturation:saturation_value}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{hue:main_color},{visibility:"on"},{lightness:brightness_value},{saturation:saturation_value}]},{featureType:"transit.station",elementType:"geometry.fill",stylers:[{hue:main_color},{visibility:"on"},{lightness:brightness_value},{saturation:saturation_value}]},{featureType:"landscape",stylers:[{hue:main_color},{visibility:"on"},{lightness:brightness_value},{saturation:saturation_value}]},{featureType:"road",elementType:"geometry.fill",stylers:[{hue:main_color},{visibility:"on"},{lightness:brightness_value},{saturation:saturation_value}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{hue:main_color},{visibility:"on"},{lightness:brightness_value},{saturation:saturation_value}]},{featureType:"water",elementType:"geometry",stylers:[{hue:main_color},{visibility:"on"},{lightness:brightness_value},{saturation:saturation_value}]}];var map_options={center:new google.maps.LatLng(latitude,longitude),zoom:14,panControl:false,zoomControl:false,mapTypeControl:false,streetViewControl:false,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:false,styles:style};var map=new google.maps.Map(document.getElementById('map-container'),map_options);var marker=new google.maps.Marker({position:new google.maps.LatLng(latitude,longitude),map:map,visible:true,icon:marker_url});var zoomControlDiv=document.createElement('div');var zoomControl=new clCustomZoomControl(zoomControlDiv,map);map.controls[google.maps.ControlPosition.TOP_RIGHT].push(zoomControlDiv);}};(function ssInit(){clPreloader();clMediaElement();clPrettyPrint();clSearch();clMobileMenu();clMasonryFolio();clSlickSlider();clSmoothScroll();clPlaceholder();clAlertBoxes();clAOS();clAjaxChimp();clBackToTop();clGoogleMap();})();})(jQuery);