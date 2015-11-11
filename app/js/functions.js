$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
});

//  Dropdown Mega Menu
//  $("#navbar-dealeron .dropdown-mega-menu a[href^='#ui__']").on('click', function(e) {
//      e.preventDefault();
//      var hash = this.hash;
//      $('html, body').stop().animate({
//          scrollTop: $(hash).offset().top
//      }, 1500, 'easeInOutExpo', function() {
//          window.location.hash = hash;
//      });
//  });

//  Easing
$("#navbar-main .navbar-sidebar-wrapper a[href^='#ui__']").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').stop().animate({
        scrollTop: $(hash).offset().top
    }, 1500, 'easeInOutExpo', function() {
        window.location.hash = hash;
    });
});
$("#toTop").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').stop().animate({
        scrollTop: $(hash).offset().top
    }, 1500, 'easeInOutExpo', function() {
        window.location.hash = hash;
    });
});

//  Open Nav Bar
$(document).ready(function(){
    $('[data-animate="icon-bar"]').click(function(){
        $(this).toggleClass('navbar-sidebar-is-open');
    });
});


//  Thank you Cody House ** start
//  https://codyhouse.co/demo/back-to-top/index.html
// browser window scroll (in pixels) after which the "back to top" link is shown
var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('#toTop');

//hide or show the "back to top" link
$(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('in') : $back_to_top.removeClass('in');
    if( $(this).scrollTop() > offset_opacity ) {
        $back_to_top.addClass('fade');
    }
});
//  Thank you Cody House ** end
