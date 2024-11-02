// For Loop
// Pertama, kita akan bahas for loop. Struktur dari for loop tampak seperti berikut ini.


for (let i = 0; i < 10; i++) {
    console.log(i);
}



const person = {
    name : 'achmad',
    origin : 'kediiri',
    age : 20
}


// menggunakan for in

for (const i in person) {
    console.log(`${i} = ${person[i]}`);
}


const daftar_nama = ['achmad', 'chilmi', 'shynix'


];


// menggunakan for of

for (const data of daftar_nama){
    console.log(data);
}


// While
// Perulangan di JavaScript tak hanya menggunakan for, tetapi ada cara lainnya yaitu while statement. 
// While statement akan mengeksekusi statement ketika kondisinya bernilai truthy.

let i = 0

while (i < 10) {
    console.log(i);
    i++;
}


// Do-While
// Sebenarnya, while dan do-while tidak berbeda jauh. Perbedaan mereka terdapat pada urutan pengecekan kondisi. 
// While melakukan evaluasi kondisi di awal, sedangkan do-while melakukannya di akhir.


let a = 0 ; 

do {
    console.log(a);
    a++;
} while (a < 10);



// Break
// Break statement adalah cara kita untuk memberitahukan interpreter yang sedang mengeksekusi kode
// untuk berhenti dan langsung berpindah ke akhir dari percabangan atau perulangan.


for (let i = 0; i < 10; i++) {
    if (i === 5){
        break
    }
    console.log(`ini adalah  perulangan ke ${i} menggunakan break`);

}

// for (let i = 0; i < 10; i++) {
//     if (i === 5){
//         continue   
//     }
//     console.log(`ini adalah  perulangan ke ${i} menggunakan continue`);
// }

