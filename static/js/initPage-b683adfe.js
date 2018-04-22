// $( document ).ready(function() {  
//   $('#footer-credits').find('a').each(function() {
//     image = document.createElement('img');
//     src1 = "https://apurvnakade.github.io/blog/images/icons/white/" + $(this).attr("data");
//     src2 = "https://apurvnakade.github.io/blog/images/icons/black/" + $(this).attr("data");
// 
//     this.append(image);
//     image.setAttribute("src",src1);
//     image.setAttribute("onmouseover","this.src = '" + src2 + "'");
//     image.setAttribute("onmouseout","this.src = '" + src1 + "'");
//   });
// });


$( document ).ready(function() {
  // This functions loads all the "post-its" on a list page gradually.
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
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("scrollTopBtn").style.opacity = "1";
    } else {
        document.getElementById("scrollTopBtn").style.opacity = "0";
    }
}
