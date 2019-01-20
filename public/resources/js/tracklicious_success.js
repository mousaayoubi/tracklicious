$(document).ready(function() {
    var api_key = "c6d6c533633ac3e1bae24c739adbed04";

    let title = localStorage.getItem("songTitle");
    renderTracks(title);

    $(".btn").click(function(){
        event.preventDefault();
        let title = $(".form-control").val();
        renderTracks(title);
    });

    function renderTracks(title) {
        $.ajax({
            url: "https://ws.audioscrobbler.com/2.0/?method=track.search&track="+title+"&api_key="+api_key+"&format=json",
            success: function(result) {
                console.log("API connection is successfull");
                console.log(result);
                $("#results").empty();
                var result_obj = result;
                var resultsLength = result_obj.results.trackmatches.track.length;
                for (trackNumber=0; trackNumber < resultsLength; trackNumber++) {
                    $("#results").append(
                        '<a href=' + result_obj.results.trackmatches.track[trackNumber].url + ' target="_blank">' +
                        '<div class="row songs" id="songs">' +
                        '<div class="col-sm-1 play-icon">' +
                            '<i class="far fa-play-circle"></i>' +
                        '</div>' +
                        '<div class="col-sm-4 songs-title">' +
                        result_obj.results.trackmatches.track[trackNumber].name +
                        '</div>' +
                        '<div class="col-sm-3 songs-title">' +
                        result_obj.results.trackmatches.track[trackNumber].artist +
                        '</div>' +
                        '<div class="col-sm-2 songs-title" id="song-image">' +
                        '<img src='+result_obj.results.trackmatches.track[trackNumber].image[1]["#text"]+'>' +
                        '</div>' +
                        '<div class="col-sm-2 songs-title">' +
                        numeral(result_obj.results.trackmatches.track[trackNumber].listeners).format('0, 0') +
                        '</div>' +
                        '</div>' +
                        '</a>'
                        );
                }
            }
        });
    }
})