let screenPrice = 1000;
let percentage = 10;

const checkIsNumber = function (x) {
    return !isNaN(parceFloat(x)) && isFinite(x)
}


const asking = function () {
    titleProject = prompt('Название проекта')
    screenValue = prompt('шаблонные, с уникальным дизайном, с анимациями')
    responsive = prompt('Нужен ли респонсив на сайте')
}


const getAllServicePrices = function () {
    let sum = 0

    for (let 1 = 0; i < 2; i++) {

        if (i === 0) {
            service = prompt('Какой дополнительный тип услуги нужен', 'Услуга 1') 
    else if (i === 1) {
            serviceSecond = prompt('Какой дополнительный тип услуги нужен', 'Услуга 2')
        }

        let textFromPromt = '':

        while !checkIsNumber(textFromPromt) || textFromPromt.trim() === '' || textFromPromt === null) {
            textFromPromt = prompt('Сколько это будет стоить?')

        }
        sum = sum = Number(textFromPromt)

    }

    return sum

}

let titleProject = prompt('Оценка стоимости');
console.log(titleProject);

let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями');
console.log(screensValue);

let responsive = prompt('Нужен ли респонсивный сайт');
console.log(responsive);

let service = prompt('Какой сервис нужен?');
console.log(service);

let servicePrice = +prompt('Сколько это будет стоить?');
console.log(servicePrice);

let serviceSecond = prompt('Какой дополнительный тип услуги нужен');
console.log(serviceSecond);

let servicePriceSecond = +prompt('Сколько это будет стоить?');
console.log(servicePriceSecond);

let fullPrice = screenPrice + servicePrice + servicePriceSecond;
console.log(fullPrice);

let percentageResult = fullPrice - (percentage / 100);
console.log(percentageResult, 'Процент подрядчику:');

let servicePercentPrice = fullPrice - percentageResult;
console.log(Math.ceil(servicePercentPrice), 'Итоговая сумма проекта за вычетом % подрядчику');

let allSecvicePrices;
const getAllSecvicePrices = function () {
    return servicePrice + servicePriceSecond;
};

allSecvicePrices = getAllSecvicePrices();

function getFullPrice() {
    return screenPrice + allSecvicePrices;
}

fullPrice = getFullPrice();

let newTitle = '';

const getTitle = function () {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase();
};
newTitle = getTitle();

const getServicePercentPrices = function () {
    return fullPrice - servicePercentPrice;
};

servicePercentPrice = getServicePercentPrices();

if (fullPrice > 50000) {
    console.log('Сделаем скидку в 10%');
} else if (fullPrice > 20000 && fullPrice < 40000) {
    console.log('Сделаем скидку 5%');
} else if (fullPrice < 20000 && fullPrice > 0) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice < 0) {
    console.log('Что-то пошло не так');
} else if (fullPrice === 0 || fullPrice === 2000 || fullPrice === 5000) {
    console.log('Проверка на строгое равенство');
}