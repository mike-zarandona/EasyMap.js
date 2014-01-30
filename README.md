# EasyMap.js

easyMap takes the pain and time out of working with Google Maps.



## Getting Started

1. Include [jQuery](http://jquery.com)

2. Include Google Maps API:  `https://maps.googleapis.com/maps/api/js?sensor=false`

3. Call `.easyMap()` on a target element



## Example

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

    	snazzyMapsStyles: 			[...],

    	scrollwheel: 				false,
    	disableDefaultUI: 			true,
    	disableDoubleClickZoom: 	true,
    	draggable: 					false,

    	markerIcon: 				'/path/to/map-pin.png'
    });







## Author
Mike Zarandona • [http://mikezarandona.com](http://mikezarandona.com) • [@mikezarandona](http://twitter.com/mikezarandona)

I'm a front-end developer at [DynamiX Web Design](http://dynamixwd.com).