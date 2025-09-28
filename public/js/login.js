const functionUrl = 'https://func-myportfolio-hydgfzfsebesejd2.japanwest-01.azurewebsites.net/api/getLoginInfo'; 

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const userid = document.getElementById('userid').value;
  const password = document.getElementById('password').value;
  const msg = document.getElementById('loginMessage');

  // Functions Keyをリクエストの認証ヘッダーに追加します。
  // 💡 [マスターキー]は実際の値に置き換えてください。
  const functionsKey = "[マスターキー]";
  
  const requestBody = { userid, password };

  console.log('--- 送信するリクエスト情報 ---');
  console.log('URL:', functionUrl);
  console.log('Method:', 'POST');
  console.log('Headers:', { 'Content-Type': 'application/json', 'x-functions-key': functionsKey }); // Functions Keyを追加
  console.log('Body:', JSON.stringify(requestBody));

  fetch(functionUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 🚨 修正点: Functions Keyを認証ヘッダーとして追加
      'x-functions-key': functionsKey 
    },
    body: JSON.stringify(requestBody),
  })
  .then(response => {
    // レスポンスのログを出力
    console.log('--- サーバーからの応答 ---');
    console.log('Status:', response.status);
    console.log('Headers:', response.headers);
    
    // 405エラーを捕捉 (このFunctionsは独立しているためCORS設定も重要になります)
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
    // CORSエラーの場合、"Fetch Error: TypeError: Failed to fetch"などが表示されます
    if (error.message.includes('Failed to fetch')) {
        msg.textContent = 'サーバーに接続できませんでした。FunctionsのCORS設定を確認してください。';
    } else {
        msg.textContent = error.message || '認証中にエラーが発生しました。';
    }
    msg.style.color = 'red';
    localStorage.removeItem('isLoggedIn');
  });
});