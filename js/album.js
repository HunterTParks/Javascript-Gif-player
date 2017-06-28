var apiKey = require('./../.env').apiKey;

Album = function(){
}

Album.prototype.getAlbums = function(artist) {
  $.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + artist + '&api_key=' + apiKey).then(function(response) {
    console.log(response);
  });
}

exports.albumModule = Album;
