$(document).ready(function() {
	analyze();
})
$(".das0").click(function() {
	analyze(0);
})
$(".das1").click(function() {
	analyze(1);
})
$(".das2").click(function() {
	analyze(2);
})
$(".das3").click(function() {
	analyze(3);
})
$(".das4").click(function() {
	analyze(4);
})
$(".das5").click(function() {
	analyze(5);
})
$(".das6").click(function() {
	analyze(6);
})
$(".das7").click(function() {
	analyze(7);
})

function analyze(sensor = 0) {
	// 處理 data
	var xhr1 = new XMLHttpRequest;
	var url1 = "https://nckuairpollution.csie.ncku.edu.tw:6800/requesting/specific/" + sensor;
	xhr1.open('GET', url1);
	xhr1.responseType = 'json';
	xhr1.send();
	xhr1.onload = function() {
		let analyze_data = xhr1.response;
		specific(sensor, analyze_data);
	}

	var xhr2 = new XMLHttpRequest;
	var url2 = "https://nckuairpollution.csie.ncku.edu.tw:6800/requesting/prob/" + sensor;
	xhr2.open('GET', url2);
	xhr2.responseType = 'json';
	xhr2.send();
	xhr2.onload = function() {
		let analyze_data = xhr2.response;
		prob(sensor, analyze_data);
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

function specific(sensor, analyze_data) {

	var data = [],
		day;
	for (var i = 0; i < 7; i += 3) {
		day = {
			x: ['08:00:00', '12:00:00', '18:00:00'],
			y: [analyze_data[i]['pm25'], analyze_data[i + 1]['pm25'], analyze_data[i + 2]['pm25']],
			mode: 'lines+markers',
			name: analyze_data[i]['date'].substr(0, 10),
			line: {
				shape: 'spline',
			},
			type: 'scatter'
		}
		data.push(day)
	}

	var layout = {
		title: '前三天 特定時間 資料圖',
		legend: {
			y: 0.5,
			traceorder: 'reversed',
			font: {
				size: 16
			},
			yref: 'paper'
		},
		font: {
			family: 'Microsoft JhengHei, monospace',
		},
		xaxis: {
			title: '時間 Time',
		},
		yaxis: {
			title: 'PM2.5 (μg/m<sup>3</sup>)',
		},
		width: 520
	};
	var config = {
		responsive: true
	}

	Plotly.newPlot('graph1' + sensor, data, layout, config);
}

function prob(sensor, analyze_data) {

	var y1 = [];
	var y2 = [];
	var y3 = [];
	var y4 = [];
	var x1 = [];

	for (var i = 0; i < 24; i = i + 1) {
		x1.push(i);
		y1.push(analyze_data[i]["green"] * 100);
		y2.push(analyze_data[i]["yellow"] * 100);
		y3.push(analyze_data[i]["orange"] * 100);
		y4.push(analyze_data[i]["red"] * 100);
	}

	var traces = [{
			x: x1,
			y: y1,
			stackgroup: 'one',
			line: {
				color: 'green'
			},
			name: '0~20'
		},
		{
			x: x1,
			y: y2,
			stackgroup: 'one',
			line: {
				color: 'yellow'
			},
			name: '20~40'
		},
		{
			x: x1,
			y: y3,
			stackgroup: 'one',
			line: {
				color: 'orange'
			},
			name: '40~60'
		},
		{
			x: x1,
			y: y4,
			stackgroup: 'one',
			line: {
				color: 'red'
			},
			name: '60up'
		}

	];

	var layout = {
		title: 'pm2.5機率圖',
		legend: {
			y: 0.5,
			traceorder: 'reversed',
			font: {
				family: 'Microsoft JhengHei, monospace',
				size: 16
			},
			yref: 'paper'
		},
		font: {
			family: 'Microsoft JhengHei, monospace',
		},
		xaxis: {
			title: '時間(小時)'
		},
		yaxis: {
			title: 'pm2.5 機率值(%)'
		},
		width: 520
	};

	var config = {
		responsive: true
	}

	Plotly.newPlot('graph2' + sensor, traces, layout, config);
}
