'use strict';

const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// Удалить первый элемент массива
console.log(users); // ["Poly", "Ajax", "Chelsey"]
console.log(users.shift()); 
console.log(users); 
// Удалить последний элемент массива
console.log(users.pop()); 
console.log(users); // ["Poly", "Ajax"]

// Добавить в начало массива пользователя "Lux"
console.log(users.unshift('Lux'));
console.log(users);  // ["Lux", "Poly", "Ajax"]

// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
console.log(users.push('Jay' , 'Kiwi'));
console.log(users);  //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// Удалить из массива элемент хранящийся в переменной userToDelete
const userToDelete = 'Ajax';
console.log(users);

for ( let i = 0 ; i < users.length ; i += 1 ) {
  if ( userToDelete === users[i] ) {
       users.splice ( i , 1);
  }} 
  console.log(users)//  ["Lux", "Poly", "Jay", "Kiwi"]

// Добавить в массив пользователя хранящегося в переменной userToInsert,
// перед пользователем хранящимся в переменной insertBefore
const userToInsert = 'Kong';
const insertBefore = 'Jay';
console.log(users.splice(2, 0, userToInsert));
console.log(users) //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"