function Aply(operation , ...args){
    return operation(...args)
}

function sum(a,b,c){
    return a + b + c;
}

function discount(disc , value){
    return value - ((disc / 100) * value)
}

const ProductPrice = Aply(sum , 20 ,30 , 40);
const GetDiscount = Aply(discount , 10 , ProductPrice);

console.log(`Product Price = ${ProductPrice}`);
console.log(`Discount = ${GetDiscount}`);



console.log(`=============================================`)


function adjectivfy(adjective){
    return function(noun){
        return `${adjective} ${noun}`;
    }
}

function MultiplyBye(x){
    return function(y){
        return x * y;
    };

};


const coolifier = adjectivfy('cool');
const superCoolifier = adjectivfy('super cool');

const multipleByFive = MultiplyBye(5);

console.log(coolifier('chilmi'));
console.log(superCoolifier('chilmi'));

console.log(multipleByFive(7)); // Output: 35
console.log(multipleByFive(10));


console.log(`========================`)


// Fungsi Addone menambahkan 1 pada nilai x yang diberikan
function Addone(x) {
    return x + 1;
}

// Fungsi Square mengalikan nilai x dengan dirinya sendiri
function Square(x) {
    return x * x;
}

// Fungsi Compose menerima dua fungsi, f dan g, dan mengembalikan fungsi baru
// yang menerapkan g pada input dan kemudian menerapkan f pada hasilnya
function Compose(f, g) {
    return (x) => {
        return f(g(x));
    };
}

// Membuat fungsi baru AddOneAndSquare, yang pertama-tama menambahkan 1
// pada input, kemudian mengkuadratkan hasilnya
const AddOneAndSquare = Compose(Square, Addone);

// Mencetak hasil dari menjalankan AddOneAndSquare dengan input 2
// Hasil akhirnya adalah 9, karena (2 + 1)^2 = 9
console.log(AddOneAndSquare(2));
 
