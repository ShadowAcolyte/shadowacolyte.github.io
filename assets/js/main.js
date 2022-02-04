$(function () {
  $(".parallax").scrolly({ bgParallax: true });

  $(window).on("load", function () {
    consoleBlink();
    $("#banner")
      .hide()
      .fadeIn(2000, function () {
        consoleText(["hello, world!", "i'm shadow_acolyte."]);
      });
  });

  /* smooth scrolling */
  $("a[href]").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      1700
    );
  });
});
