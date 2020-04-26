var map;
var markers = [];
var infoWindows = [];
var position = [{
		label: '0',
		lat: 23.003028,
		lng: 120.216805,
		title: "生命科學系館"
	},
	{
		label: '1',
		lat: 23.0018649,
		lng: 120.2199081,
		title: "MRI中心"
	},
	{
		label: '2',
		lat: 22.993629799999997,
		lng: 120.21920399999999,
		title: "勝利一舍"
	},
	{
		label: '3',
		lat: 22.997920,
		lng: 120.21641,
		title: "學生活動中心(一)"
	},
	{
		label: '4',
		lat: 23.000781,
		lng: 120.215185,
		title: "建築學系館"
	},
	{
		label: '5',
		lat: 22.996768,
		lng: 120.220804,
		title: "資訊工程學系館"
	},
	{
		label: '6',
		lat: 22.998106,
		lng: 120.218550,
		title: "計算機與網路中心"
	},
	{
		label: '7',
		lat: 22.997850,
		lng: 120.223672,
		title: "儀器設備大樓"
	}
];
var info_config = [
	'<h3>生命科學系館</h3>' +
	'<img src="https://lh5.googleusercontent.com/p/AF1QipMDP24pxMChUca398nsNrwKNzHjCYtxBrWd7zpT=w408-h306-k-no" width = "200px">',
	'<h3>MRI中心</h3>',
	// '<img src="http://fmri.ncku.edu.tw/tw/themes/default/images/about2_front.png" width = "200px">',
	'<h3>勝利一舍</h3>' +
	'<img src="https://follaw.tw/wp-content/uploads/2019/11/%E5%8B%9D%E5%88%A9%E4%B8%80%E8%88%8D.jpg" width = "200px">',
	'<h3>學生活動中心(一)</h3>' +
	'<img src="https://lh5.googleusercontent.com/p/AF1QipODRtUBOvqKhoNqKJx-Td1Ycl8VNO5vjkRaRIKa=w408-h306-k-no" width = "200px">',
	'<h3>建築學系館</h3>' +
	'<img src="https://lh5.googleusercontent.com/p/AF1QipNofp6pF9NyvRUhVR_w-aJlhEuPasQcQSWHTU1q=w408-h306-k-no" width = "200px">',
	'<h3>資訊工程學系館</h3>' +
	'<img src="https://lh5.googleusercontent.com/p/AF1QipMCX_rrJ80CAl9OEVYGK8hkd_wKunbaPCk9hSs7=w408-h306-k-no" width = "200px">',
	'<h3>計算機與網路中心</h3>' +
	'<img src="https://lh5.googleusercontent.com/p/AF1QipMtODnfed1lndAQveAdRO4y325TFl40u6fa5x2J=w426-h240-k-no" width = "200px">',
	'<h3>儀器設備大樓</h3>' +
	'<img src="https://geo3.ggpht.com/cbk?panoid=NQkZ5upzeK57qdu-9wJXow&output=thumbnail&cb_client=search.gws-prod/maps/local-details-getcard.gps&thumb=2&w=408&h=240&yaw=278.5426&pitch=0&thumbfov=100" width = "200px">'
];

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15.5,
		center: {
			lat: 22.9981318,
			lng: 120.2202079,
		},
	});

	for (var i = 0; i < position.length; i++) {
		addMarker(i);
	}
	// console.log(document.getElementById('Map').innerHTML);
}

function addMarker(e) {
	markers[e] = new google.maps.Marker({
		position: {
			lat: position[e].lat,
			lng: position[e].lng,
		},
		map: map,
		label: position[e].label,
		title: position[e].title
	});
	infoWindows[e] = new google.maps.InfoWindow({
		content: info_config[e]
	});
	markers[e].addListener('click', function() {
		infoWindows[e].open(map, markers[e])
	});
}

function setMap(i) {
	// console.log(i);
	map.setCenter(new google.maps.LatLng(position[i].lat, position[i].lng));
	map.setZoom(18);
}

function setMap_my() {
	// console.log(min_p);
	map.setCenter(new google.maps.LatLng(position[min_p].lat, position[min_p].lng));
	map.setZoom(18);
}

function resetMap() {
	// console.log(i);
	// map.setCenter(new google.maps.LatLng(22.9981318, 120.2202079));
	// map.setZoom(15.5);
	initMap();
}
