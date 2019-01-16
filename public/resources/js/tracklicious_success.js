$(document).ready(function() {
    var title = localStorage.getItem("songTitle");
    console.log(title);
    var api_key = "c6d6c533633ac3e1bae24c739adbed04";
    renderTracks();
    function renderTracks() {
        console.log("I'm activated");
    };
    $.ajax({
        url: "https://ws.audioscrobbler.com/2.0/?method=track.search&track="+title+"&api_key="+api_key+"&format=json",
        success: function(result) {
            console.log(result);
            var newResult = JSON.stringify(result);
            $(".ajax_results").append(newResult);
        }
    });
})