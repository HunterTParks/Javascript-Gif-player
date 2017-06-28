(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "0b10618a5da07f7cb82f1cd76c1d29ba"

},{}],2:[function(require,module,exports){
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

},{"./../js/album.js":3}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/album-interface.js":2}],4:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"./../js/album.js":3,"dup":2}]},{},[4]);
