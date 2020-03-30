$(document).ready(function() {
	get_data(1);
})
$(".map_page").click(function() {
	get_data(2);
})

var min_p = 0;
var min_distance;

function get_data(state) {
	// 第一次載入地圖
	if (state == 1) {
		for (var i = 0; i < 8; i++) {
			get_campus_data(i);
		}
		geoFindMe();
	}
	// 點擊 Map
	else if (state == 2) {
		for (var i = 0; i < 8; i++) {
			get_campus_data(i);
		}
		resetMap();
	}
}

function get_campus_data(i) {
	var xhr = new XMLHttpRequest;
	var url = 'https://nckuairpollution.csie.ncku.edu.tw:6800/campus/' + String(i);
	var data = {};
	xhr.responseType = 'json';
	xhr.onreadystatechange = () => {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			//document.write(JSON.stringify(xhr.response));
			//document.getElementById("pm").innerHTML=JSON.stringify(xhr.response[0]);
			var pm_string = String(i) + "pm";
			var temp_string = String(i) + "temp";
			data = {};
			data['pm25'] = JSON.stringify(xhr.response["avg_pm25"]["pm25"]);
			data['temp'] = JSON.stringify(xhr.response["avg_temp"]["temp"]);
			document.getElementById(pm_string).innerHTML = data.pm25;
			document.getElementById(temp_string).innerHTML = data.temp;
		}
	};
	xhr.open('GET', url);
	xhr.send();
}

// 算sensor 和 user 距離 ，以及取得GPS data

function geoFindMe() {
	var output = document.getElementById("my_pm");
	var sensor_lng = [120.216805, 120.2199081, 120.21920399999999, 120.21641, 120.215185, 120.220804, 120.218550,
		120.223672
	];
	var sensor_lat = [23.003028, 23.0018649, 22.993629799999997, 22.997920, 23.000781, 22.996768, 22.998106, 22.997850];
	var my_lat, my_lng;
	if (!navigator.geolocation) {
		output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
		return;
	}

	function success(position) {
		var distance = [];
		var min;
		// var meg = "目前位置<br>最近sensor：";
		my_lat = position.coords.latitude;
		my_lng = position.coords.longitude;
		for (var i = 0; i < 8; i++) {
			distance[i] = distanceByLnglat(sensor_lng[i], sensor_lat[i], my_lng, my_lat);
		}
		min = distance[0];
		for (var i = 1; i < 8; i++) {
			if (distance[i] < min) {
				min = distance[i];
				min_p = i;
			}
		}
		// output.innerHTML = min_p;
		//document.write(JSON.stringify(xhr.response));
		//document.getElementById("pm").innerHTML=JSON.stringify(xhr.response[0]);
		// meg = meg + min_p +"<br>PM2.5："+campus_data[min_p].pm25;
		// document.getElementById("my_pm").innerHTML=meg;
		get_my_campus_data(min_p);
		// // var img = new Image();
		// mg.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
		// output.appendChild(img);
	};

	function error() {
		output.innerHTML = "Unable to retrieve your location";
	};
	output.innerHTML = "<p>Locating…</p>";
	navigator.geolocation.getCurrentPosition(success, error);
}

// 算user 和 sensor 之間的距離
function distanceByLnglat(lng1, lat1, lng2, lat2) {
	var radLat1 = Rad(lat1);
	var radLat2 = Rad(lat2);
	var a = radLat1 - radLat2;
	var b = Rad(lng1) - Rad(lng2);
	var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(
		b / 2), 2)));
	s = s * 6378137.0; // 取WGS84標準參考橢球中的地球長半徑(單位:m)
	s = Math.round(s * 10000) / 10000;
	return s;
	// //下面為兩點間空間距離（非球面體）
	// var value= Math.pow(Math.pow(lng1-lng2,2)+Math.pow(lat1-lat2,2),1/2);
	// alert(value);
}

function Rad(d) {
	return d * Math.PI / 180.0;
}

function get_my_campus_data(i) {
	var xhr = new XMLHttpRequest;
	var url = 'https://nckuairpollution.csie.ncku.edu.tw:6800/campus/' + String(i);
	var meg = "目前位置 最近Sensor：" + i;
	xhr.responseType = 'json';
	xhr.onreadystatechange = () => {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			//document.write(JSON.stringify(xhr.response));
			//document.getElementById("pm").innerHTML=JSON.stringify(xhr.response[0]);
			meg = meg + "<br>PM2.5：" + JSON.stringify(xhr.response["avg_pm25"]["pm25"]) + " μg/m<sup>3</sup>";
			document.getElementById("my_pm").innerHTML = meg;
		}
	};
	xhr.open('GET', url);
	xhr.send();
}
