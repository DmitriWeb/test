let fullPrice;
let servicePercentPrice;

const checkIsNumber = function (x) {
    return !isNaN(parseFloat(x)) && isFinite(x);
}

const asking = function () {
    titleProject = prompt('Название проекта');
    screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями');
    responsive = prompt('Нужен ли респонсив на сайте');
}

const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service = prompt('Какой дополнительный тип услуги нужен', 'Услуга 1');
        } else if (i === 1) {
            serviceSecond = prompt('Какой дополнительный тип услуги нужен', 'Услуга 2');
        }

        let textFromPrompt = '';

        while (!checkIsNumber(textFromPrompt) || textFromPrompt.trim() === '' || textFromPrompt === null) {
            textFromPrompt = prompt('Сколько это будет стоить?');
        }
        sum = sum + Number(textFromPrompt);

    }

    return sum;
}

function getFullPrice() {
    return screenPrice + allServicePrices;
}

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (percentage / 100));
}

const getTitle = function () {
    const title = '   Скидка 20% на все услуги   ';
    console.log(title.trim());
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase();
}

const getRollbackMessage = function () {
    fullPrice = getFullPrice();

    if (fullPrice > 50000) {
        return 'Делаем скидку в 10%';
    } else if (fullPrice > 20000 && fullPrice < 40000) {
        return 'Делаем скидку в 5%';
    } else if (fullPrice < 20000 && fullPrice > 0) {
        return 'Скидка не предусмотрена';
    } else if (fullPrice < 0) {
        return 'Что-то пошло не так';
    } else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
        return 'Проверка на строгое равенство';
    }
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
newTitle = getTitle();

console.log(titleProject);
console.log(screensValue);
console.log(responsive);
console.log(service);
console.log(serviceSecond);
console.log(servicePercentPrice);

console.log(getRollbackMessage());