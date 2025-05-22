document.addEventListener("DOMContentLoaded", () => {
  const launcher = document.getElementById("chat-launcher");
  const chatBox = document.getElementById("chat-box");
  const closeBtn = document.getElementById("close-button");
  const input = document.getElementById("user-input");
  const messages = document.getElementById("chat-messages");

  // ボタンを押すとチャット画面を開く
  launcher.addEventListener("click", () => {
    chatBox.style.display = "flex";
    launcher.style.display = "none";
  });

  // 閉じるボタンでチャット画面を閉じてボタンだけに戻す
  closeBtn.addEventListener("click", () => {
    chatBox.style.display = "none";
    launcher.style.display = "block";
  });

  window.sendMessage = async function () {
    const message = input.value.trim();
    if (!message) return;

    appendMessage("あなた", message);
    input.value = "";

    // ダミー返信（バックエンド未接続用）
    setTimeout(() => {
      appendMessage("Bot", "ご質問ありがとうございます。現在準備中です。");
    }, 800);
  };

  function appendMessage(sender, text) {
    const msg = document.createElement("div");
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }
});
