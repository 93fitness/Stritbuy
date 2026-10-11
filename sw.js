// Minimal service worker so browsers treat StritBuy as installable. It does not store pages or change how the site loads.
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){});
