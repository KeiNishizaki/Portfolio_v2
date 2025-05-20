// startWindow.js
document.addEventListener("DOMContentLoaded", function () {
  const slideIn = document.querySelector('.mv_title-top');
  const fadeZoom = document.querySelector('.mv_img');
  const typedEl = document.getElementById('typed-text');
  const text = typedEl.getAttribute('data-text');

  let hasTyped = false;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasTyped) {
        // スライドインとズームインを表示
        slideIn.classList.add('visible');
        fadeZoom.classList.add('visible');

        // タイピング開始（少し遅らせる）
        setTimeout(() => {
          let i = 0;
          function typeChar() {
            if (i < text.length) {
              typedEl.textContent += text.charAt(i);
              i++;
              setTimeout(typeChar, 50);
            }
          }
          typeChar();
        }, 800);

        hasTyped = true;
        obs.disconnect(); // 一度だけ発火
      }
    });
  });

  observer.observe(document.getElementById('section1'));
});
