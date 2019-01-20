$(document).ready(function() {
  $(".btn").click(function() {
    $(".btn").keypress(function(event) {
      if (event.which == 13) {
        localStorage.setItem("songTitle", $(".form-control").val());
        event.preventDefault();
        window.open("./success.html", "_self");
        return false;
      }
    });
    localStorage.setItem("songTitle", $(".form-control").val());
    event.preventDefault();
    window.open("./success.html", "_self");
  });
});
