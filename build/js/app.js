(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "0b10618a5da07f7cb82f1cd76c1d29ba"

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

Album = function(){
}

Album.prototype.getAlbums = function(artist) {
  $.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + artist + '&api_key=' + apiKey).then(function(response) {
    console.log(response);
  });
}

exports.albumModule = Album;

},{"./../.env":1}],3:[function(require,module,exports){
var Album = require('./../js/Album.js').albumModule;


$(document).ready(function(){
  var newAlbum = new Album();
  var artist = "Lady Gaga";
  newAlbum.getAlbums(artist);
});

},{"./../js/Album.js":2}]},{},[3]);
