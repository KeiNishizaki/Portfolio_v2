document.getElementById('loginForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const id = document.getElementById('userid').value;
  const pw = document.getElementById('password').value;
  const msg = document.getElementById('loginMessage');

  // 入力値をハッシュ化（SHA-256例）
  async function hash(str) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  const hashedId = await hash(id);
  const hashedPw = await hash(pw);

  // 外部ファイルから認証情報取得
  const res = await fetch('./json/hashed_credentials.json');
  const credentials = await res.json();

  if (hashedId === credentials.id && hashedPw === credentials.pw) {
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'index.html';
  } else {
    msg.textContent = 'IDまたはPWが間違っています。';
  }
});