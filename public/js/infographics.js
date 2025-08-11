let languageChartInstance, projectsChartInstance, certificationTypeChartInstance, totalCertificationsChartInstance;

document.addEventListener('DOMContentLoaded', function() {

    // 既存のチャートがあれば破棄する
    if (languageChartInstance) languageChartInstance.destroy();
    if (projectsChartInstance) projectsChartInstance.destroy();
    if (certificationTypeChartInstance) certificationTypeChartInstance.destroy();
    if (totalCertificationsChartInstance) totalCertificationsChartInstance.destroy();



 // プログレスバーのアニメーション
    const progressBar1 = document.querySelector('.progress-bar');
    if (progressBar1) {
        // プログラミング歴5年を10年中の進捗として表現する
        progressBar1.style.setProperty('--progress-width', `${(5 / 10) * 100}%`);
    }

    const progressBar2 = document.querySelector('.progress-bar:nth-of-type(2)');
    if (progressBar2) {
        // 例: 最大規模システム（180人月）を200人月中の進捗として表現する
        progressBar2.style.setProperty('--progress-width', `${(180 / 200) * 100}%`);
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
                    backgroundColor: ['#4A90E2', '#50E3C2', '#F5A623', '#7ED321', '#BD10E0'],
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
                    backgroundColor: ['#4A90E2', '#FF6384', '#FFCD56'],
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