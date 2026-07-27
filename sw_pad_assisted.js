// PWA 설치 조건(installability)을 만족시키기 위한 최소 서비스워커.
// 오프라인 캐싱은 하지 않고, 요청을 그대로 네트워크로 흘려보내기만 함.
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
