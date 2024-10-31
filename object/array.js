const user = {};
const product = {name : " samsung" , price : 10000};

console.log(user);
console.log(product)


const array = () => {
    const user = {
        name : "achmad",
        age : 20
    };
    for (const key in user) {
        console.log(`${key} = ${user[key]}`);
    }
};

array(); 