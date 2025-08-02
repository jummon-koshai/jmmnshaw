self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('jmmnshaw-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/netlify/functions/save-message',
        '/netlify/functions/get-messages'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});