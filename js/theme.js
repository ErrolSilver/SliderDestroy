(function ($) {
  var $carousels = $('.carousel'),
    $carPlusThree = $('.plusThree'),
    $carMinusThree = $('.minusThree')
    $carItems = $('.carousel-inner'),
    $carIndicate = $('.carousel-indicators'),
    $carControls = $('.carousel-control');



  function slideNumber() {
    // Check carousels for their number of slides
    $carItems.each(function () {
      var children = $(this).find('.item').length,
        $parent = $(this).parent();

      // Add a class to carousels depending on how many slides
      if (children > 3) {
        $parent.addClass('plusThree');
      } else if (children <= 3) {
        $parent.addClass('minusThree');
      }
    });
  }

  function sideBySide() {
    if ($(window).width() > 768) {

      // If the window is larger than extra small screens, remove bootstrap carousel controls 
      $('.minusThree').removeClass('slide');
      $('.minusThree').children('.carousel-indicators').addClass('hidden');
      $('.minusThree .carousel-control').addClass('hidden');

      // Add class setting new slide width to display side-by-side
      $('.minusThree .carousel-inner .item').addClass('col-sm-4 active');

      // Display slideshow items side-by-side
      //$('.plusThree .carousel-inner .item').wrapInner('<div class="col-sm-4"></div>');

      // Prevent slideshow from running if above breakpoint
      $carousels.carousel('pause');

    } else {

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
    }
  }

  $(window).resize(function () {
    sideBySide();
  });

  slideNumber();
  sideBySide();
}(jQuery));
