$(document).ready(function() {
	analyze();
})
$(".das0").click(function() {
	data_process(0);
})
$(".das1").click(function() {
	data_process(1);
})
$(".das2").click(function() {
	data_process(2);
})
$(".das3").click(function() {
	data_process(3);
})
$(".das4").click(function() {
	data_process(4);
})
$(".das5").click(function() {
	data_process(5);
})
$(".das6").click(function() {
	data_process(6);
})
$(".das7").click(function() {
	data_process(7);
})
var analyze_data;

function analyze() {
	// 處理 data
	var xhr = new XMLHttpRequest;
	var url = "https://nckuairpollution.csie.ncku.edu.tw:6800/campus/get_file";
	xhr.open('GET', url);
	xhr.responseType = 'json';
	xhr.send();
	xhr.onload = function() {
		analyze_data = xhr.response;
		data_process(0);
	}
	// xhr.onreadystatechange = ()=>{
	// 	if(xhr.readyState === XMLHttpRequest.DONE)
	// 	{
	// 		data = {};
	// 		data['pm25'] = JSON.stringify(xhr.response["avg_pm25"]["pm25"]);
	// 		data['temp'] = JSON.stringify(xhr.response["avg_temp"]["temp"]);
	// 		document.getElementById(pm_string).innerHTML=data.pm25;
	// 		document.getElementById(temp_string).innerHTML=data.temp;
	// 	}
	// };
}

function data_process(sensor) {
	var s1 = analyze_data[sensor];
	// console.log(analyze_data[0])
	// console.log(s1["pm25hr"])

	// 24 小時分析圖
	var hrtrace1 = {
		x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
		y: s1["humhr"],
		type: 'scatter',
		mode: 'lines+markers',
		name: 'humidity'
	};
	var hrtrace2 = {
		x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
		y: s1["pm10hr"],
		type: 'scatter',
		mode: 'lines+markers',
		name: 'PM10'
	};
	var hrtrace3 = {
		x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
		y: s1["pm100hr"],
		type: 'scatter',
		mode: 'lines+markers',
		name: 'PM100'
	};
	var hrtrace4 = {
		x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
		y: s1["pm25hr"],
		type: 'scatter',
		mode: 'lines+markers',
		name: 'PM25'
	};
	var hrtrace5 = {
		x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
		y: s1["temphr"],
		type: 'scatter',
		mode: 'lines+markers',
		name: 'Temperature'
	};


	// 一週 分析圖
	var wktrace1 = {
		x: ["一", "二", "三", "四", "五", "六", "日"],
		y: s1["humweek"],
		type: 'scatter',
		mode: 'lines+markers',
		name: 'humidity'
	};
	var wktrace2 = {
		x: ["一", "二", "三", "四", "五", "六", "日"],
		y: s1["pm10week"],
		type: 'scatter',
		mode: 'lines+markers',
		name: 'PM10'
	};
	var wktrace3 = {
		x: ["一", "二", "三", "四", "五", "六", "日"],
		y: s1["pm100week"],
		type: 'scatter',
		mode: 'lines+markers',
		name: 'PM100'
	};
	var wktrace4 = {
		x: ["一", "二", "三", "四", "五", "六", "日"],
		y: s1["pm25week"],
		type: 'scatter',
		mode: 'lines+markers',
		name: 'PM25'
	};
	var wktrace5 = {
		x: ["一", "二", "三", "四", "五", "六", "日"],
		y: s1["tempweek"],
		type: 'scatter',
		mode: 'lines+markers',
		name: 'Temperature'
	};

	var hrlayout = {
		title: '24 hour average sensor 分析圖',
		xaxis: {
			title: '小時 hr',
		},
		yaxis: {
			title: '值 value',
		},
		width: 520
	};
	var wklayout = {
		title: '一週 sensor 分析圖',
		xaxis: {
			title: '一週 one week',
		},
		yaxis: {
			title: '值 value',
		},
		width: 520
	};
	// 1 hum   2 pm10   3 pm100   4 pm25   5 temp
	var hrcom = [hrtrace4, hrtrace5];
	var config = {
		responsive: true
	}
	Plotly.newPlot('graph1' + sensor, hrcom, hrlayout, config);

	var wkcom = [wktrace4, wktrace5]
	Plotly.newPlot('graph2' + sensor, wkcom, wklayout, config);

	var hrcom = [hrtrace4, hrtrace1]
	Plotly.newPlot('graph3' + sensor, hrcom, hrlayout, config);

	var wkcom = [wktrace4, wktrace1]
	Plotly.newPlot('graph4' + sensor, wkcom, wklayout, config);

	var hrcom = [hrtrace2, hrtrace3, hrtrace4]
	Plotly.newPlot('graph5' + sensor, hrcom, hrlayout, config);

	var wkcom = [wktrace2, wktrace3, wktrace4]
	Plotly.newPlot('graph6' + sensor, wkcom, wklayout, config);

	// for(var i = 0; i < data.length; i++)
	// {
	// 	switch(data[i]["position"])
	// 	{
	// 		case 0:
	// 			s0.push(data[i]);
	// 		break;
	// 		case 1:
	// 			s1.push(data[i]);
	// 		break;
	// 		case 2:
	// 			s2.push(data[i]);
	// 		break;
	// 		case 3:
	// 			s3.push(data[i]);
	// 		break;
	// 		case 4:
	// 			s4.push(data[i]);
	// 		break;
	// 		case 5:
	// 			s5.push(data[i]);
	// 		break;
	// 		case 6:
	// 			s6.push(data[i]);
	// 		break;
	// 		case 7:
	// 			s7.push(data[i]);
	// 		break;
	// 		default:
	// 			console.log(data[i]);
	// 		break;
	// 	}
	// }
	// console.log("oK");

	// for(var i = 0; i < s0.length; i++)
	// {
	// }
	// console.log(s0[0]);
}
