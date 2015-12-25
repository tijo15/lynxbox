
   (function($) {
 
  $.fn.lynxbox = function(options) {

   var
   windowHeigth = window.innerHeight || $(window).height(), // make it work on ipad & android
   windowWidth  = window.innerWidth  || $(window).width();
   // Establish our default settings
        var settings = $.extend({
            borderColor        : null,
            borderStyle        : null,
            borderWidth        : null
        }, options);


  if ( settings.borderColor ) {
        $('.images').find('img').css( 'borderColor', settings.borderColor );
    }

  if ( settings.borderStyle ) {
        $('.images').find('img').css( 'borderStyle', settings.borderStyle );
    }

  if ( settings.borderWidth ) {
        $('.images').find('img').css( 'borderWidth', settings.borderWidth );
    }

     $('.images').find('img').click(function () {

    // Display the overlay
    $('<div id="overlay"></div>')
      .css('opacity', '0')
      .animate({'opacity' : '0.5'}, 'slow')
      .appendTo('body');

    // Create the lightbox container
    $('<div id="lightbox"></div>')
      .hide()
      .appendTo('body');
     
   // Display the image on load
    $('<img>')
      .attr('src', $(this).attr('src'))
       .load(function () {
        displaybox();
       })
    
      .css({
        'max-height': windowHeigth, 
        'max-width':  windowWidth
      })

          .click(function () {
                        removebox();
                    })
                    .appendTo('#lightbox');
              //  return false;
   });
     
    function displaybox() {
        $('#lightbox')
          .css({
            'top':  (windowHeigth - $('#lightbox').height()) / 2,
            'left': (windowWidth  - $('#lightbox').width())  / 2
          })
          .fadeIn();
          if ( settings.borderColor ) {
                $('#lightbox').find('img').css( 'borderColor', settings.borderColor );
            }

          if ( settings.borderStyle ) {
                $('#lightbox').find('img').css( 'borderStyle', settings.borderStyle );
            }
    
        if ( settings.borderWidth ) {
                $('#lightbox').find('img').css( 'borderWidth', settings.borderWidth );
            }
      }
     // .appendTo('#lightbox');
      
     function removebox(){ // Remove it all on click
      $('#overlay, #lightbox').click(function() {
        $('#overlay, #lightbox').remove();
      });
    }
};

      console.log('Lightbox is Ready');

}) (jQuery);
