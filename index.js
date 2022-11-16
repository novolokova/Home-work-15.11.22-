// Написати функцію, яка запитує в користувача число з діапазону до тих пір,
// доки він його не введе функція брудна, приймає початок і кінець діапазону,
// а повертає виключно коректне число числового типу!!!!!!

const START_RANGE = 0;
const END_RANGE = 100;
/**
 *
 * @param {string} start
 * @param {string} end
 * @returns {number}
 */
const guessNumber = function (start = 0, end = 100) {
  while (true) {
    const input = prompt("Enter Number");

    if (
      input !== "" &&
      !isNaN(Number(input)) &&
      input !== null &&
      input !== " " &&
      input > start &&
      input < end
    ) {
      return Number(input);
    }
  }
};

//console.log(guessNumber(2, 18));

// Написати скрипт, який виводить числа (числа повинні бути парними і кратними 9)
// з діапазону від 0 до 100 у зворотньому порядку.(* - це повинна бути функція)

/**
 *
 * @param {number} value
 * @returns {undefined}
 */
const showOutput = function (value) {
  console.log(value);
  return;
};

/**
 *
 * @param {number} start
 * @param {number} end
 */
const findNumber_1 = function (start = 0, end = 100) {
  for (let i = end; i > start; i--) {
    if (i % 2 === 0 && i % 9 === 0) {
      showOutput(i);
    }
  }
};
//findNumber_1();

// другий варіант, але тільки до діапазону (0-100)
/**
 *
 * @param {number} start
 * @param {number} end
 */
const findNumber_2 = function (start = 0, end = 100) {
  for (let i = end; i > start; i -= 2) {
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
