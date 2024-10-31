// belajar set 
// menggunakan new Set
// menggnakan kurung siku 1 
// tidak memiliki indeks key dan value
const set = new Set(
    [
        'achmad',
        'chilmi'
    ]
); 



// menyimpan nilai di set
// menggunakan clause atau methode add

const set1 = new Set();
set1.add('achmad');
set1.add('chilmi');
console.log("belajar menyimpan nilai di set " , set1)

// mengakses nilai pada set menggunakan perulangan for of

for (const iterator of set1) {
    console.log("ini adalah cara mengakses set " , iterator)
};




// mengakses nilai menggunakan  perulangan foreach

set1.forEach(element => {console.log("ini adalah cara mengakses set menggunakan foreach " , element)});
set1.forEach((value) => console.log(value));


// menghapus nilai pada set 

set1.delete('achmad');
console.log("belajar menghapus nilai pada set " , set1)