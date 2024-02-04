/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Mon = 1,
  Thu = 2,
  Wen = 3,
  Th = 4,
  Fr = 5,
  Sat = 6,
  Sun = 7,
}

const isWeekend = (day: Days): boolean => day > 5;
