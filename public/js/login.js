document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const userid = document.getElementById('userid').value;
  const password = document.getElementById('password').value;
  const msg = document.getElementById('loginMessage');

  // FunctionsのURLを構築
  const functionUrl = '/api/getLoginInfo'; // Static Web Appsの相対パスを使用

  fetch(functionUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userid, password }),
  })
  .then(response => {
    // レスポンスが正常か確認
    if (response.ok) {
      return response.json();
    } else {
      // 400, 401, 500などのエラーレスポンスを処理
      return response.json().then(errorData => {
        throw new Error(errorData.message || '認証に失敗しました。');
      });
    }
  })
  .then(data => {
    // 認証成功の処理
    msg.textContent = data.message;
    msg.style.color = 'green';
    
    // ログイン状態を保存し、ページをリダイレクト
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'index.html';
  })
  .catch(error => {
    // 認証失敗の処理
    msg.textContent = error.message || '認証中にエラーが発生しました。';
    msg.style.color = 'red';
    localStorage.removeItem('isLoggedIn');
  });
});