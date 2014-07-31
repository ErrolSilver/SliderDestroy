(function ($) {
  var $carousels = $('.carousel'),
    $carItems = $('.carousel-inner')
    $carIndicate = $('.carousel-indicators'),
    $carControls = $('.carousel-control');

    console.log($carItems.children('.item').length);
  function sideBySide() {
    if ($(window).width() > 768 && $carousels.children('.item').length < 3) {
      $carousels.removeClass('slide');
      $carIndicate.addClass('hidden');
      $carControls.addClass('hidden');
      $carItems.children('.item').addClass('threeSlides');
      $carousels.carousel('pause');
    }
  }

  function checkSlides() {
    if ($carItems.children('.item').length > 3) {
      $(this).children('.item').each(function () {
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 2; i++) {
          next = next.next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
        }
      });
    }
  }

  $(window).resize(function () {
    if ($(window).width() < 768) {
      $carousels.addClass('slide');
      $carIndicate.removeClass('hidden');
      $carControls.removeClass('hidden');
      $carousels.carousel('cycle');
    } else {
      sideBySide();
    }
  });

  sideBySide();
  checkSlides();
}(jQuery));
