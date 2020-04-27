var directionsService;
var directionsRenderer;

var positions = {
	'KF': {
		'lat': [23.000760, 23.000897, 23.000605, 22.999964, 23.000328, 22.999652, 22.999425, 22.999043, 22.998851, 22.998818,
			22.998016, 22.997923, 22.997947, 22.997111, 22.996850
		],
		'lng': [120.215172, 120.215729, 120.217639, 120.214606, 120.217983, 120.215991, 120.217361, 120.214890, 120.215894,
			120.217111, 120.214929, 120.216058, 120.217485, 120.215804, 120.217455
		]
	},
	'CK': {
		'lat': [23.000280, 22.999928, 23.000310, 22.997868, 22.999743, 22.999187, 22.998542, 22.997889, 22.997360, 22.996635,
			22.998624, 22.998629, 22.998180, 22.997421, 22.997492, 22.996604, 22.996642
		],
		'lng': [120.218872, 120.219899, 120.221360, 120.218769, 120.221569, 120.221204, 120.220912, 120.220815, 120.220937,
			120.220592, 120.219337, 120.219850, 120.219706, 120.218736, 120.219781, 120.218606, 120.219594
		]
	},
	'TC': {
		'lat': [22.997690, 22.996781, 22.996199, 22.997894, 22.997161, 22.996314],
		'lng': [120.222699, 120.222573, 120.222538, 120.223488, 120.223492, 120.223421]
	},
	'SL': {
		'lat': [22.995776, 22.994491, 22.993804, 22.994287, 22.994650, 22.993969, 22.994661, 22.994009, 22.993431],
		'lng': [120.218669, 120.219858, 120.219114, 120.220358, 120.220389, 120.219510, 120.218922, 120.220389, 120.220583]
	},
	'CY': {
		'lat': [23.001041, 23.002133],
		'lng': [120.223139, 120.222665]
	},
	'CH': {
		'lat': [23.001381, 23.001347, 23.002034, 23.001714, 23.001683],
		'lng': [120.220884, 120.221663, 120.221873, 120.220301, 120.217772]
	},
	'LH': {
		'lat': [23.001917, 23.003008, 23.001692, 23.002080],
		'lng': [120.216661, 120.216795, 120.215090, 120.215562]
	}
}

function initMap() {
	var chicago = new google.maps.LatLng(41.850033, -87.6500523);
	directionsService = new google.maps.DirectionsService();
	directionsRenderer = new google.maps.DirectionsRenderer();
	var mapOptions = {
		zoom: 15.5,
		center: {
			lat: 22.9981318,
			lng: 120.2202079
		}
	}
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	directionsRenderer.setMap(map);

	var onChangeHandlerStart = function() {
		if (document.getElementById('start').value == '0') {
			document.getElementById('end').innerHTML =
				'<option value="0">請選擇目的地</option>';
		} else if (document.getElementById('start').value == 'KF') {
			document.getElementById('end').innerHTML =
				'<option value="0">請選擇目的地</option> \
				<option value="1">建築系館/設計學院</option> \
				<option value="2"> 都計系館</option> \
				<option value="3"> 文學院 / 修齊大樓 </option> \
				<option value="4"> 藝研所 / 建築研究大樓 </option> \
				<option value="5"> 中文系館 </option> \
				<option value="6"> 工設系館 / 大成館 </option> \
				<option value="7"> 歷史系館 </option> \
				<option value="8"> 光一 / 光二舍 </option> \
				<option value="9"> 唯農大樓 / 附工 / 軍訓室 </option> \
				<option value="10"> 雲平大樓 </option> \
				<option value="11"> 光復操場 </option> \
				<option value="12"> 學活 / 成功廳 / 國際會議廳 </option> \
				<option value="13"> 管理學院 </option> \
				<option value="14"> 光復球場 </option> \
				<option value="15"> 中正堂 </option>';
		} else if (document.getElementById('start').value == 'CK') {
			document.getElementById('end').innerHTML =
				'<option value="0">請選擇目的地</option> \
				<option value="1">理學大樓</option> \
				<option value="2">總圖書館</option> \
				<option value="3">水利系館</option> \
				<option value="4">理工大樓</option> \
				<option value="5">卓群大樓</option> \
				<option value="6">土木系館</option> \
				<option value="7">材料系館</option> \
				<option value="8">資源系館</option> \
				<option value="9">資訊系館</option> \
				<option value="10">工科系館</option> \
				<option value="11">數學系館</option> \
				<option value="12">測量系館</option> \
				<option value="13">化學系館</option> \
				<option value="14">地科系館</option> \
				<option value="15">物理系館</option> \
				<option value="16">光電系館</option> \
				<option value="17">博物館</option>';
		} else if (document.getElementById('start').value == 'TC') {
			document.getElementById('end').innerHTML =
				'<option value="0">請選擇目的地</option> \
				<option value="1">化工系館</option> \
				<option value="2">電機系館</option> \
				<option value="3">奇美大樓</option> \
				<option value="4">精密儀器大樓</option> \
				<option value="5">機械系館</option> \
				<option value="6">系統系館</option>';
		} else if (document.getElementById('start').value == 'SL') {
			document.getElementById('end').innerHTML =
				'<option value="0">請選擇目的地</option> \
				<option value="1">成大會館</option> \
				<option value="2">二活</option> \
				<option value="3">勝一舍</option> \
				<option value="4">勝二舍</option> \
				<option value="5">勝三舍</option> \
				<option value="6">勝四舍</option> \
				<option value="7">勝六舍</option> \
				<option value="8">勝八舍</option> \
				<option value="9">勝九舍</option>';
		} else if (document.getElementById('start').value == 'CY') {
			document.getElementById('end').innerHTML =
				'<option value="0">請選擇目的地</option> \
				<option value="1">敬一舍</option> \
				<option value="2">敬三舍</option>';
		} else if (document.getElementById('start').value == 'CH') {
			document.getElementById('end').innerHTML =
				'<option value="0">請選擇目的地</option> \
				<option value="1">護理系館</option> \
				<option value="2">物治/職治系館</option> \
				<option value="3">醫技系館/醫工所</option> \
				<option value="4">醫學院</option> \
				<option value="5">成大醫院</option>';
		} else if (document.getElementById('start').value == 'LH') {
			document.getElementById('end').innerHTML =
				'<option value="0">請選擇目的地</option> \
				<option value="1">社科院大樓</option> \
				<option value="2">生科系館</option> \
				<option value="3">公衛大樓</option> \
				<option value="4">台文系館</option>';
		}
	};
	var onChangeHandlerEnd = function() {
		if (document.getElementById('end').value != '0') {
			get_route();
		}
	};
	document.getElementById('start').addEventListener('change', onChangeHandlerStart);
	document.getElementById('end').addEventListener('change', onChangeHandlerEnd);

	function get_route() {
		geoFindMe();

		function geoFindMe() {
			var my_lat, my_lng;
			if (!navigator.geolocation) {
				alert("Geolocation is not supported by your browser");
				return;
			}

			function success(position) {
				var distance = [];
				my_lat = position.coords.latitude;
				my_lng = position.coords.longitude;
				var xhr = new XMLHttpRequest;
				var url =
					'https://nckuairpollution.csie.ncku.edu.tw:6800/requesting/route_cal/' + my_lat + '/' + my_lng +
					'/' + positions[document.getElementById('start').value]['lat'][document.getElementById('end').value - 1] +
					'/' + positions[document.getElementById('start').value]['lng'][document.getElementById('end').value - 1];
				xhr.responseType = 'json';
				xhr.onreadystatechange = () => {
					if (xhr.readyState === XMLHttpRequest.DONE) {
						let data = xhr.response;
						calculateAndDisplayRoute(directionsService, directionsRenderer, data, my_lat, my_lng);
					}
				};
				xhr.open('GET', url);
				xhr.send();
			};

			function error() {
				alert("Unable to retrieve your location");
			};
			navigator.geolocation.getCurrentPosition(success, error);
		}
	}
}

function calculateAndDisplayRoute(directionsService, directionsRenderer, waypAry, my_lat, my_lng) {
	var waypts = [];
	for (var i = 0; i < waypAry.length; i++) {
		waypts.push({
			location: waypAry[i],
			stopover: true
		});
	}

	directionsService.route({
		origin: {
			lat: my_lat,
			lng: my_lng
		},
		destination: {
			lat: positions[document.getElementById('start').value]['lat'][document.getElementById('end').value - 1],
			lng: positions[document.getElementById('start').value]['lng'][document.getElementById('end').value - 1]
		},
		waypoints: waypts,
		optimizeWaypoints: true,
		travelMode: 'WALKING'
	}, function(response, status) {
		if (status === 'OK') {
			directionsRenderer.setDirections(response);
			// var route = response.routes[0];
			// var summaryPanel = document.getElementById('directions-panel');
			// summaryPanel.innerHTML = '';
			// // For each route, display summary information.
			// for (var i = 0; i < route.legs.length; i++) {
			// 	var routeSegment = i + 1;
			// 	summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
			// 		'</b><br>';
			// 	summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
			// 	summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
			// 	summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
			// }
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
}
