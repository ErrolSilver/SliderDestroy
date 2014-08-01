(function ($) {
  var $carousels = $('.carousel'),
    $carPlusThree = $('.plusThree'),
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
        $parent.addClass('plusThree')
      }
    });

    if ($(window).width() > 768) {

      // If the window is larger than extra small screens, remove bootstrap carousel controls 
      $carousels.removeClass('slide');
      $carIndicate.addClass('hidden');
      $carControls.addClass('hidden');

      // Add class setting new slide width to display side-by-side
      $carItems.children('.item').addClass('col-sm-4 active');

      // Prevent slideshow from attempting to run if above breakpoint
      $carousels.carousel('pause');

    }
  }

  function checkSlides() {

  }

  $(window).resize(function () {
    if ($(window).width() < 768) {

      // Restore bootstrap controls if extra small screen size
      $carousels.addClass('slide');
      $carIndicate.removeClass('hidden');
      $carControls.removeClass('hidden');
      $carousels.removeClass('plusThree');
      $carItems.children('.item').removeClass('col-sm-4 active');
      $carItems.children('.item:first-child').addClass('active');

      $carousels.carousel('cycle');
    } else {
      sideBySide();
    }
  });

  sideBySide();
  checkSlides();
}(jQuery));
