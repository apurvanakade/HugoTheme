$( document ).ready(function() {
  $('#footer-credits').find('a').each(function() {
    image = document.createElement('img');
    src1 = "http://apurvnakade.github.io/blog/images/icons/white/" + $(this).attr("data");
    src2 = "http://apurvnakade.github.io/blog/images/icons/black/" + $(this).attr("data");

    this.append(image);
    image.setAttribute("src",src1);
    image.setAttribute("onmouseover","this.src = '" + src2 + "'");
    image.setAttribute("onmouseout","this.src = '" + src1 + "'");
  });
});
