//Задача №1
// Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

const taskOne = function (hamburgers, visitors, fries) {
    if (hamburgers >= visitors && fries > 0) {
        console.log('Ми поїли')
    } else {
        console.log('Ми йдемо в інше кафе')
    }
}

taskOne(6, 4, 1)

//Задача №2
// Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.

const taskTwo = function (price) {
    if (price >= 1000 && price <= 1900) {
        console.log('Ціна в діапазоні')
    } else {
        console.log('Ціна поза діапазоном')
    }
}

taskTwo(1500)

// Задача №3
// Напишіть конструкцію if, що перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
// Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
// Результат виводити в консоль.

const taskThree = function (price1) {
    if (price1 < 1000 || price1 > 1900) {
        console.log('The price is NOT between 1000 and 1900')
    } else {
        console.log('...between 1000 and 1900')
    }
}

taskThree(1000)

// Задача №4
// За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

const taskFour = function (seasonNumber) {
    let seasons = {
        0: 'summer',
        1: 'winter',
        2: 'spring',
        3: 'autumn'
    }
    if (seasonNumber == 0) {
        console.log(seasons[0])
    } else if (seasonNumber == 1) {
        console.log(seasons[1])
    } else if (seasonNumber == 2) {
        console.log(seasons[2])
    } else if (seasonNumber == 3) {
        console.log(seasons[3])
    } else {
        console.log('Выбран несуществующий сезон')
    }
}

taskFour(3)

// Задача №5
// Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє між цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

const taskFive = function (a, b, c) {
    //середнє b
    if (b > a && b < c) {
        if (a < b && a < c) {
            if (c > a && c > b) {
                console.log(b)
            }
        }
    } else if (b < a && b > c) {
        if (a > b && a > c) {
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
    } else if (a > c && a < b) {
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
    } else if (a > b && a > c) {
        if (b < a && b < c) {
            if (c < a && c > b) {
                console.log(c)
            }
        }
    }
}

taskFive(2, 3, 1)

// Задача №6
// Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

const taskSix = function (Wednesday) {
    switch (Wednesday) {
        case 1:
            console.log('Monday')
            break
        case 2:
            console.log('Tuesday')
            break
        case 3:
            console.log('Wednesday')
            break
        case 4:
            console.log('Thursday')
            break
        case 5:
            console.log('Friday')
            break
        case 6:
            console.log('Saturday')
            break
        case 7:
            console.log('Sunday')
            break
    }
}

taskSix(6)

//Задача №7
// За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для "+", "-", "*", "/".
//     Результат виводити в консоль.

const taskSeven = function (mathSymbol, x, y) {
    switch (mathSymbol) {
        case '+':
            console.log(x + y)
            break
        case '-':
            console.log(x - y)
            break
        case '*':
            console.log(x * y)
            break
        case '/':
            console.log(x / y)
            break
    }
}

taskSeven('+', 2, 2)
