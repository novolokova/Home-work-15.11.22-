// Написати функцію, яка запитує в користувача число з діапазону до тих пір,
// доки він його не введе функція брудна, приймає початок і кінець діапазону,
// а повертає виключно коректне число числового типу!!!!!!

/**
 *
 * @param {string} MIN_NUM
 * @param {string} MAX_NUM
 * @returns {number}
 */
const guessNumber = function (MIN_NUM = 15, MAX_NUM = 35) {
  while (true) {
    const input = prompt("Enter Number");

    if (input != "" && !isNaN(Number(input)) && input != null && input != " ") {
      if (input > MIN_NUM && input < MAX_NUM) {
        return Number(input);
      }
    }
  }
};

//guessNumber(2, 55);

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
const findNumber = function (START_RANGE = 0, END_RANGE = 100) {
  for (let i = END_RANGE; i > START_RANGE; i -= 2) {
    if (i % 9 != 0) {
      continue;
    }
    showOutput(i);
  }
};
findNumber();
