// ����workbox build
importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

// ʹ��precache���ܣ���offline��Ҳ���Ԉ���
// Ҫ���Mcache storage�e�ęn�����
var cacheFiles = [
	"/",
	"/index.html",
	"/data_analyze.html",
	"/direction.html",
	"/css/styles.css",
	"/js/googlemap.js",
	"/js/loaddata.js",
	"/js/data_analyze.js",
	"/js/direction.js",
	"/img/ncku-logo-b.png",
	{
		url: './index.html',
		revision: '00000001' // ��revision���汾�������ᣬsw.js �� application �ϕ�����
	}
];
workbox.precaching.precacheAndRoute(cacheFiles);
