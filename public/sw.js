var CACHE_NAME = 'bnc-static';
var urlsToCache = [
    '/',
    '/index.js',
    '/main.js'
];

self.addEventListener('install', event => {
    const preCache = async () => {
        const cache = await caches.open(CACHE_NAME);
        return cache.addAll(urlsToCache);
    };
    event.waitUntil(preCache());
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });