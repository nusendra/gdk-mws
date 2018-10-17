/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0a27a4163254fc8fce870c8cc3a3f94f"
  },
  {
    "url": "add2numbers.html",
    "revision": "8e18024fd8d64879adeab59f18e8c711"
  },
  {
    "url": "css/main.css",
    "revision": "3775413e6073029e03735e10feda41e3"
  },
  {
    "url": "grid-optional.html",
    "revision": "13752b50d0f46e5e4eaf023435627345"
  },
  {
    "url": "images/photo.jpeg",
    "revision": "0048a7e05c2b89c297ccc10dee465e20"
  },
  {
    "url": "index.html",
    "revision": "b57e56c2b921fbee9af91876c8384edd"
  },
  {
    "url": "js/add2numbers.js",
    "revision": "36d25aa2c379bc9e39311f6d538fc756"
  },
  {
    "url": "js/app.js",
    "revision": "2bd268309637eb3763a315c71411a657"
  },
  {
    "url": "js/main.js",
    "revision": "a644bea7f511f5a99c8dafb37472aaba"
  },
  {
    "url": "map.html",
    "revision": "bc0a356a1882bae410bd6d73545ba216"
  },
  {
    "url": "project2/css/peta.css",
    "revision": "7a3c883850b8ea17b9e3bc6dd2bfb116"
  },
  {
    "url": "project2/js/peta.js",
    "revision": "51d53901282a6f912e6c0f1f257db3bd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
