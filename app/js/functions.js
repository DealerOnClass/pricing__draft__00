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
$("#navbar-main .navbar-sidebar-wrapper a[href^='#ui__']").on('click', function(e) {
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
