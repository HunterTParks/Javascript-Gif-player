var apiKey = require('./../.env').apiKey;

function Dog(bark){
  this.bark = bark;
}

Dog.prototype.GetGifs = function(gifferino) {
  var i = Math.floor((Math.random() * 100) + 1);
  $.get('http://api.giphy.com/v1/gifs/search?q=' + gifferino + '&api_key=' + apiKey + '&limit=100').then(function(response) {
    $("#gif-display").empty();
    $("#gif-display").append('<img src = "' + response.data[i].images.original.url + '">');
  }).fail(function(error){
    console.log('tryagain');
    $("#gif-display").append('<img src = "http://cdn.xl.thumbs.canstockphoto.com/canstock28723899.jpg">');
  });
};
exports.DogModule = Dog;
