// ����workbox build
importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

// ʹ��precache���ܣ���offline��Ҳ���Ԉ���
// Ҫ���Mcache storage�e�ęn�����
var cacheFiles = [
  "./",
  {
    url: './index.html',
    revision: '00000001' // ��revision���汾�������ᣬsw.js �� application �ϕ�����
  }
];
workbox.precaching.precacheAndRoute(cacheFiles);