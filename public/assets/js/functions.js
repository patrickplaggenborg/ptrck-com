/**
 * Theme functions file.
 */
(function($) {
  "use strict";

  $(document).ready(function($){

    var $body = $('body');
    
    $('#sidebar-toggle').on( 'click', function(e) {
      e.preventDefault();
      $body.toggleClass('sidebar-open');
    });
    
    $('#nav-toggle').on( 'click', function(e) {
      e.preventDefault();
      $(this).next('#menu-container').slideToggle(400);
    });

    // Owl Carousel
    if( $.fn.owlCarousel !== undefined && $.fn.imagesLoaded !== undefined ) {
      $( '.owl-carousel' ).imagesLoaded(function() {  
        $( '.owl-carousel' ).owlCarousel({
          items: 1,
          margin: 0,
          loop: true,
          autoHeight: true,
          smartSpeed: 600,
          nav: true,
          dots: false,
          rtl: $('body').hasClass( 'rtl' ) ? true : false,
          navText : [ $('body').hasClass( 'rtl' ) ? '<i class="fa fa-angle-right"></i>' : '<i class="fa fa-angle-left"></i>', $('body').hasClass( 'rtl' ) ? '<i class="fa fa-angle-left"></i>' : '<i class="fa fa-angle-right"></i>' ]
        });
      });
    }

    // Full Width Caption Class
    $( '.wp-caption .size-nord-full-width' ).parents( '.wp-caption' ).addClass( 'full-width-caption' );
  });
})(jQuery);