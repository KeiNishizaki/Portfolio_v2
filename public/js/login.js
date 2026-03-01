
const functionUrl = 'https://func-myportfolio-hydgfzfsebesejd2.japanwest-01.azurewebsites.net/api/getLoginInfo'; 

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const userid = document.getElementById('userid').value;
  const password = document.getElementById('password').value;
  const msg = document.getElementById('loginMessage');
  const spinner = document.getElementById('loadingSpinner');
  
  // ローディングスピナーを表示
  spinner.style.display = 'block';


  const requestBody = { userid, password };

  console.log('--- 送信するリクエスト情報 ---');
  console.log('URL:', functionUrl);
  console.log('Method:', 'POST');
  console.log('Headers:', { 'Content-Type': 'application/json' }); // Keyなし
  console.log('Body:', JSON.stringify(requestBody));

  fetch(functionUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
  .then(response => {
    // ... (後続の処理はそのまま)
    console.log('--- サーバーからの応答 ---');
    console.log('Status:', response.status);
    
    // ... (エラー処理やレスポンス処理)
    if (response.ok) {
      return response.json();
    } else {
      return response.text().then(text => {
        throw new Error(`HTTPエラー: ${response.status} - ${text}`);
      });
    }
  })
  .then(data => {
    spinner.style.display = 'none';
    msg.textContent = data.message;
    msg.style.color = 'green';
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'index.html';
  })
  .catch(error => {
    spinner.style.display = 'none';
    console.error('Fetch Error:', error);
    msg.textContent = error.message || '認証中にエラーが発生しました。';
    msg.style.color = 'red';
    localStorage.removeItem('isLoggedIn');
  });
});