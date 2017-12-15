/**
*This needs to be executed really early otherwise there is a flicker on the screen.
*It's currently placed inside body and it might crash as DOM isn't fully loaded.
*Needs an improvement.
*/

thisPageType = ($("body").hasClass("list-page")) ? 'list' : 'single';
if (!prevPageType) {
  if (thisPageType == 'list') {
    $("body").addClass("flat");
  }
  else {
    $("body").addClass("raised");
  }
}
else {
  if (prevPageType == 'list') {
    $("body").addClass("raised");
  }
  else  {
        console.log("Should be here first");
  $("body").addClass("flat");
  }
}
