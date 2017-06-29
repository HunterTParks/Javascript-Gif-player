var Giffy = require('./../js/gif.js').gifModule;
var Dog = require('./../js/dog.js').DogModule;

$(document).ready(function(){
  var newDog = new Dog("bark");
  $("#gifForm").submit(function(){
    event.preventDefault();
    var search = $('#gif').val();
    newDog.GetGifs(search);
  });
});
