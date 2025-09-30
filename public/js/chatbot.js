const FUNCTION_APP_URL = "https://func-myportfolio-hydgfzfsebesejd2.japanwest-01.azurewebsites.net/api/chatbot"; 

// 1. DOM要素の取得
const chatLauncher = document.getElementById("chat-launcher");
const chatBox = document.getElementById("chat-box");
const closeButton = document.getElementById("close-button");

const chatContainer = document.getElementById("chat-messages"); // メッセージ表示エリア
const input = document.getElementById("user-input");          // 入力欄
const sendBtn = document.getElementById("send-button");        // 送信ボタン


// 2. UIの開閉処理
chatLauncher.addEventListener('click', () => {
    // ランチャーボタンを押したらチャットボックスを表示/非表示切り替え
    chatBox.style.display = chatBox.style.display === 'none' ? 'flex' : 'none';
    if (chatBox.style.display === 'flex') {
        input.focus(); // 開いたときに入力欄にフォーカス
    }
});

closeButton.addEventListener('click', () => {
    // 閉じるボタンを押したらチャットボックスを非表示
    chatBox.style.display = 'none';
});

// 3. メッセージ送信処理のトリガー設定
sendBtn.addEventListener('click', sendMessage);
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});


// 4. メッセージ表示ヘルパー関数
/**
 * チャットコンテナにメッセージを追加する
 * @param {string} sender - 送信者 ("あなた" または "Bot")
 * @param {string} content - メッセージ内容
 * @param {boolean} isLoading - ロード中表示フラグ
 * @returns {HTMLElement} - 追加されたメッセージ要素
 */
function appendMessage(sender, content, isLoading = false) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender === "あなた" ? "chat-user" : "chat-bot");

    // 送信者名を太字で表示
    const senderElement = document.createElement("strong");
    senderElement.innerText = `${sender}: `;
    messageDiv.appendChild(senderElement);

    const contentElement = document.createElement("span");
    if (isLoading) {
        contentElement.classList.add("loading");
    }
    contentElement.innerText = content;
    messageDiv.appendChild(contentElement);

    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    return messageDiv;
}


// 5. Functionsとの連携（API呼び出し）
function sendMessage() {
    const message = input.value.trim();
    if (!message) return;

    // 1. ユーザーメッセージの表示と入力の無効化
    appendMessage("あなた", message);
    input.value = "";
    input.disabled = true; 
    sendBtn.disabled = true; 
    
    // 2. Botのロード中表示を追加
    let botMessageElement = appendMessage("Bot", "思考中...", true); // ロード中要素を取得

    // API連携
    fetch(FUNCTION_APP_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: message }),
    })
    .then(response => {
        // ロード中表示から 'loading' クラスを削除
        const loadingSpan = botMessageElement.querySelector('span');
        if (loadingSpan && loadingSpan.classList.contains('loading')) {
            loadingSpan.classList.remove('loading');
        }

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const reply = data.reply || "エラー: 正しい応答が得られませんでした。";
        const replySpan = botMessageElement.querySelector('span');
        if (replySpan) replySpan.innerText = reply;
    })
    .catch(error => {
        console.error("Fetch Error:", error);
        const errorMessage = `エラーが発生しました: ${error.message} (コンソールを確認してください)`;
        const errorSpan = botMessageElement.querySelector('span');
        if (errorSpan) errorSpan.innerText = errorMessage;
    })
    .finally(() => {
        // 処理終了後に元に戻す
        input.disabled = false;
        sendBtn.disabled = false;
        input.focus();
    });

}