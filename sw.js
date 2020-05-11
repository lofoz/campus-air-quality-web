// 引用workbox build
importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

// 使用precache功能，在offline下也可以執行
// 要存進cache storage裡的檔案清單
var cacheFiles = [
	"/campus-air-quality-web/",
	"/campus-air-quality-web/index.html",
	"/campus-air-quality-web/data_analyze.html",
	"/campus-air-quality-web/direction.html",
	"/campus-air-quality-web/css/styles.css",
	"/campus-air-quality-web/js/googlemap.js",
	"/campus-air-quality-web/js/loaddata.js",
	"/campus-air-quality-web/js/data_analyze.js",
	"/campus-air-quality-web/js/direction.js",
	"/campus-air-quality-web/img/ncku-logo-b.png",
	{
		url: './index.html',
		revision: '00000001' // 加revision，版本改了以後，sw.js 在 application 上會更新
	}
];
workbox.precaching.precacheAndRoute(cacheFiles);
