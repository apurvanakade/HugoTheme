function initSiteMap(Permalink) {
  $("#siteMapFrame").contents().find("#siteMap").find('a').each(function(){
    if ($(this).attr("href") == Permalink) {
      $(this).addClass("you_are_here");
    }
  });
}

function showSiteMap() {
  $("body").css("overflow-y","hidden");  
  $("#siteMapFrame").css("z-index","1");  
  $("#siteMapFrame").contents().find("#siteMap").css("overflow-y","auto");  
  $("#siteMapFrame").contents().find("#siteMap").css("opacity","1"); 
  $('#marker').html("<p>❮</p>");
  $('#marker').attr("href","javascript:hideSiteMap()");
}

function hideSiteMap() {
  $("body").css("overflow-y","auto");  
  $("#siteMapFrame").css("z-index","-1");  
  $("#siteMapFrame").contents().find("#siteMap").css("overflow-y","hidden");  
  $("#siteMapFrame").contents().find("#siteMap").css("opacity","0"); 
  $('#marker').html("<p>❯</p>");
  $('#marker').attr("href","javascript:showSiteMap()");
}

$(document).keyup(function(e) {
  if (e.keyCode === 27) hideSiteMap();   // esc
});

function hideSections(section){
  $("#siteMap").find('a.hideShowButton').each(function(){
    if(this.getAttribute( "section" ) == section) {
      $(this).html("[+]");
      $(this).attr("href","javascript:showSections('"+section+"');");
    }
  });
  
  $("#siteMap").find('div[section]').each(function () {     
    if(this.getAttribute( "section" ) == section) {
      $(this).css("display", "none");
    }
  });
}

function showSections(section){
  $("#siteMap").find('a.hideShowButton').each(function(){
    if(this.getAttribute( "section" ) == section) {
      $(this).html("[–]");
      $(this).attr("href","javascript:hideSections('"+section+"');");
    }
  });
  
    $("#siteMap").find('div[section]').each(function () {     
    if(this.getAttribute( "section" ) == section) {
      $(this).css("display", "");
    }
  });
}

function showAllSections(){
  $("#siteMap").find('a.hideShowButton[section]').each(function(){  
    var section = this.getAttribute("section");
    showSections(section);
  });
}

function hideAllSections(){
  $("#siteMap").find('a.hideShowButton[section]').each(function(){ 
    var section = this.getAttribute("section");
    hideSections(section);
  });
}