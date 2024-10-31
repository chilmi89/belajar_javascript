
// 1. membuat array global 
const array = [1,2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
console.log(`array adalah array global ${array}`);

// 2. akses element array menggunakan index 
console.log(`akses element array = ${array[0]}`);

// 3. mengubah element array menggunakan index
array[3] = 'chilmi';
console.log(`mengubah element array  = ${array}`);

// 4. menambahkan element array menggunakan index
array[11] = 'achmad';
console.log(`menambahkan element array  = ${array}`);

// 5. menghapus element array menggunakan index
delete array[0];
console.log(`menghapus element array  = ${array}`);


// 6. menghapus element terakhit array
array.pop();
console.log(`menghapus element terakhit array  = ${array}`);


// 7. menghapus element pertama array
array.shift();
console.log(`menghapus element pertama array  = ${array}`);

// membuat array object constructor

const array1 = new Array();

console.log(`array1 adalah array yang dibuat dengan object constructor ${array1}`);

// array  from 
// Array.from merupakan method untuk membuat array yang diperkenalkan di ES6.

const array2 = Array.from('achmad');
console.log(`array2 adalah array yang dibuat dengan array from ${array2}`)


// penggunaan array from
const users = new Array('achmad' , 'shynix' , 'chilmi');
const customer = Array.from(users);

console.log(`customer adalah array from yang copy dari array customer ${customer}`)



const literalArray = ['apple', 'banana', 'cherry']

console.log(`literalArray adalah array yang dibuat dengan menggunakan metodde literal array ${literalArray}`)


