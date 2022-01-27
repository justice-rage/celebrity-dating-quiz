$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    const favoriteFood = $("select#favorite-food").val();

    if (favoriteFood === "pancakes") {
      alert("Dwayne Johnson");
    } else if (favoriteFood === "buffalo-wings") {
      alert("Kevin Hart");
    } else {
      alert("Adam Driver");
    }

    // favorite food auto reloads to default 
    // buffallo chicken if below code isn't active
    event.preventDefault();
  });
});