const CACHE_NAME = "paypal-lite-v1";
const urlsToCache = [
  "index.html",
  "2nd.html",
  "balance.html",
  "manifest.json",
  "paypal_logo_icon_147252.webp",
  "paypal_logo_icon_147252.webp",
  // Add any other image/CSS/JS files you use
];

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
