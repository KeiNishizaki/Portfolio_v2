document.addEventListener('DOMContentLoaded', function () {
  const section2 = document.querySelector('#section2');

  if (!section2) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section2.classList.add('in-view');
        observer.unobserve(section2); // 一度だけ実行
      }
    });
  });

  observer.observe(section2);
});
