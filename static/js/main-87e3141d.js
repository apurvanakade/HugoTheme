/**
* @param {String} sParam the parameter whose value you need
*/
var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),sParameterName,i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : sParameterName[1];
      }
  }
};


/**
* @param {bool} animate if true sets a 1s animation
*/
var animateShadow = function(prevPageType, thisPageType) {
 $("body").addClass("animateShadow");

  if (thisPageType == 'list') {
      if ($("body").hasClass("flat")) $("body").removeClass("flat");
      $("body").addClass("raised");
  }
  else {
      if ($("body").hasClass("raised")) $("body").removeClass("raised");
      $("body").addClass("flat");
  }
}


/**
* appends the type of the page as a URL parameter to each link
* @param {String} thisPageType the type of this page, can be list or single
*/
var addPageTypeToHREFs = function(thisPageType) {

  $("a.crosslink").each(function() {
   var $this = $(this);
   var _href = $this.attr("href");
   $this.attr("href", _href + '?type=' + thisPageType);
});
}


var prevPageType = getUrlParameter('type');
var thisPageType = "";

$( document ).ready(function() {
  animateShadow(prevPageType, thisPageType);
  addPageTypeToHREFs(thisPageType);
});
