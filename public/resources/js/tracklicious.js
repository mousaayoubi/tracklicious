$(document).ready(function() {
    $(".btn").click(function() {
        localStorage.setItem("songTitle", $(".form-control").val());
        event.preventDefault();
        window.open("./success.html", "_self");
    })
})