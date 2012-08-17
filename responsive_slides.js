(function ($) {

  Drupal.behaviors.responsive_slides = {
    attach: function (context) {
      $(".rslides").responsiveSlides({
        auto: true,             // Boolean: Animate automatically, true or false
        speed: 1000,            // Integer: Speed of the transition, in milliseconds
        timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
        pager: false,           // Boolean: Show pager, true or false
        nav: true,             // Boolean: Show navigation, true or false
        random: false,          // Boolean: Randomize the order of the slides, true or false
        pause: true,           // Boolean: Pause on hover, true or false
        pauseControls: false,   // Boolean: Pause when hovering controls, true or false
        prevText: "Previous",   // String: Text for the "previous" button
        nextText: "Next",       // String: Text for the "next" button
        maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
        controls: "",           // Selector: Where controls should be appended to, default is after the 'ul'
        namespace: "rslides",   // String: change the default namespace used
        before: function(){},   // Function: Before callback
        after: function(){}     // Function: After callback
      });
            
    }
  }
  
})(jQuery);