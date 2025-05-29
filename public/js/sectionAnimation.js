document.addEventListener('DOMContentLoaded', function () {
  const section2 = document.querySelector('#section2');
  const section3 = document.querySelector('#section3');
  const section4 = document.querySelector('#section4');
  const section5 = document.querySelector('#section5');

  if (!section2 && !section3 && !section4 && !section5) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); // 一度だけ実行
      }
    });
  });

  if (section2) observer.observe(section2);
  if (section3) observer.observe(section3);
  if (section4) observer.observe(section4);
  if (section5) observer.observe(section5);
});
