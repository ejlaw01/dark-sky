var overlay;
// DarkSkyOverlay.prototype = new google.maps.OverlayView();

initMap = function () {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.500, lng: 238.000},
    zoom: 8,
    mapTypeId        : 'roadmap',
    streetViewControl: false,
    zoomControl      : false,
    panControl       : false,
    mapTypeControl   : false,
    styles : [
      {elementType: 'geometry', stylers: [{color: '#fff1a3'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#757da8'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#2539aa'}]},
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#000F55'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#000F55'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#000F55'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#000F55'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#000F55'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#000F55'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#8eddff'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#000F55'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#000F55'}]
      }
    ]
  });
};

// var bounds = new google.maps.LatLngBounds(
//            new google.maps.LatLng(62.281819, -150.287132),
//            new google.maps.LatLng(62.400471, -150.005608));
//
//        // The photograph is courtesy of the U.S. Geological Survey.
//        var srcImage = 'http://www.lightpollution.it/worldatlas/images/fig2.jpg' +
//            'javascript/examples/full/images/talkeetna.png';
//
//        // The custom USGSOverlay object contains the USGS image,
//        // the bounds of the image, and a reference to the map.
//        overlay = new USGSOverlay(bounds, srcImage, map);
//      }

exports.mapModule = initMap;
