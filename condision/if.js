// Mengimpor modul 'readline' untuk menangani input dari terminal
const readline = require('readline');

// Membuat antarmuka readline untuk input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});k 

// Menanyakan input kepada pengguna
rl.question('Masukkan Nama Anda: ', (name) => {
    console.log(`Halo, ${name}!`); // Menampilkan output di terminal
    rl.close(); // Menutup antarmuka readline
});


let mahasiswa = (nama) => {
    if (nama === 'achmad') {
        console.log(`Halo, ${nama}!`);
    }else{
        return `saya, ${nama}!`;
    }

}

let nama = mahasiswa("chilmi")

console.log(nama)
