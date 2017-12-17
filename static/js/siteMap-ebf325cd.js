
function showSiteMap() {
  document.getElementById("siteMap").style.width = "100%";
}

function hideSiteMap() {
  document.getElementById("siteMap").style.width = "0%";
}

$(window).on('mousemove', function(e) {
  if (e.pageX < 20) showSiteMap();
});
