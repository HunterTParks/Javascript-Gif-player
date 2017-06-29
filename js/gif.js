var apiKey = require('./../.env').apiKey;
var DisplayGif = require('./../js/gif-interface.js').DisplayGif;

function Giffy(){ //Work pls.k thnx.
}

// Giffy.prototype.GetGifs = function(gifferino) {
//   $.get('http://api.giphy.com/v1/gifs/search?q=' + gifferino + '&api_key=' + apiKey).then(function(response) {
//     DisplayGif(response);
//   }).fail(function(error){
//   console.log("Failing");
//   });
// };

exports.gifModule = Giffy;
