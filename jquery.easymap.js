/*
**********************************************************
EasyMap.js | takes the pain and time out of working with Google Maps

Version:		v1.1.2
Release:		July 7, 2014
Site:			http://mike-zarandona.github.io/EasyMap.js
Author:			Mike Zarandona | http://mikezarandona.com | @mikezarandona

Requirements:	jQuery, <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>

Usage:

	$('#map').easyMap({
		locationData: [
			{
				"name": "Location 1",
				"latLng": [34.010974, -84.579449],
				"address": "123 Fake Street, Anytown AB 01234",
				"content": "Location 1 description"
			},
			{
				"name": "Location 2",
				"latLng": [33.790383, -84.286035],
				"address": "234 Fake Avenue, Anycity BC 12345",
				"content": "Location 2 description"
			}
		],

		mapCenter: [33.748995, -84.387982],
		zoom: 11,

		snazzyMapsStyles: [],

		scrollwheel: false,
		disableDefaultUI: true,
		disableDoubleClickZoom: true,
		draggable: false,

		selectElement: '',
		enableLinks: false,

		markerIcon: '/path/to/marker-icon@2x.png',
		markerIconSize: [40, 65]
	});

**********************************************************
*/

var map,
	markers;

(function ($, undefined, map) {
	$.fn.easyMap = function (options) {

		/* Override defaults with specified options. */
		options = $.extend({}, $.fn.easyMap.options, options);

		/* Options loaded; run-once items */

		/* Select interactions */
		if ( options.selectElement !== '' ) {
			$(options.selectElement).on('change', function() {
				var index = $(this)[0].selectedIndex;
				easyMapMarker(index);
			});
		}


		/* Build the map(s) */
		this.each(function () {

			// Initialize the map
			var mapOptions = {

				// Zoom level (always required)
				zoom: options.zoom,

				// Center latitude / longitude (always required)
				center: new google.maps.LatLng(options.mapCenter[0], options.mapCenter[1]),

				// UI Controls
				disableDefaultUI: options.disableDefaultUI,
				scrollwheel: options.scrollwheel,
				disableDoubleClickZoom: options.disableDoubleClickZoom,
				draggable: options.draggable,

				// Styles
				styles: options.snazzyMapsStyles
			};


			// Get the map element
			var mapElement = document.getElementById( $(this).attr('id') );

			// Create the Google Map with already defined options
			map = new google.maps.Map(mapElement, mapOptions);

			// Create the infoWindow object
			var infoWindow = new google.maps.InfoWindow(), marker, i;

			// Create new position object
			var position;

			// New array to hold the marker objects
			markers = [];


			// The Loop
			for (var i = 0; i < options.locationData.length; i++) {

				position = new google.maps.LatLng( options.locationData[i].latLng[0], options.locationData[i].latLng[1] );

				// Set the markers, based on if they have a custom marker or not
				if (options.markerIcon !== '') {
					var markerIconBuild = 'new google.maps.MarkerImage(' + options.markerIcon + ', null, null, null, new google.maps.Size(' + options.markerIconSize[0] + ',' + options.markerIconSize[1] + '))';

					markers[i] = new google.maps.Marker({
						position: position,
						icon: markerIconBuild,
						map: map
					});
				}
				else {
					markers[i] = new google.maps.Marker({
						position: position,
						map: map
					});
				}

				marker = markers[i];

				// Allow each marker to have an info window    
				google.maps.event.addListener(marker, 'click', (function(marker, i) {
					return function() {
						var contentBuild = '<h2>' + options.locationData[i].name + '</h2><p>' + options.locationData[i].content + '</p>';

						if (options.locationData[i].address !== undefined) {
							contentBuild += '<p><a href="https://www.google.com/maps/preview?daddr=' + options.locationData[i].address + '" target="_blank">Directions</a></p>';
						}

						infoWindow.setContent( contentBuild );
						infoWindow.open(map, markers[i]);
						map.panTo(marker.position);
					};
				})(marker, i));
			}
		});



		/* Link interactions */
		if (options.enableLinks) {
			$('.easymap').on('click', function() {
				google.maps.event.trigger(markers[$(this).attr('data-easymap-marker')-1], 'click');
			});
		}



		/* Helper function to pan to markers/positions on the created map element(s) */
		function easyMapMarker(index) {
			if (index === 0) {
				map.panTo( new google.maps.LatLng(options.mapCenter[0], options.mapCenter[1]) );
			}
			else if (index <= options.locationData.length) {
				map.panTo( new google.maps.LatLng(options.locationData[(index-1)].latLng[0], options.locationData[(index-1)].latLng[1]) );
			}
		}
	};





	// Default the defaults
	$.fn.easyMap.options = {
		locationData: 					[],

		mapCenter:						[33.748995, -84.387982],
		zoom:							11,

		snazzyMapsStyles:				[],

		scrollwheel:					false,
		disableDefaultUI:				true,
		disableDoubleClickZoom:			false,
		draggable:						true,

		selectElement:					'',
		enableLinks:					false,

		markerIcon:						'',
		markerIconSize: 				[]
	};
})(jQuery);
