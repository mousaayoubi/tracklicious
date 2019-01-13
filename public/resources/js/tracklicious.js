$(document).ready(function() {
    console.log("Ready");
    $.ajax({
        url: "http://ws.audioscrobbler.com/2.0/?method=track.search&track="+title+"&api_key="+api_key+"&format=json", 
        success: function(result){
            console.log("API connection is successfull");
        }
    });
});

var api_key = "c6d6c533633ac3e1bae24c739adbed04";
var title = $(".form-control").val();
console.log(api_key);
console.log(title);

$(".btn").click(function(){
    
});