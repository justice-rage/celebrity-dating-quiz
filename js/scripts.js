$(document).ready(function() {
  $("form#dating-quiz").submit(function(event) {
    const food = $("input#favorite-food").val();

      if ( food === "Pancakes"){
        const celebrity = "Dwayne Johnson"
      } else if (food === "rotisserie-chicken") {
        const celebrity = "Adam Driver"
      } else {
        const celebrity = "Kevin Hart"
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