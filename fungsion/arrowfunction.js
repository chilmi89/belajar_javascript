// arrow function
// Function expression benar-benar bisa mengubah cara kita membuat function.
// Namun, ada alternatif sintaksis lain dalam JavaScript yang bisa lebih mengubah cara kita membuat function.
// Sintaksis tersebut bernama arrow function. Yap, ini cara baru yang bisa kita manfaatkan dalam membuat function.

// Mari kita pelajari sintaksis ini.


const suhu = (temperatur) => {

    const hasil =  (9 / 5) * temperatur + 32

    return hasil   
}

//  arrow function ternary
const suhu2 = (temperatur) => (9 / 5) * temperatur + 32 

const mencari_suhu = suhu(20)
const mencari_suhu1 = suhu2(20)



console.log(mencari_suhu)
console.log(mencari_suhu1)



