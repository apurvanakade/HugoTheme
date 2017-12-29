
var visible = false;

function showSiteMap() {
  $("#siteMap").css("width","100%");
  $("#siteMap").css("overflow-y","auto");  
  $("#marker").css("left","100%");  
  visible = true;
}

function hideSiteMap() {
  $("#siteMap").css("width","1%");
  $("#siteMap").css("overflow-y","hidden");  
  $("#marker").css("left","0%");  
  visible = false;
}

var leftEdge = function(e) {
  if (e.pageX < 20) {
    $(window).off('mousemove');
    if (visible) 
      hideSiteMap();
    else 
      showSiteMap();

    setTimeout(() => {
      $(window).on('mousemove', leftEdge);
    }, 500);
  }
};

$(window).on('mousemove', leftEdge);

$(document).keyup(function(e) {
  if (e.keyCode === 27) hideSiteMap();   // esc
});
