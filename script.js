let score = 0;
let clickValue = 1;
let progress = 0;

const progressBar = document.getElementById('progressBar');
const scoreDisplay = document.getElementById('score');
const bonusText = document.getElementById('bonusText');

document.getElementById('coin').addEventListener('click', function() {
    // Увеличиваем количество монет
    score += clickValue;
    scoreDisplay.innerText = score;

    // Обновление прогресс-бара
    progress += 1; // Увеличиваем прогресс на 10 за клик
    if (progress >= 100) {
        score += 1; // Добавляем +1 к монетам
        scoreDisplay.innerText = score;
        progress = 0; // Сбрасываем прогресс
        showBonusText();
        clickValue += 1; // Увеличиваем значение клика
        // alert("Прогресс бар заполнился! Теперь вы получаете " + clickValue + " монет за клик.");
    }
    
    progressBar.style.width = progress + '%';
});

function showBonusText() {
    bonusText.style.opacity = '+1'; // Показываем текст
    setTimeout(() => {
        bonusText.style.opacity = '0'; // Скрываем текст через 1 секунду
    }, 1000);
}
