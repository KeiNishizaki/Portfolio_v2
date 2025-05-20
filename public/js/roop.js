document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector('.slider-wrapper');
  const slides = document.querySelectorAll('.slide');
  const prev = document.querySelector('.nav.prev');
  const next = document.querySelector('.nav.next');
  let index = 0;

  // スライド幅を自動調整
  wrapper.style.width = `${slides.length * 100}%`;

  function updateSlide() {
    wrapper.style.transform = `translateX(-${index * 100/5}%)`;//★スライド分入れる
    // alert(index);
    // alert(slides.length);
  }

  next.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateSlide();
  });

  prev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
  });

  // 自動スライド（任意：5秒）
  setInterval(() => {
    index = (index + 1) % slides.length;
    updateSlide();
  }, 3000);
});
