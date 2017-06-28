var Album = require('./../js/Album.js').albumModule;


$(document).ready(function(){
  var newAlbum = new Album();
  var artist = "Lady Gaga";
  newAlbum.getAlbums(artist);
});
