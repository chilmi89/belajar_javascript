

// // contoh impure function


// let value = 0;

// function AddWidht(AddValue){
//     value += AddValue;
//     console.log(value);
//     return value;
//     }


// const angka1 = AddWidht(5);
// const angka2 = AddWidht(10);
// const angka3 = AddWidht(15);
// console.log(angka1, angka2, angka3);

// console.log("=================================================================")

// // contoh pure function

// function AddWidht1(value ,AddValue){
//     return value + AddValue;
//     }

// const angka4 = AddWidht1(5,10);
// const angka5 = AddWidht1(10,15);
// const angka6 = AddWidht1(15,20);
// console.log(angka4, angka5, angka6);









function mergeSettingProfile(defaultSetting , userSetting){
    return {
        ...defaultSetting,
        ...userSetting
    }
}

// contoh pure function
function CalculateTotalPrice(OrderItems){
    return OrderItems.reduce((total,item) => {
         return total + item.price * item.quantity},0);
};

const OrderItems = [
    {price : 10000 , quantity : 2},
    {price : 20000 , quantity : 3},
    {price : 30000 , quantity : 1}
];


const TotalPrice = CalculateTotalPrice(OrderItems);
console.log(TotalPrice); // Output: 70000




function GetActiveUsername(users){
    return users
    .filter((user) => user.isActive)
    .map((user) => user.username);

};

const users = [

    {username : 'john', isActive : true },
    {username : 'jane', isActive : true },
    {username : 'jack', isActive : true },
];

const activeUsernames = GetActiveUsername(users);
console.log(activeUsernames); // Output: ['john', 'jack'] 




function buatProfilPengguna(pengguna, alamat) {
    if (!alamat) {
        throw new Error(`Alamat tidak ditemukan untuk pengguna dengan id: ${pengguna.id}`);
    }

    return {
        id: pengguna.id,
        namaPengguna: pengguna.namaPengguna,
        email: pengguna.email,
        alamat: {
            kota: alamat.kota,
            negara: alamat.negara,
            jalan: alamat.jalan,
        },
    };
}

const pengguna = [
    { id: 1, namaPengguna: 'john', email: 'john@gmail.com' },
    { id: 2, namaPengguna: 'jane', email: 'jane@gmail.com' },
];

const alamat = [
    { kota: 'New York', negara: 'USA', jalan: '123 Main Street' },
    { kota: 'London', negara: 'UK', jalan: '456 Oxford Street' },
];

// Pastikan jumlah `pengguna` dan `alamat` sama
if (pengguna.length !== alamat.length) {
    console.error("Error: Jumlah pengguna dan alamat tidak cocok!");
} else {
    const profilPengguna = pengguna.map((penggunaItem, index) =>
        buatProfilPengguna(penggunaItem, alamat[index])
    );
    console.log(profilPengguna);
} 





