/*
**********************************************************
EasyMap.js | takes the pain and time out of working with Google Maps

Version:		v1.0
Release:		January 29, 2014
Site:			http://mike-zarandona.github.io/EasyMap.js
Author:			Mike Zarandona | http://mikezarandona.com | @mikezarandona

Requirements:	jQuery, <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>

Usage:			On document ready:

				$('#map').easyMap({
					mapCenter:					[33.748995, -84.387982],
					zoom:						11,

					locationData: [
						{
							"name": "Location 1",
							"latLng": [34.010974, -84.579449],
							"content": "Location 1 description."
						},
						{
							"name": "Location 2",
							"latLng": [33.790383, -84.286035],
							"content": "Location 2 description."
						}
					],

					snazzyMapsStyles:			[...],

					scrollwheel: 				false,
					disableDefaultUI: 			true,
					disableDoubleClickZoom: 	true,
					draggable: 					false,

					markerIcon:					'/sites/somesitecom/exceptions/stylesheets/images/map-pin.png'
				});

**********************************************************
*/

(function ($, undefined) {
	$.fn.easyMap = function (options) {

		// Override defaults with specified options.
		options = $.extend({}, $.fn.easyMap.options, options);

		/* Options loaded; run-once items */

		// Future Plans: Asynchronously load the Google Maps API
		// var googleScript = document.createElement('script');
		// googleScript.src = "https://maps.googleapis.com/maps/api/js?sensor=false";
		// document.body.appendChild(googleScript);



		// The Loop
		return this.each(function () {

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


			var mapElement = document.getElementById('map');

			// Create the Google Map with already defined options
			var map = new google.maps.Map(mapElement, mapOptions);

			// Create the infoWindow object
			var infoWindow = new google.maps.InfoWindow(), marker, i;


			// The Loop
			for (var i = 0; i < options.locationData.length; i++) {

				var position = new google.maps.LatLng( options.locationData[i].latLng[0], options.locationData[i].latLng[1] );

				// Set the markers, based on if they have a custom marker or not
				if (options.markerIcon !== '') {
					marker = new google.maps.Marker({
						position: position,
						icon: options.markerIcon,
						map: map
					});
				}
				else {
					marker = new google.maps.Marker({
						position: position,
						map: map
					});
				}
				
				// Allow each marker to have an info window    
				google.maps.event.addListener(marker, 'click', (function(marker, i) {
					return function() {
						infoWindow.setContent( '<h2>' + options.locationData[i].name + '</h2><p>' + options.locationData[i].content + '</p>' );
						infoWindow.open(map, marker);
						map.panTo(marker.position);
					};
				})(marker, i));
			}

		});

	};



	// Default the defaults
	$.fn.easyMap.options = {
		mapCenter:						[33.748995, -84.387982],
		zoom:							11,

		locationData: 					[],
		snazzyMapsStyles:				[],

		scrollwheel:					false,
		disableDefaultUI:				true,
		disableDoubleClickZoom:			false,
		draggable:						true,

		markerIcon:						''
	};

})(jQuery);
