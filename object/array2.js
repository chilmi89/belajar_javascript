const user = {
    name : "achmad",
    last_name : "chilmi",
    age : 20
}


// akses properti array menggunakkan global object

console.log(user)

// askses properti menggunakan dot notation

console.log(`ini adalah akses properti menggunakan dot notation`,user.name , user.last_name , user.age)


// akses properti menggunakan bracket notation
console.log(`ini adalah akses properti menggunakan bracket notation`,user['name'] , user['last_name'] , user['age'])


// menambahkan properti baru

const {name , last_name , age} = user;
console.log(`ini adalah akses properti menggunakan object destructuring`,name , last_name , age)


// mengubah nilai properti di dalam array 
user.name = "shynix";
console.log(user.name , 'nama berhasil di ubah terimakasih')    


//  menghapus nilai menggunakan delete

delete user.age;
console.log(user)