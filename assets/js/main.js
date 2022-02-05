$(function () {
    /* parallax effect */
  $(".jarallax").jarallax({
    speed: 0.5,
  });

  /* banner fade in and console text effect */
  $(window).on("load", function () {
    consoleBlink();
    $("#banner")
      .hide()
      .fadeIn(3000, function () {
        consoleText(["hello, world.", "i'm shadow_acolyte."]);
      });
  });

  /* smooth scrolling */
  $(".arrow-scroll").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      1700
    );
  });
});
