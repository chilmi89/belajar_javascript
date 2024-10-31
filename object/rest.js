// rest operator digunankan untuk menerima banyak argumant pada function atau method

function sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number
    }
    return total
};


console.log(`total dari 1 sampai 10 = ${sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}`)



// campuran data dengan rest operator dengan arrow function 
const obj = (name, ...values) => {
    console.log(name, values)
}


const angka = obj(
    'angka => ',
     1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    );

console.log(angka);
