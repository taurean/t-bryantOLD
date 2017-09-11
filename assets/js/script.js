$(document).ready(function() {
  var JSONurl = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=taurean_&api_key=48bb9c8d732085945548a187b7fe994c&format=json";
  $.getJSON(JSONurl, function(data) {
    var artist = data.recenttracks.track[0].artist["#text"];
    var url = data.recenttracks.track[0]["url"];
    var name = data.recenttracks.track[0]["name"];

    var songLink = 'was ' + '<a href="' + url + '">'+ name + '</a>';
    $('#last-fm').html(songLink + ' by ' + artist + '.');
  });
});
