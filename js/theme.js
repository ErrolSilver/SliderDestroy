(function ($) {
  var $carousels = $('.carousel'),
    $carPlusThree = $('.plusThree'),
    $carMinusThree = $('.minusThree')
    $carItems = $('.carousel-inner'),
    $carIndicate = $('.carousel-indicators'),
    $carControls = $('.carousel-control');


  function sideBySide() {

    // Check carousels for their number of slides
    $carItems.each(function () {
      var children = $(this).find('.item').length,
        $parent = $(this).parent();

      // Add a class to carousels with more than 3 slides
      if (children > 3) {
        $parent.addClass('plusThree');
      } else if (children <= 3) {
        $parent.addClass('minusThree');
      }
    });

    if ($(window).width() > 768) {

      // If the window is larger than extra small screens, remove bootstrap carousel controls 
      $('.minusThree').removeClass('slide');
      $('.minusThree .carousel-indicators').addClass('hidden');
      $('.minusThree .carousel-control').addClass('hidden');

      // Add class setting new slide width to display side-by-side
      $('.minusThree .carousel-inner .item').addClass('col-sm-4 active');

      $('.plusThree .carousel-inner .item').wrapInner('<div class="col-sm-4"></div>');

      // Prevent slideshow from running if above breakpoint
      $carousels.carousel('pause');

      scrollSlides();
    }
  }

  function scrollSlides() {
    
  }

  $(window).resize(function () {
    if ($(window).width() < 768) {

      // Restore bootstrap controls if extra small screen size
      $carousels.addClass('slide');
      $carIndicate.removeClass('hidden');
      $carControls.removeClass('hidden');
      $carousels.removeClass('plusThree');

      // Remove side-by-side display
      $carItems.children('.item').removeClass('col-sm-4 active');

      // Starts slideshow from first item
      $carItems.children('.item:first-child').addClass('active');

      // Run slideshow when extra small screen
      $carousels.carousel('cycle');
    } else {
      sideBySide();
    }
  });

  sideBySide();
}(jQuery));
