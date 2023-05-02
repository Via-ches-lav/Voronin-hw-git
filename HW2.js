//Задача №1
// Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

let hamburgers = 6
let fries = 1
let visitors = 4

if (hamburgers >= visitors && fries > 0) {
console.log('Ми поїли')
}
else {
    console.log('Ми йдемо в інше кафе')
}



//Задача №2
// Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.

let price = 1500
if (price >= 1000 && price <= 1900) {
console.log('Ціна в діапазоні')
}
else {
    console.log('Ціна поза діапазоном')
}



// Задача №3
// Напишіть конструкцію if, що перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
// Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
// Результат виводити в консоль.


let price1 = 999
if (!(price1 > 1000 && price1 <= 1900)) {
    console.log('Ціна не в діапазоні')
}
else if (price1 > 1000 && price1 <= 1900){
    console.log('Ціна в діапазоні')
}


// Задача №4
// За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

let seasons = {
    0: 'summer',
    1: 'winter',
    2: 'spring',
    3: 'autumn'
}
let seasonNumber = 3

if (seasonNumber == 0) {
    console.log(seasons[0])
} 
else if (seasonNumber == 1) {
        console.log(seasons[1])
}
else if (seasonNumber == 2) {
        console.log(seasons[2])
}
else if (seasonNumber == 3) {
        console.log(seasons[3])
}


// Задача №5
// Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє між цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.


let a = 1
let b = 3
let c = 2

//середнє b
if (a < b && a < c) {
    if (b > a && b < c) {
        if (c > a && c > b) {
            console.log(b)
        }
    }
}
else if (a > b && a > c) {
    if (b < a && b > c) {
        if (c < a && c < b) {
            console.log(b)
        }
    }
}

//середнє a
else if (a > b && a < c) {
    if (b < a && b < c) {
        if (c > a && c > b) {
            console.log(a)
        }
    }
}
else if (a > c && a < b) {
    if (b > a && b > c) {
        if (c < a && c < b) {
            console.log(a)
        }
    }
}

//середнє с
else if (c > a && c < b) {
    if (b > c && b > a) {
        if (a < b && a < c) {
            console.log(c)
        }
    }
}
else if (a > b && a > c) {
    if (b < a && b < c) {
        if (c < a && c > b) {
            console.log(c)
        }
    }
}

// Задача №6
// Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

let Wednesday = 3

switch(Wednesday){
    case 1: 
        console.log('Monday');
        break;
    case 2: 
        console.log('Tuesday');
        break;
    case 3: 
        console.log('Wednesday');
        break;
    case 4: 
        console.log('Thursday');
        break;
    case 5: 
        console.log('Friday');
        break;
    case 6: 
        console.log('Saturday');
        break;   
    case 7: 
        console.log('Sunday');
        break;     
}


//Задача №7
// За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для "+", "-", "*", "/".
//     Результат виводити в консоль.

let minus = 10 - 5
let plus = 10 + 5
let multiply = 10 * 5
let divide = 10 / 5

switch(divide){
    case 5: 
        console.log(minus);
        break;
    case 15: 
        console.log(plus);
        break;
    case 50: 
        console.log(multiply);
        break;
    case 2: 
        console.log(divide);
        break;  
}


// Задача №8
// Використовуючи властивості рядків(тип, string), та регулярний вираз(regular, expression) видалити голосні букви зі слова.
        
let wordName = 'wooord'
const regExp = /o/g;
console.log(wordName.replace(regExp, ''))

// Задача №9
// Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.


let meters = 20
if (meters % 10 == 1 && Math.floor(meters / 10) !== 1 && meters % 100 > 13 || meters == 1) {
    console.log(meters, 'метр;', meters / 1000, 'кілометра')
}
else if (meters % 10 == 2 && meters % 100 !== 12 || 
    meters % 10 == 3 && meters % 100 !== 13 || 
    meters % 10 == 4 && meters % 100 !== 14 ||
    meters >= 22000 ||
    meters >= 2000 && meters <= 4000) {
        console.log(meters, 'метри;', meters / 1000, 'кілометра')
    }
else if (meters % 10 == 0 || (meters % 10) >= 5 || (meters % 100) >= 11 && (meters % 100) <= 20) {
    if (meters == 0 || meters >= 5000 && (meters % 10) == 0 && meters != 21000) {
        console.log(meters, 'метрів;', meters / 1000, 'кілометрів')
    }
    else if (Math.floor(meters / 1000) % 10 || Math.floor(meters / 1000)) {
        console.log(meters, 'метрів;', meters / 1000, 'кілометр')
    }
    else if ((meters % 10) >= 0) {
        console.log(meters, 'метрів;', meters / 1000, 'кілометра')
    }
}


