'use strict';

const gameBotFunction = function () {
    function randomGenerate(min, max) {
        let rand = min + Math.random() * (max - min + 1);
        return Math.floor(rand);
    }

    let mysteryNumber = randomGenerate(1, 100);
    let tries = 2;

    const isNumber = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    };

    return function getResult() {
        let answerNum = prompt('Угадайте число от 1 до 100');

        if (answerNum === null) {
            alert('Вы завершили игру');
            return;
        }

        while (!isNumber(answerNum) || answerNum.trim() === '') {
            alert('Вы ввели некорректное значение');
            answerNum = prompt('Угадайте число от 1 до 100');
        }

        answerNum = Number(answerNum);

        if (mysteryNumber > answerNum) {
            alert('Загаданное число больше: Осталось попыток ' + tries);
        } else if (mysteryNumber < answerNum) {
            alert('Загаданное число меньше: Осталось попыток ' + tries);
        } else {
            const isUserWantNewGame = confirm('Поздравляю, вы угадали!!! Хотели бы сыграть еще?');

            if (isUserWantNewGame) {
                tries = 2;
                mysteryNumber = randomGenerate(1, 100);
            } else {
                tries = 0;
            }
        }

        if (tries > 0) {
            tries--;
            getResult();
        } else {
            const maybeAgain = confirm('Попыток больше нет, игра окончена. Хотите начать заново?');
            if (maybeAgain) {
                tries = 2;
                mysteryNumber = randomGenerate(1, 100);
                getResult();
            } else {
                alert('Вы завершили игру');
                return;
            }
        }
    };
};

let launchGameBot = gameBotFunction();
launchGameBot();