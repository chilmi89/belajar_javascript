

// fungsi ini adalah mengembalikan fungsi 
// fungsi ini mengembalikan fungsi

function multiplier(x){
    return function (num){
        return x * num
    }
};

const single = multiplier(3);
const double = multiplier(5);

console.log(single(5))
console.log(double(5))


// Dapat disimpan sebagai nilai dalam variabel.
// Dapat dikembalikan dari suatu function.
// Dapat dikirimkan sebagai parameter bagi function lain.
// Dapat disimpan dalam elemen array dan object literal.
// Dapat memiliki method dan properties sendiri.