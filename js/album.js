var apiKey = require('./../.env').apiKey;
var DisplayAlbum = require('./../js/album-interface.js').DisplayAlbum;

Album = function(){
}

Album.prototype.GetAlbums = function(artist) {
  $.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + artist + '&api_key=' + apiKey + '&format=json').then(function(response) {
    DisplayAlbum(response);
  }).fail(function(error){
  console.log("Failing");
  });
};

exports.albumModule = Albums;
