/* Seriously need to improve this file */


var siteMap;
//This variable is of use only when called by the parent page.
function initSiteMap(Permalink) {
  //This function is called by the parent page to collapse the unwanted sections and mark the relevant pages pink.
  var uncollapsed_sections = [];
  siteMap = $("#siteMapFrame").contents().find("#siteMap");
  
  siteMap.find('a').each(function(){
    if ($(this).attr("href") == Permalink) {
      $(this).addClass("you_are_here");
      $(this).removeAttr("href");
      if($(this).parent().attr('section'))
        uncollapsed_sections.push($(this).parent().attr('section'));
      if($(this).prev().attr('section'))
        uncollapsed_sections.push($(this).prev().attr('section'));
    }
  });
  
  if(uncollapsed_sections.length > 0) {
    siteMap.find('a.hideShowButton[section]').each(function(){ 
      var section = this.getAttribute("section");
      siteMap.find('a.hideShowButton').each(function(){
        if(this.getAttribute( "section" ) == section) {
          $(this).html("[+]");
          $(this).attr("href","javascript:showSections('"+section+"');");
        }
      });
      
      siteMap.find('div[section]').each(function () {     
        if(this.getAttribute( "section" ) == section) {
          $(this).css("display", "none");
        }
      });
    });
    
    for (i = 0; i < uncollapsed_sections.length; i++) {
      var section = uncollapsed_sections[i];
      siteMap.find('a.hideShowButton').each(function(){
        if(this.getAttribute( "section" ) == section) {
          $(this).html("[–]");
          $(this).attr("href","javascript:hideSections('"+section+"');");
        }
      });
      
        siteMap.find('div[section]').each(function () {     
        if(this.getAttribute( "section" ) == section) {
          $(this).css("display", "");
        }
      });
    }
  }
}

function showSiteMap() {
  $("body").css("overflow-y","hidden");  
  $("#siteMapFrame").css("z-index","1");  
  siteMap.css("overflow-y","auto");  
  siteMap.css("opacity","1"); 
  $('#marker').html("<p>❮</p>");
  $('#marker').attr("href","javascript:hideSiteMap()");
}

function hideSiteMap() {
  $("body").css("overflow-y","auto");  
  $("#siteMapFrame").css("z-index","-1");  
  siteMap.css("overflow-y","hidden");  
  siteMap.css("opacity","0"); 
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