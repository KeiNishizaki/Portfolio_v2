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
            showModal(matchModal);

            const heartEffect = document.createElement('div');
            const heartImg = document.createElement('img');
            heartImg.src = 'img/Icon/good_icon.png';
            heartEffect.appendChild(heartImg);

            heartEffect.style.position = 'absolute';
            
            const rect = goodButton.getBoundingClientRect();
            const cardRect = document.querySelector('.profile-card').getBoundingClientRect();

            heartEffect.style.top = `${rect.top + rect.height / 2 - cardRect.top}px`;
            heartEffect.style.left = `${rect.left + rect.width / 2 - cardRect.left}px`;
            
            heartEffect.style.transform = 'translate(-50%, -50%)';
            heartEffect.style.transition = 'all 0.8s ease-out';
            heartEffect.style.opacity = '1';
            heartEffect.style.pointerEvents = 'none';
            heartEffect.style.zIndex = '11';
            heartEffect.style.width = '50px';
            heartEffect.style.height = '50px';

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
            showModal(returnMessageModal);
        });
    }

    // --- モーダルを閉じるボタンのイベントリスナー ---
    if (closeModalButton) {
        closeModalButton.addEventListener('click', () => {
            hideModal(matchModal);
        });
        matchModal.addEventListener('click', (e) => {
            if (e.target === matchModal) {
                hideModal(matchModal);
            }
        });
    }

    if (closeReturnModalButton) {
        closeReturnModalButton.addEventListener('click', () => {
            hideModal(returnMessageModal);
            location.reload();
        });
        returnMessageModal.addEventListener('click', (e) => {
            if (e.target === returnMessageModal) {
                hideModal(returnMessageModal);
                location.reload();
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
        });
    });

    // --- ページ読み込み時の初期タブ表示処理 ---
    const initialActiveTabButton = document.querySelector('.tab-button.active');
    if (initialActiveTabButton) {
        const initialTargetTabId = initialActiveTabButton.dataset.tab;
        const initialTargetContent = document.getElementById(initialTargetTabId);
        if (initialTargetContent) {
            initialTargetContent.classList.add('active');
        }
    } else if (tabButtons.length > 0) {
        tabButtons[0].classList.add('active');
        tabContents[0].classList.add('active');
    }

    // --- スワイプ機能の追加 ---
    const swiperElement = document.querySelector('.profile-card');
    let isSwiping = false; // スワイプ中かどうかのフラグ
    let startX = 0;
    const swipeThreshold = 100; // スワイプと認識する最小の距離（ピクセル）

    // スワイプ開始時の処理
    const handleStart = (e) => {
        isSwiping = true;
        startX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
    };

    // マウスが動いている間の処理（PCのみ）
    const handleMove = (e) => {
        if (!isSwiping) return;

        const currentX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
        const diffX = currentX - startX;
        const absDiffX = Math.abs(diffX);

        // 移動距離がしきい値を超えたらスワイプと判定する
        if (absDiffX >= swipeThreshold) {
            isSwiping = false; // スワイプと判定したらフラグをリセット
            if (diffX > 0) {
                showModal(matchModal); // 右スワイプ
            } else {
                showModal(returnMessageModal); // 左スワイプ
            }
            // モーダル表示後に処理を終了させる
            // 次のスワイプに備えてstartXをリセット
            startX = 0;
        }
    };

    // スワイプ終了時の処理
    const handleEnd = () => {
        // スワイプが開始されていたが、しきい値に満たなかった場合はクリックとみなす
        if (isSwiping) {
            isSwiping = false;
        }
        // 次のスワイプに備えてstartXをリセット
        startX = 0;
    };

    if (swiperElement) {
        // PC（マウス）での操作
        swiperElement.addEventListener('mousedown', handleStart);
        swiperElement.addEventListener('mousemove', handleMove);
        swiperElement.addEventListener('mouseup', handleEnd);
        swiperElement.addEventListener('mouseleave', handleEnd);

        // スマホ・タブレット（タッチ）での操作
        swiperElement.addEventListener('touchstart', handleStart);
        swiperElement.addEventListener('touchmove', handleMove);
        swiperElement.addEventListener('touchend', handleEnd);
    }
});