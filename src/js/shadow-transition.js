  $( document ).ready(function() {
    if ($("body").hasClass("flat2raised")) {
       $("body").removeClass("flat2raised");
       $("body").addClass("raised2flat");
    }
    else if ($("body").hasClass("raised2flat")) {
      $("body").removeClass("raised2flat");
      $("body").addClass("flat2raised");
   }
  });
