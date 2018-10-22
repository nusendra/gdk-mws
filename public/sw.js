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
    "url": "data/peta.json",
    "revision": "8e015945ad0003bf574b0bd1273d2b43"
  },
  {
    "url": "grid-optional.html",
    "revision": "13752b50d0f46e5e4eaf023435627345"
  },
  {
    "url": "images/ikanbakar.jpg",
    "revision": "5257f9bdc93f8152f0971fcf66702249"
  },
  {
    "url": "images/photo.jpeg",
    "revision": "0048a7e05c2b89c297ccc10dee465e20"
  },
  {
    "url": "images/restospanyol.jpg",
    "revision": "59a570b6a665b3d5d8f2f570e5df1f9e"
  },
  {
    "url": "images/seafood.jpg",
    "revision": "b7088ead398c2f2b87d653801fa368ea"
  },
  {
    "url": "images/steak.jpg",
    "revision": "f73233067f5f56a2e20a9ab59d5a4cf2"
  },
  {
    "url": "images/warkop.jpg",
    "revision": "d473729f8d7994f03b62e17479c64db5"
  },
  {
    "url": "index.html",
    "revision": "3ce04331e8b724ec668345f961fb43f1"
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
    "revision": "e379a0785d0fa58145ce95a1352aff96"
  },
  {
    "url": "project2/css/peta.css",
    "revision": "7a3c883850b8ea17b9e3bc6dd2bfb116"
  },
  {
    "url": "project2/js/peta.js",
    "revision": "75d92b28b10d110ef0976994d1193142"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
