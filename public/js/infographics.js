let languageChartInstance, projectsChartInstance, certificationTypeChartInstance, totalCertificationsChartInstance;

document.addEventListener('DOMContentLoaded', function() {

    // 既存のチャートがあれば破棄する
    if (languageChartInstance) languageChartInstance.destroy();
    if (projectsChartInstance) projectsChartInstance.destroy();
    if (certificationTypeChartInstance) certificationTypeChartInstance.destroy();
    if (totalCertificationsChartInstance) totalCertificationsChartInstance.destroy();

    // ページネーションのロジック
    const paginationBtns = document.querySelectorAll('.pagination-btn');
    const categories = document.querySelectorAll('.category');

    // 初期表示
    categories[0].classList.add('active');

    paginationBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 全てのボタンからactiveクラスを外し、クリックされたボタンにactiveクラスを付ける
            paginationBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 全てのカテゴリを非表示にする
            categories.forEach(c => c.classList.remove('active'));

            // クリックされたボタンに対応するカテゴリを表示する
            const targetCategory = btn.getAttribute('data-category');
            const targetElement = document.querySelector(`.category[data-category="${targetCategory}"]`);
            if (targetElement) {
                targetElement.classList.add('active');
            }
        });
    });


    // プログレスバーのアニメーション
    const progressBar1 = document.getElementById('progress-bar-1');
    if (progressBar1) {
        // プログラミング歴5年を10年中の進捗として表現する
        progressBar1.style.setProperty('--progress-width', `${(5 / 10) * 100}%`);
    }

    const progressBar2 = document.getElementById('progress-bar-2');
    if (progressBar2) {
        // 例: 最大規模システム（180人月）を200人月中の進捗として表現する
        progressBar2.style.setProperty('--progress-width', `${(180 / 200) * 100}%`);
    }

    const progressBar3 = document.getElementById('progress-bar-3');
    if (progressBar3) {
        // 例: プロジェクト成功件数
        progressBar3.style.setProperty('--progress-width', `${(11 / 12) * 100}%`);
    }
   

    const progressBar4 = document.getElementById('progress-bar-4');
    if (progressBar4) {
        // いったことある都道府県
        progressBar4.style.setProperty('--progress-width', `${(31 / 47) * 100}%`);
    }
    const progressBar5 = document.getElementById('progress-bar-5');
    if (progressBar5) {
        // テニス歴
        progressBar5.style.setProperty('--progress-width', `${(20 / 26) * 100}%`);
    }

    const progressBar6 = document.getElementById('progress-bar-6');
    if (progressBar6) {
        // 飲みに行く頻度
        progressBar6.style.setProperty('--progress-width', `${(3.5 / 7) * 100}%`);
    }


    // 言語スタック比率のドーナツグラフ
    const languageCtx = document.getElementById('languageStackChart');
    if (languageCtx) {
        languageChartInstance = new Chart(languageCtx, {
            type: 'doughnut',
            data: {
                labels: ['Java 50%', 'Python 20%', 'C# 10%', 'JS 10%', 'その他 10%'],
                datasets: [{
                    data: [50, 20, 10, 10, 10],
                    backgroundColor: ['#668cb6ff', '#79b8b6ff', '#d7736fff', '#e2ad84ff', '#aca8adff'],
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: false
                    }
                }
            }
        });
    }
// 身長の棒グラフ
const tallCtx = document.getElementById('tallChart');
if (tallCtx) {
    tallChartInstance = new Chart(tallCtx, {
        type: 'bar',
        data: {
            labels: ['中1', '高1', '大1', '新卒', '5年目'],
            datasets: [{
                label: '比較',
                data: [158, 177, 182, 185, 187.8],
                backgroundColor: [
                    '#4A90E2', // 中1
                    '#4A90E2', // 高1
                    '#4A90E2', // 大1
                    '#4A90E2', // 新卒
                    '#f8955be9'  // 5年目だけ赤
                ],
                borderRadius: 5,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    min: 140,
                    title: {
                        display: true,
                        text: '身長(cm)'
                    }
                }
            }
        }
    });
}


    // プロジェクト件数の棒グラフ
    const projectsCtx = document.getElementById('projectsChart');
    if (projectsCtx) {
        projectsChartInstance = new Chart(projectsCtx, {
            type: 'bar',
            data: {
                labels: ['1年目', '2年目', '3年目', '4年目', '5年目'],
                datasets: [{
                    label: 'プロジェクト件数',
                    data: [2, 4, 7, 10, 12],
                    backgroundColor: '#4A90E2',
                    borderRadius: 5,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '件数'
                        }
                    }
                }
            }
        });
    }

    // 資格種類の割合のドーナツグラフ
    const certificationTypeCtx = document.getElementById('certificationTypeChart');
    if (certificationTypeCtx) {
        certificationTypeChartInstance = new Chart(certificationTypeCtx, {
            type: 'doughnut',
            data: {
                labels: ['IPA 4個', 'Microsoft関連 5個', 'その他 2個'],
                datasets: [{
                    data: [4, 5, 2],
                    backgroundColor: ['#668cb6ff', '#79b8b6ff', '#aca8adff'],
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: false
                    }
                }
            }
        });
    }

    // 資格取得総数の折れ線グラフ
    const totalCertificationsCtx = document.getElementById('totalCertificationsChart');
    if (totalCertificationsCtx) {
        totalCertificationsChartInstance = new Chart(totalCertificationsCtx, {
            type: 'line',
            data: {
                labels: ['1年目', '2年目', '3年目', '4年目', '5年目'],
                datasets: [{
                    label: '資格取得総数',
                    data: [3, 5, 7, 9, 11],
                    borderColor: '#4A90E2',
                    backgroundColor: 'rgba(74, 144, 226, 0.2)',
                    tension: 0.4,
                    fill: true,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '総数'
                        }
                    }
                }
            }
        });
    }
});