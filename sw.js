// 引用workbox build
importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

// 使用precache功能，在offline下也可以執行
// 要存進cache storage裡的檔案清單
var cacheFiles = [
  "./",
  {
    url: './index.html',
    revision: '00000001' // 加revision，版本改了以後，sw.js 在 application 上會更新
  }
];
workbox.precaching.precacheAndRoute(cacheFiles);