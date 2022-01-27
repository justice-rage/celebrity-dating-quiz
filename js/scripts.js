$(document).ready(function() {
  $("form#dating-quiz").submit(function(event) {
    const food = ($("input#favorite-food").val());
    if (food) {

      if ( food == "Pancakes"){
        celebrity = "Dwayne Johnson"
      } else if (food == "Rotisserie Chicken") {
        celebrity = "Adam Driver"
      } else {
        celebrity = "Kevin Hart"
      }

  // User Input Logic
  $("#match").submit(function(event) {
    event.preventDefault();
    $(".celebrity").text(celebrity);
  });
      // $("#celebrity").text(celebrity);
      // $("#match").show();
    });
});