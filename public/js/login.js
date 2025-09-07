document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // 仮のIDとPW（本番はサーバー側で管理してください）
  const VALID_ID = 'nishizaki';
  const VALID_PW = '1116';

  const id = document.getElementById('userid').value;
  const pw = document.getElementById('password').value;
  const msg = document.getElementById('loginMessage');

  if (id === VALID_ID && pw === VALID_PW) {
    // 認証成功：ログイン状態を保存
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'index.html';
  } else {
    msg.textContent = 'IDまたはPWが間違っています。';
  }
});