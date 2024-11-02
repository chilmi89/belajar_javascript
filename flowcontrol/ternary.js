// ternay operator
// Ternary operator membutuhkan tiga operan dengan urutan seperti berikut:
// Kondisi yang ingin diperiksa ditulis sebelum tanda tanya (?)
// Ekspresi yang dieksekusi jika kondisinya benar.
// Ekspresi yang dieksekusi jika kondisi salah.



const harga = 10000;
const iscorrect = true;
const diskon = iscorrect ? 0.1 : 0;


console.log('selamat anda mendapatkan diskon', (harga * diskon))




// switcch case operator


const barang = 'tenda';

switch (barang ){
    case 'tenda':
        console.log('tenda')
        break;
    case  'tenda2':
        console.log('tenda2')
        break;
    default:
        console.log('tidak ada barang')
};


const day = new Date().getDate();


if  (day === 0) {
        console.log('ini adalah hari minggu');
       
}else if (day === 1) {
        console.log('ini adalah hari senin');
       
}else if (day === 2) {
        console.log('ini adalah hari selasa');
       
}else if (day === 3) {
        console.log('ini adalah hari rabu');
       
}else if (day === 4) {
        console.log('ini adalah hari kamis');
       
}else if (day === 5) {
        console.log('ini adalah hari jumat');
       
}else if (day === 6) {
        console.log('ini adalah hari sabtu');
       
}else if (day === 7) {
        console.log('ini adalah hari minggu');
       
}else {
        console.log('tidak ada hari');
}


const day_in = new Date().getDay();
console.log(day_in)

switch  (day_in) {
    case 0:
         console.log('ini adalah hari minggu');
        break;
    case 1:
         console.log('ini adalah hari senin');
         break;
    case 2:
         console.log('ini adalah hari selasa');
         break;
    case 3:
         console.log('ini adalah hari rabu');
         break;
    case 4:
         console.log('ini adalah hari kamis');
         break;
    case 5:
         console.log('ini adalah hari jumat');
         break;
    case 6:
        console.log('ini adalah hari sabtu');
    break;
    default:
        console.log('tidak ada hari');
}
