$(document).ready(function() {
  $("#ice-cream").submit(function(event) {
    event.preventDefault();

    const flavours = ["cherry", "chocolate", "rum raisin", "mint"];

    $("ul").empty();

    flavours.forEach(function(flavour) {
      $("ul").prepend("<li>" + flavour + "</li>");
    })
  });
});