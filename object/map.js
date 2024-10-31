// membuat map
// menggunakan new Map
const map = new Map(
    [
        ['name' , 'achmad'],
        ['age' , 20]
    ]  
 );


console.log("belajar membuat map " , map);




// menyimpan nilai di map 

const MAP = new Map();
map.set('name' , 'achmad');
map.set('age' , 20);
console.log("belajar menyimpan nilai di map " , MAP)


// mengakses nilai menggunakan map 
console.log("ini adalah cara megakses map " , map.get('name')); // output : achmad


// menghapus nilai menggunakan map delete
map.delete('name');
console.log("ini adalah cara menghapus map " , map)
