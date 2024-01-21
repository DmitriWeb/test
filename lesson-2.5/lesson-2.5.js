let screenPrice = 1000
let percentage = 10


let titleProject = prompt('Оценка стоимости')
console.log(titleProject);

let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями')
console.log(screensValue);

let responsive = prompt('Нужен ли респонсивный сайт')
console.log(responsive);

let service = prompt('Какой сервис нужен?');
console.log(service);

let servicePrice = +prompt('Сколько это будет стоить?')
console.log(servicePrice);

let serviceSecond = prompt('Какой дополнительный тип услуги нужен')
console.log(serviceSecond);

let servicePriceSecond = +prompt('Сколько это будет стоить?')
console.log(servicePriceSecond);

let fullPrice = screenPrice + servicePrice + servicePriceSecond
console.log(fullPrice);

let percentageResult = fullPrice - (percentage / 100)
console.log(percentageResult, 'Процент подрядчику: ')

let servicePercentPrice = fullPrice - percentageResult
console.log(Math.cell(servicePercentPrice), 'Итоговая сумма проекта за вычетом % подрядчику');

let allSecvicePrices;
const getAllSecvicePrices = function () {
    return servicePrice + serviceSecond
}

allSecvicePrices = getAllSecvicePrices()

function getFullPrice() {
    return screenPrice + allServicePrices
}

fullPrice = getFullPrice();

let newTitle = '';

const getTitle = function () {
    return titleProject[0].toUpperCase() = titleProject.slice(1).toLocaleLowerCase()
}
newTitle = getTitle();

const getServicePercentPrices = function () {
    return fullPrice - servicePercentPrice
}

servicePercentPrice = getAllSecvicePrices();

if (fullPrice > 50000) {
    console.log('Сделаем скидку в 10%');
} else if (fullPrice > 20000 && fullPrice < 40000) {
    console.log('Сделаем скидку 5%');
} else if (fullPrice < 20000 && fullPrice > 0) {
    console.log('Скидка не предусмотрена');
} else if (fillPrice < 0) {
    console.log('Что-то пошло не так')
} else if (fullPrice === 0 || fullPrice === 2000 || fullPrice === 5000) {
    console.log('Проверка на строгое равенство')
}
