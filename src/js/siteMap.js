
var visible = false;

function showSiteMap() {
  document.getElementById("siteMap").style.width = "100%";
  visible = true;
}

function hideSiteMap() {
  document.getElementById("siteMap").style.width = "0";
  visible = false;
}

var leftEdge = function(e) {
  if (e.pageX < 20) {
    $(window).off();
    if (visible) {
      hideSiteMap();
    }
    else {
      showSiteMap();
    }

    setTimeout(() => {
      $(window).on('mousemove', leftEdge);
    }, 500);
  }
};

$(window).on('mousemove', leftEdge);

$(document).keyup(function(e) {
  if (e.keyCode === 27) hideSiteMap();   // esc
});
