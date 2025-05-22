document.addEventListener("DOMContentLoaded", () => {
  const launcher = document.getElementById("chat-launcher");
  const chatBox = document.getElementById("chat-box");
  const closeBtn = document.getElementById("close-button");
  const input = document.getElementById("user-input");
  const messages = document.getElementById("chat-messages");
  const sendBtn = document.getElementById("send-button");

  launcher.addEventListener("click", () => {
    chatBox.style.display = "flex";
    launcher.style.display = "none";
    input.focus();
  });

  closeBtn.addEventListener("click", () => {
    chatBox.style.display = "none";
    launcher.style.display = "block";
  });

  sendBtn.addEventListener("click", () => {
    sendMessage();
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });

  function sendMessage() {
    const message = input.value.trim();
    if (!message) return;

    appendMessage("あなた", message);
    input.value = "";
    // alert(message)
    // ダミー返信（API連携時に置き換え可能）
    setTimeout(() => {
      appendMessage("Bot", "ご質問ありがとうございます。現在準備中です。");
    }, 800);

    input.focus();
  }

  function appendMessage(sender, text) {
    const msg = document.createElement("div");
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }
});
