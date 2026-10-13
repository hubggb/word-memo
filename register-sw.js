if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(registration => {
        console.log('SW注册成功：', registration.scope);
      })
      .catch(err => {
        console.log('SW注册失败：', err);
      });
  });
}
