document.addEventListener('DOMContentLoaded', function() {
  // ページ切り替え
  document.querySelectorAll('.next-page').forEach(btn => {
    btn.addEventListener('click', function() {
      const current = btn.closest('.page');
      current.style.display = 'none';
      document.getElementById(btn.dataset.target).style.display = 'block';
    });
  });
  document.querySelectorAll('.prev-page').forEach(btn => {
    btn.addEventListener('click', function() {
      const current = btn.closest('.page');
      current.style.display = 'none';
      document.getElementById(btn.dataset.target).style.display = 'block';
    });
  });

  // 診断結果ボタン
  document.getElementById('submit-button').addEventListener('click', function() {
    // 各ページを非表示
    document.querySelectorAll('.page').forEach(page => {
      page.style.display = 'none';
    });
    // 診断結果ページのみ表示
    document.getElementById('result-page').style.display = 'block';

    // 各カテゴリの値を取得して平均を計算
    function getAvg(ids) {
      let sum = 0;
      ids.forEach(id => {
        sum += parseFloat(document.getElementById(id).value);
      });
      return sum / ids.length;
    }

    const skillAvg = getAvg(['skill1', 'skill2', 'skill3', 'skill4', 'skill5']);
    const performanceAvg = getAvg(['performance1', 'performance2', 'performance3', 'performance4', 'performance5']);
    const communicationAvg = getAvg(['communication1', 'communication2', 'communication3', 'communication4', 'communication5']);
    const cultureAvg = getAvg(['culture1', 'culture2', 'culture3', 'culture4', 'culture5']);
    const growthAvg = getAvg(['growth1', 'growth2', 'growth3', 'growth4', 'growth5']);

    // ここでは自己評価は仮値（必要なら別途取得）
    const myProfile = [4, 5, 4.5, 4, 4.5];
    const companyEvaluation = [
      skillAvg,
      performanceAvg,
      communicationAvg,
      cultureAvg,
      growthAvg
    ];

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