let screenPrice = 1000;
let percentage = 10;

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

let fullPrice;

function getFullPrice() {
    const allServicePrices = servicePrice + servicePriceSecond;
    return screenPrice + allServicePrices;
}

fullPrice = getFullPrice();
console.log(fullPrice);

function getServicePercentPrices() {
    const totalServicePrice = servicePrice + servicePriceSecond;
    const contractorFee = (totalServicePrice * percentage) / 100;
    return fullPrice - contractorFee;
}

let servicePercentPrice = getServicePercentPrices();
console.log(Math.ceil(servicePercentPrice), 'Итоговая сумма проекта за вычетом % подрядчику');

function getRollbackMessage(price) {
    if (price > 50000) {
        console.log('Сделаем скидку в 10%');
    } else if (price > 40000 && price <= 50000) {
        console.log('Сделаем скидку на заказ');
    } else if (price > 20000 && price <= 40000) {
        console.log('Сделаем скидку 5%');
    } else {
        console.log('Скидка не предусмотрена');
    }
}

getRollbackMessage(fullPrice);

let newTitle = '';

const getTitle = function () {
    return titleProject.trim().charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
};
newTitle = getTitle();
console.log(newTitle);