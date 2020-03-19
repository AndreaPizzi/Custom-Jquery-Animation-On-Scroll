 /*********************************************** */
    /**** Check if element with class is in viewport */
    /*********************************************** */

$( document ).ready(function() {
  $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
    
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
    
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    checkonScreen();

    $('.entry-content').scroll(function(){
        checkonScreen();
    });

    function checkonScreen(){
        $( ".fadeOnScreen" ).each(function( index ) {
            if ($(this).isInViewport()) {
                $(this).addClass('fadeOnScreen_active');
                console.log('on screen');
            } else {
                $(this).removeClass('fadeOnScreen_active');
                console.log('out screen');
            }
        });
    }
});
