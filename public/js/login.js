document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const userid = document.getElementById('userid').value;
  const password = document.getElementById('password').value;
  const msg = document.getElementById('loginMessage');

  const functionUrl = '/api/getLoginInfo'; 
  const requestBody = { userid, password };

  console.log('--- 送信するリクエスト情報 ---');
  console.log('URL:', functionUrl);
  console.log('Method:', 'POST');
  console.log('Headers:', { 'Content-Type': 'application/json' });
  console.log('Body:', JSON.stringify(requestBody));

  fetch(functionUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
  .then(response => {
    // レスポンスのログを出力
    console.log('--- サーバーからの応答 ---');
    console.log('Status:', response.status);
    console.log('Headers:', response.headers);
    
    // エラーレスポンスをJSONとして解析しようとせず、そのまま表示
    if (response.status === 405) {
      return response.text().then(text => {
        throw new Error(`エラーコード 405 (Method Not Allowed): ${text}`);
      });
    }

    if (response.ok) {
      return response.json();
    } else {
      return response.text().then(text => {
        throw new Error(`HTTPエラー: ${response.status} - ${text}`);
      });
    }
  })
  .then(data => {
    msg.textContent = data.message;
    msg.style.color = 'green';
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'index.html';
  })
  .catch(error => {
    console.error('Fetch Error:', error);
    msg.textContent = error.message || '認証中にエラーが発生しました。';
    msg.style.color = 'red';
    localStorage.removeItem('isLoggedIn');
  });
});