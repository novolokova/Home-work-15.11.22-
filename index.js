// Написати функцію, яка запитує в користувача число з діапазону до тих пір,
// доки він його не введе функція брудна, приймає початок і кінець діапазону,
// а повертає виключно коректне число числового типу!!!!!!

const START_RANGE = 0;
const END_RANGE = 100;
/**
 *
 * @param {string} MIN_NUM
 * @param {string} MAX_NUM
 * @returns {number}
 */
const guessNumber = function (START_RANGE = 0, END_RANGE = 100) {
  while (true) {
    const input = prompt("Enter Number");

    if (input != "" && !isNaN(Number(input)) && input != null && input != " ") {
      if (input > START_RANGE && input < END_RANGE) {
        return Number(input);
      }
    }
  }
};

//console.log(guessNumber(2, 18));

// Написати скрипт, який виводить числа (числа повинні бути парними і кратними 9)
// з діапазону від 0 до 100 у зворотньому порядку.(* - це повинна бути функція)

/**
 *
 * @param {number} text
 */
const showOutput = function (value) {
  console.log(value);
};

/**
 *
 * @param {number} START_RANGE
 * @param {number} END_RANGE
 */
const findNumber_1 = function (START_RANGE = 0, END_RANGE = 100) {
  for (let i = END_RANGE; i > START_RANGE; i--) {
    if (i % 2 === 0 && i % 9 === 0) {
      showOutput(i);
    }
  }
};
//findNumber_1();

// другий варіант, але тільки до діапазону (0-100)
/**
 *
 * @param {number} START_RANGE
 * @param {number} END_RANGE
 */
const findNumber_2 = function (START_RANGE = 0, END_RANGE = 100) {
  for (let i = END_RANGE; i > START_RANGE; i -= 2) {
    if (i % 9 === 0) {
      showOutput(i);
    }
  }
};
//findNumber_2();

// Створити функцію конструктор, яка описує користувача:
// -ім'я
// -прізвище
// -вік
// - метод, який логує ім'я та прізвище разом

function User(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.fullName = function () {
    console.log(this.firstName + " " + this.lastName);
  };
}

const myName = new User("Marharyta", "Novolokova", 18);
console.log(myName);
myName.fullName();
