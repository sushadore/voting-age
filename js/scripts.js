$(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $("#old-enough").show();
  } else if (age===18) {
    $("#just-18").show();
  }
  else {
    $("#too-young").show();
  }
});
