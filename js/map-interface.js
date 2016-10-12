var apiKey = require('./../.env').apiKey;
var initMap = require('./../js/map.js').mapModule;

$(function(){
  $("head").append('<script src="https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&callback=initMap" async defer></script>');
});
