//
//  Enable Tooltips && Popovers for demo
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
});

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
//-------------------------------------
//      $("#toTop").on('click', function(e) {
//          e.preventDefault();
//          var hash = this.hash;
//          $('html, body').stop().animate({
//              scrollTop: $(hash).offset().top
//          }, 1500, 'easeInOutExpo', function() {
//              window.location.hash = hash;
//          });
//      });
//-------------------------------------

//
//
//  Thank you Cody House ** start
//  https://codyhouse.co/demo/back-to-top/index.html
// browser window scroll (in pixels) after which the "back to top" link is shown
//-------------------------------------
//      var offset = 300,
//          //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
//          offset_opacity = 1200,
//          //duration of the top scrolling animation (in ms)
//          scroll_top_duration = 700,
//          //grab the "back to top" link
//          $back_to_top = $('#toTop');
//-------------------------------------

//hide or show the "back to top" link
//-------------------------------------
//      $(window).scroll(function(){
//          ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('in') : $back_to_top.removeClass('in');
//          if( $(this).scrollTop() > offset_opacity ) {
//              $back_to_top.addClass('fade');
//          }
//      });
//-------------------------------------
//  Thank you Cody House ** end

////////////////////////////////////////
//
//  Panel Wizard
//
//  Step through panel wizard
$("[data-toggle='panel-wizard__next']").on("click", function() {
    $(this).closest(".panel-collapse").collapse('hide');
    $(this).closest(".panel.panel-wizard").next(".panel").children(".panel-collapse").collapse('show');
});
$("[data-toggle='panel-wizard__prev']").on("click", function() {
    $(this).closest(".panel-collapse").collapse('hide');
    $(this).closest(".panel.panel-wizard").prev(".panel").children(".panel-collapse").collapse('show');
});
$("[data-toggle='panel-wizard__done']").on("click", function() {
    $(this).closest(".panel-collapse").collapse('hide');
});
//  Set icon default && active state if open
$(document).ready( function() {
    $(".panel-wizard .panel-collapse.in").prev(".panel-heading").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    $(".panel-wizard .panel-collapse.in").prev(".panel-heading").addClass("current");
});
//  Toggle accordion icon && active state
$(".panel-wizard").on("show.bs.collapse", function() {
    $(this).find(".panel-heading .fa").removeClass("fa-plus").addClass("fa-minus");
    $(this).find(".panel-heading").addClass("current");
});
$(".panel-wizard").on("hide.bs.collapse", function() {
    $(this).find(".panel-heading .fa").removeClass("fa-minus").addClass("fa-plus");
    $(this).find(".panel-heading").removeClass("current");
});
////////////////////////////////////////
//
//  Offcanvas
//
$(document).ready( function() {
    UpdateDimensions();
    UpdateSidebar();
});
$(window).resize( function() {
    UpdateDimensions();
});
function UpdateDimensions() {
    var navHeight        = $('[oncanvas-nav]').height();
    var windowHeight     = $(window).height();
    var windowWidth      = $(window).width();
    var adjustedHeight   = windowHeight - navHeight;

    $('[offcanvas-set-height="window"]').css("height", windowHeight);
    $('[offcanvas-set-height="oncanvas-nav"]').css("height", adjustedHeight);
    $('[offcanvas-set-width="window"]').css("width", windowWidth);
    $('[offcanvas-set-top="oncanvas-nav"]').css("top", navHeight);

    var searchWidth      = $('#navbar-search').outerWidth();
    var profileWidth     = $('#navbar-profile').outerWidth();
    var calculatedWidth  = windowWidth - ( searchWidth + profileWidth );

    $('#navbar-search-form-input').css("width", calculatedWidth);
};
$('#navbar-search-form').on('shown.bs.collapse', function() {
    $('#navbar-search-form-input').focus();
});
function UpdateSidebar() {
    var windowWidth      = $(window).width();

    if (windowWidth < 767) {
        $('#navbar-sidebar-parent').addClass('hidden-xs');
        $('#navbar-sidebar').collapse('hide');
        $('#navbar-sidebar-link').removeClass('active');
        $('#navbar-sidebar-icon').removeClass('fa-remove').addClass('fa-navicon');
    } else {
        $('#navbar-sidebar-parent').removeClass('hidden-xs');
        $('#navbar-sidebar').collapse('show');
        $('#navbar-sidebar-link').addClass('active');
        $('#navbar-sidebar-icon').removeClass('fa-navicon').addClass('fa-remove');
    };
};
$('#navbar-sidebar-link').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    if ( $('#navbar-sidebar-icon').hasClass('fa-navicon')) {
        $('#navbar-sidebar-parent').removeClass('hidden-xs');
        $('#navbar-sidebar-icon').removeClass('fa-navicon').addClass('fa-remove');
    } else {
        $('#navbar-sidebar-icon').addClass('fa-navicon').removeClass('fa-remove');
    };
});
////////////////////////////////////////
//
//  Notify Animation Control
//
$('.notify-link').on('click', function() {
    $(this).find(".notify-alert").remove();
});
//  ////////////////////////////////////////
//  //
//  //  Navbar Help
//  //
//  $('#navbar-profile-collapse').on('show.bs.collapse', function() {
//      $('#navbar-profile').addClass('active');
//  });
//  $('#navbar-profile-collapse').on('hide.bs.collapse', function() {
//      $('#navbar-profile').removeClass('active');
//  });
