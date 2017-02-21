$(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $("#old-enough").show();
  } else {
    $("#too-young").show();
  }
});
