// Написати функцію, яка запитує в користувача число з діапазону до тих пір,
// доки він його не введе функція брудна, приймає початок і кінець діапазону,
// а повертає виключно коректне число числового типу!!!!!!

const MIN_NUM = 15;
const MAX_NUM = 35;

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

guessNumber(2, 55);
