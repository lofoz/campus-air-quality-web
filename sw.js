// ����workbox build
importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

// ʹ��precache���ܣ���offline��Ҳ���Ԉ���
// Ҫ���Mcache storage�e�ęn�����
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
		revision: '00000001' // ��revision���汾�������ᣬsw.js �� application �ϕ�����
	}
];
workbox.precaching.precacheAndRoute(cacheFiles);
