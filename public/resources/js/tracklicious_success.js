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
            console.log("API connection is successfull");
            console.log(result);
            var result_obj = result;
            var n = result_obj.results.trackmatches.track.length;
            console.log(n);
            for (i=0; i < n; i++) {
                $("#results").append(
                    '<a href=' + result_obj.results.trackmatches.track[i].url + ' target="_blank">' +
                    '<div class="row songs" id="songs">' +
                    '<div class="col-sm-1 play-icon">' +
                        '<i class="far fa-play-circle"></i>' +
                    '</div>' +
                    '<div class="col-sm-4 songs-title">' +
                    result_obj.results.trackmatches.track[i].name +
                    '</div>' +
                    '<div class="col-sm-3 songs-title">' +
                    result_obj.results.trackmatches.track[i].artist +
                    '</div>' +
                    '<div class="col-sm-2 songs-title" id="song-image">' +
                    '<img src='+result_obj.results.trackmatches.track[i].image[1]["#text"]+'>' +
                    '</div>' +
                    '<div class="col-sm-2 songs-title">' +
                    numeral(result_obj.results.trackmatches.track[i].listeners).format('0, 0') +
                    '</div>' +
                    '</div>' +
                    '</a>'
                    );
            }
        }
    });
})