function clickBtn1() {
  const about = document.getElementById("about");
  const btnClose = document.getElementById("btnClose");

  const isShowing = about.classList.contains("show");

  if (isShowing) {
    // 非表示にする
    about.classList.remove("show");
    // ボタンも非表示
    if (btnClose) btnClose.style.display = "none";
  } else {
    // 表示前にdisplayをblockに
    about.style.display = "block";
    // 遅延してアニメーション開始
    requestAnimationFrame(() => {
      about.classList.add("show");
    });
    // 閉じるボタン表示
    if (btnClose) btnClose.style.display = "block";
  }
  
  // アニメーション終了後に display:none にする
  about.addEventListener('transitionend', function handler() {
    if (!about.classList.contains('show')) {
      about.style.display = "none";
    }
    about.removeEventListener('transitionend', handler);
  });
}
