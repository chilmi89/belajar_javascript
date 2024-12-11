
// fungsi imperatif

const names = [
    'achmad',
    'chilmi',
    'shynix'
];


const NewNameWithExmark = [];


for(let i = 0 ; i < names.length ; i++){
    NewNameWithExmark.push(`${names[i]}!`);
}


console.log(NewNameWithExmark)



// contoh fungsional programming

const names2 = ['achmad1' , 'chilmi1' , 'shynix89'];

const NewNameWithExmark2 = names.map((name) => `${name}!`);

console.log(NewNameWithExmark2)


