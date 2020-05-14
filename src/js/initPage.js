$( document ).ready(function() {
  // This function loads all the "post-its" on a list page gradually.
  $('#mainGrid').contents().each(function (index) {
    setTimeout(() => {
      $(this).css("opacity","1");
    }, Math.log(index)*350);
  });
});

$( document ).ready(function() {
  // This function is useful for the single page. It gives a fade in effect to the page on load.
  $('body').css("opacity","1");
});

window.onscroll = () => {
  // This makes the scrollTopBtn visible on enough scrolling.
    if ($('#scrollTopBtn').length > 0) {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
          document.getElementById("scrollTopBtn").style.opacity = "1";
      } else {
          document.getElementById("scrollTopBtn").style.opacity = "0";
      }
    }
}
