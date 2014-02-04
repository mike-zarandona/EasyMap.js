# EasyMap.js

easyMap takes the pain and time out of working with Google Maps.



## Current Version

v1.1 - February 04, 2014



## Getting Started

1. Include [jQuery](http://jquery.com).

2. Include Google Maps API:  `https://maps.googleapis.com/maps/api/js?sensor=false`.

3. Call `.easyMap()` on a target element.



## Example

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





## Options

**locationData** required array that accepts a JSON string of locations to be created as map marker points.

**mapCenter** coordinates on which to center the map.

**zoom** represents the zoom level.

**snazzyMapsStyles** JSON string of style controls - check out [snazzymaps.com](http://snazzymaps.com).

**scrollwheel** boolean which turns on or off the mouse ability to zoom the map in and out.

**disableDefaultUI** boolean which turns on or off the default User Interface of the Google Map, such as zoom indicator, compass, scale, terrain/satellite buttons, etc.

**disableDoubleClickZoom** boolean which turns on or off the double-click zoom functionality.

**draggable** boolean which turns on or off the ability to drag and change the center of the map.

**selectElement** string which accepts a `<select>` element.  The first index ( `[0]` ) will recenter the map, while the remaining options are one-to-one references with the `locationData` list.

**enableLinks** boolean which turns on or off `click` listener events using `data-easymap-marker="x"`.  `0` will recenter the map, and a positive integer will correspond one-to-one with the `locationData` list.

**markerIcon** string which accepts the location of the image to be used as the marker "pin" icon for the created map.

**markerIconSize** array which accepts width and height (in pixels) of the `markerIcon`.



## Changelog

### v1.1
- Added the ability to specify a `<select>` element to correspond to and interact with the map markers.
- Added the ability to enable DOM links for programmatic selection of map markers
- Added the option to pass in an address for automatic "Directions" link generation
- Added retina icon support
- Updated documentation



## Author
Mike Zarandona • [http://mikezarandona.com](http://mikezarandona.com) • [@mikezarandona](http://twitter.com/mikezarandona)

I make awesome things at [DynamiX Web Design](http://dynamixwd.com).