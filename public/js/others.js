// Others page JavaScript
// Add any specific functionality for the others page here

    // レーダーチャート描画
    const ctx = document.getElementById('radarChart').getContext('2d');
    const labels = ['スキル・専門性', '業務遂行能力', 'コミュニケーション', '企業文化', '成長意欲'];

    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: labels,
        datasets: [
          {
            label: '自己評価',
            data: myProfile,
            backgroundColor: 'rgba(118, 200, 255, 0.2)',
            borderColor: 'rgba(52, 152, 219, 1)',
            borderWidth: 2
          },
          {
            label: '入力者の期待',
            data: companyEvaluation,
            backgroundColor: 'rgba(231, 76, 60, 0.2)',
            borderColor: 'rgba(231, 76, 60, 1)',
            borderWidth: 3
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 5
          }
        }
      }
    });
  });

  // 戻るボタン
  document.getElementById('submit-rturn').addEventListener('click', function() {
    // 診断結果画面を非表示
    document.getElementById('result-page').style.display = 'none';
    // 最初のページを表示
    document.getElementById('page-1').style.display = 'block';
    // 必要ならフォームの値をリセット
    document.querySelectorAll('.matching-form select').forEach(select => {
      select.value = "3";
    });
  });

  // 結果共有ボタン
  document.getElementById('share-result').addEventListener('click', function() {
    // レーダーチャートを画像化
    const chartCanvas = document.getElementById('radarChart');
    const imageData = chartCanvas.toDataURL('image/png');
    // メール送信用リンク作成
    const subject = encodeURIComponent('診断結果の共有');
    const body = encodeURIComponent('診断結果画像を添付してください。\n\n' + imageData);
    window.open(`mailto:nszkki.19981116@gmail.com?subject=${subject}&body=${body}`);
  });

  // 初期表示
  document.querySelectorAll('.page').forEach((page, idx) => {
    page.style.display = idx === 0 ? 'block' : 'none';
  });
});