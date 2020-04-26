var directionsService;
var directionsRenderer;

var positions = {
	'KF': {
		'lat': [22.9980781, 23.0009135, 23.0007138, 23.0000044, 22.9988965, 22.9988965, 23.0007767, 22.9989106, 22.9991198,
			22.9988343, 22.9977559, 22.997839, 22.9979009, 22.9973591, 22.9968331
		],
		'lng': [120.2155519, 120.2135132, 120.2156416, 120.2123893, 120.2165609, 120.2165609, 120.2145106, 120.2123651,
			120.2136398, 120.2149181, 120.2122774, 120.2143102, 120.2153862, 120.2137819, 120.2149514
		]
	},
	'CK': {
		'lat': [22.9995646, 22.9995638, 23.0003603, 22.9983574, 22.9998778, 22.9992269, 22.9985453, 22.9978631, 22.997715,
			22.996449, 22.9986221, 22.9986472, 22.997242, 22.997459, 22.9967903, 22.9967903, 22.9967903
		],
		'lng': [120.2170033, 120.2104372, 120.2191749, 120.2170945, 120.2195433, 120.2189791, 120.2187485, 120.2186669,
			120.2179096, 120.2196829, 120.2171883, 120.2176419, 120.2193349, 120.2164578, 120.2183258, 120.2183258,
			120.2183258
		]
	},
	'TC': {
		'lat': [22.9976936, 22.9967983, 22.9962855, 22.9986563, 22.9971563, 22.9962517],
		'lng': [120.2203443, 120.2202387, 120.220391, 120.2157498, 120.2214037, 120.221358]
	},
	'SL': {
		'lat': [22.9959021, 22.9944822, 22.9937812, 22.9942813, 22.9946351, 22.9940267, 22.9946275, 22.9936731, 22.9933926],
		'lng': [120.2165176, 120.2175462, 120.2167097, 120.2181827, 120.2182741, 120.2170858, 120.2167569, 120.2183256,
			120.2184725
		]
	},
	'CY': {
		'lat': [23.0010518, 23.0018748],
		'lng': [120.220922, 120.2209007]
	},
	'CH': {
		'lat': [22.9992409, 23.0020767, 23.0020915, 23.0019573],
		'lng': [120.2160707, 120.2215564, 120.2212158, 120.2174543]
	},
	'LH': {
		'lat': [23.001927, 23.0030496, 23.0016745, 23.0020461],
		'lng': [120.2144797, 120.2146198, 120.2127275, 120.2133826]
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
				<option value="1">護理/物治/職治系館</option> \
				<option value="2">醫技系館/醫工所</option> \
				<option value="3">醫學院</option> \
				<option value="4">成大醫院</option>';
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
			lat: 22.999901,
			lng: 120.153379
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
