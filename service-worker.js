const CACHE = "akhada-v60-final";
const APP_SHELL = ["./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png"];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(APP_SHELL).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k.startsWith("akhada-") && k !== CACHE)
          .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Always fetch the HTML shell fresh. This prevents an old app shell from
  // bringing back the previously reported broken build.
  if (url.pathname.endsWith("/index.html") || url.pathname === "/") {
    event.respondWith(
      fetch(event.request, {cache: "no-store"}).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(event.request, copy));
        return res;
      }).catch(() =>
        caches.match(event.request).then(r => r || caches.match("./index.html"))
      )
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached =>
      cached || fetch(event.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(event.request, copy));
        return res;
      })
    )
  );
});
