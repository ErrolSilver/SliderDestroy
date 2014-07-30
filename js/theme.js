(function ($) {
  console.log("Hello");

  function sideBySide() {
    if ($(window).width() > 768) {
      $('#sliderDestroy').removeClass('slide');
      $('.carousel-indicators').addClass('hidden');
      $('.carousel-control').addClass('hidden');
    }
  }

  $(window).resize(function () {
    console.log ($(window).width());
    if ($(window).width() < 768) {
      $('#sliderDestroy').addClass('slide');
      $('.carousel-indicators').removeClass('hidden');
      $('.carousel-control').removeClass('hidden');
    } else {
      sideBySide();
    }
  });

sideBySide();
}(jQuery));
