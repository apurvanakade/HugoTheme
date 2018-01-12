$( document ).ready(function() {
  $('#footer-credits').find('a').each(function() {
    image = document.createElement('img');
    src1 = "https://apurvnakade.github.io/blog/images/icons/white/" + $(this).attr("data");
    src2 = "https://apurvnakade.github.io/blog/images/icons/black/" + $(this).attr("data");

    this.append(image);
    image.setAttribute("src",src1);
    image.setAttribute("onmouseover","this.src = '" + src2 + "'");
    image.setAttribute("onmouseout","this.src = '" + src1 + "'");
  });
});

$( document ).ready(function() {
  $('#mainGrid').contents().each(function (index) {     
    setTimeout(() => {
      $(this).css("opacity","1");
    }, Math.log(index)*350);
  });
});

$( document ).ready(function() {
  $('body').css("opacity","1");
});