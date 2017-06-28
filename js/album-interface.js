var Albums = require('./../js/album.js').albumModule;

var DisplayAlbum = function(response){
  console.log(response);
  $("#artist-display").empty();
  for(var i = 0; i <= response.topalbums.album.length; i++)
  {
    var test = response.topalbums.album[i].name.split('');
    if(test[0] === "w" && test[1] === "w"){
    } else if (response.topalbums.album[i].name === 'undefined'){
    } else if (response.topalbums.album[i].name === '(null)') {
    } else {
      $("#artist-display").append("<p>" + response.topalbums.album[i].name + "</p>");
    }

  }
};

$(document).ready(function(){
  var newAlbum = new Album();
  // console.log(newAlbum.name);

  $("#artistForm").submit(function(){
    event.preventDefault();
    var artist = $('#artist').val();
    newAlbum.GetAlbums(artist);
    // $("#artist-display").append("TESTING");
  });
});

exports.DisplayAlbum = DisplayAlbum;
