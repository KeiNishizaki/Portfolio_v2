document.addEventListener('DOMContentLoaded', () => {
  const returnButton = document.getElementById('returnButton');
  const goodButton = document.getElementById('goodButton');
  
  const matchModal = document.getElementById('matchModal');
  const closeModalButton = document.getElementById('closeModal');
  const returnMessageModal = document.getElementById('returnMessageModal');
  const closeReturnModalButton = document.getElementById('closeReturnModal');

  const typedSpan = document.querySelector('.humanity-section .typed');

  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  // Typed.js の機能
  if (typedSpan) {
    const textToType = typedSpan.getAttribute('data-text');
    let i = 0;
    const typingSpeed = 100;

    function typeWriter() {
      if (i < textToType.length) {
        typedSpan.textContent += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
      }
    }
    typedSpan.textContent = '';
    typeWriter();
  }

  // --- モーダル表示/非表示関数 ---
  function showModal(modalElement) {
    modalElement.classList.add('show');
  }

  function hideModal(modalElement) {
    modalElement.classList.remove('show');
  }

  // --- ボタンクリック時の処理 ---
  if (returnButton && goodButton) {
    // Goodボタン（Likeボタン）の処理
    goodButton.addEventListener('click', () => {
      // ボタン自体は非表示にせず、モーダルを表示
      showModal(matchModal);

      // ハートが飛び散るアニメーション (Goodボタンの場所から)
      const heartEffect = document.createElement('div');
      const heartImg = document.createElement('img');
      heartImg.src = 'img/Icon/good_icon.png'; // good_icon.pngをハートとして利用
      heartEffect.appendChild(heartImg);

      heartEffect.style.position = 'absolute';
      
      const rect = goodButton.getBoundingClientRect();
      const cardRect = document.querySelector('.profile-card').getBoundingClientRect();

      // カード内の相対位置を計算
      heartEffect.style.top = `${rect.top + rect.height / 2 - cardRect.top}px`;
      heartEffect.style.left = `${rect.left + rect.width / 2 - cardRect.left}px`;
      
      heartEffect.style.transform = 'translate(-50%, -50%)';
      heartEffect.style.transition = 'all 0.8s ease-out';
      heartEffect.style.opacity = '1';
      heartEffect.style.pointerEvents = 'none';
      heartEffect.style.zIndex = '11';
      heartEffect.style.width = '50px'; // ハート画像のサイズを調整
      heartEffect.style.height = '50px'; // ハート画像のサイズを調整

      heartImg.style.width = '100%';
      heartImg.style.height = '100%';
      heartImg.style.objectFit = 'contain';

      document.querySelector('.profile-card').appendChild(heartEffect);

      setTimeout(() => {
        heartEffect.style.transform = `translate(${Math.random() * 100 - 50}px, -150px) scale(0)`;
        heartEffect.style.opacity = '0';
      }, 50);

      heartEffect.addEventListener('transitionend', () => {
        heartEffect.remove();
      });
    });

    // Returnボタンの処理
    returnButton.addEventListener('click', () => {
      showModal(returnMessageModal); // 「もう一度、ご検討ください。」モーダルを表示
    });
  }

  // --- モーダルを閉じるボタンのイベントリスナー ---
  if (closeModalButton) {
    closeModalButton.addEventListener('click', () => {
      hideModal(matchModal);
    });
    // オーバーレイクリックでも閉じる場合
    matchModal.addEventListener('click', (e) => {
      if (e.target === matchModal) {
        hideModal(matchModal);
      }
    });
  }

  if (closeReturnModalButton) {
    closeReturnModalButton.addEventListener('click', () => {
      hideModal(returnMessageModal);
      location.reload(); // ページをリフレッシュして元の状態に戻す
    });
    // オーバーレイクリックでも閉じる場合
    returnMessageModal.addEventListener('click', (e) => {
      if (e.target === returnMessageModal) {
        hideModal(returnMessageModal);
        location.reload(); // ページをリフレッシュ
      }
    });
  }


  // --- タブ切り替え処理 ---
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      tabContents.forEach(content => content.classList.remove('active'));

      const targetTabId = button.dataset.tab;
      const targetContent = document.getElementById(targetTabId);
      if (targetContent) {
        targetContent.classList.add('active');
      }

      // プロフィール画像もタブに応じて切り替える場合 (例)
      const profileMainImage = document.querySelector('.profile-main-image');
      if (profileMainImage) {
        if (targetTabId === 'profile') {
          profileMainImage.src = 'img/my_visual (1).png'; // プロフィール画像
        } else if (targetTabId === 'about') {
          profileMainImage.src = 'https://via.placeholder.com/180/1aae9f/FFFFFF?text=AboutMe'; // 私について画像
        } else if (targetTabId === 'gallery') {
          // ギャラリーの場合はメイン画像はそのままか、表示しないなど考慮
        }
      }
    });
  });
});