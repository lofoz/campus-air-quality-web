// ����workbox build
importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");
importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-messaging.js');

workbox.clientsClaim();
workbox.skipWaiting();

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

var click_action; // �c��notifictionҪȥ�ľWַ

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyBBnECtCvqhG3wmZpORfS3VJZlgjK1KLaU",
	authDomain: "test-6d390.firebaseapp.com",
	databaseURL: "https://test-6d390.firebaseio.com",
	projectId: "test-6d390",
	storageBucket: "test-6d390.appspot.com",
	messagingSenderId: "1072871991195",
	appId: "1:1072871991195:web:0c4beef2a181536b15633e",
	measurementId: "G-QSTSCG37TE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messaging = firebase.messaging();


// firefox bug���� firebase �ƿ����� notifiction ǰ�����]��һ�� notificationclick �¼�
// �O notifiction�c���¼�
self.addEventListener('notificationclick', function(event) {
	var url = click_action;
	console.log(url);
	event.notification.close();
	event.waitUntil(
		clients.matchAll({
			type: 'window'
		}).then(windowClients => {
			// ���tab���_���ģ��� focus �@��tab
			for (var i = 0; i < windowClients.length; i++) {
				var client = windowClients[i];
				if (client.url === url && 'focus' in client) {
					return client.focus();
				}
			}
			// ����]�У�������tab
			if (clients.openWindow) {
				return clients.openWindow(click_action);
			}
		})
	);
});


messaging.setBackgroundMessageHandler(function(payload) {
	var data = payload.notification;
	var title = data.title;
	var options = {
		body: data.body
	};
	click_action = data.click_action;

	return self.registration.showNotification(title, options);
});

self.addEventListener('notificationclose', function(event) {
	console.log('ʹ�����P�]')
});

