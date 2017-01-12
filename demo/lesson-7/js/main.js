jQuery(document).ready(function($) {
	var map = new GMaps({
	  div: '#map',
	  lat: -12.043333,
	  lng: -77.028333,
	  zoom: 10,
	  mapType: 'satellite'
	});

	map.addMarker({
	  lat: -12.043333,
	  lng: -77.028333,
	  title: 'Lima',
	  details : {
	  	img : "https://upload.wikimedia.org/wikipedia/commons/e/e5/21_-_Lima_-_Ao%C3%BBt_2008.jpg",
	  	city : "Lima"
	  },
	  click: function(e) {
	    //alert('You clicked in this marker');
	    console.log(e.details.img);
	    console.log(e.details.city);
	    var html = '<h2>' + e.details.city + '</h2>';
	    html += '<img src="' + e.details.img + '" width="100%">';
	    $('#info').html(html);
	  }
	});
});