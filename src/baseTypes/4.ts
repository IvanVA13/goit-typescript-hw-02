/*
  Як переписати його в TypeScript, використовуючи концепцію кортежів, 
  щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
*/
type Person = [string, number];
let person: Readonly<Person> = ["Max", 21];

export {};
