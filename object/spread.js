
// speard operator adalah fitur yang digunakan untuk menyebarkan nilai yang ada pada object dan array
const obj1 = {name : 'achmad', umur : 20}
const obj2 = {lastname : 'chilmi', alamat : 'kediri'}


const obj3 = {...obj1 , ...obj2}
console.log(obj3)

// spread operator dengan cara menggabungkan object
const originalOBJ = {name : 'achmad', umur : 20};
const newObj = {...originalOBJ , lastname : 'chilmi' , alamat : 'kediri'};
console.log(newObj);


// menggabungkan array dengan spread operator
const arr1 = [1,2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
const arr2 = [11,12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20]
const arr3 = [...arr1 , ...arr2]
console.log(arr3)


// menggabungkan 2 array menggunakan spread operator
const arr4 = [1,2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
const arr5 = [11,12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20]
const arr6 = [...arr4 , ...arr5]
console.log(arr6)