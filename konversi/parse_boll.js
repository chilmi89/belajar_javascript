const angka = '123';
const string = 'false';
const empyt = null;


const parse_int = Boolean(angka);
const parse_string = Boolean(string);
const parse_empty = Boolean(empyt);


console.log(`parse boolean = ${parse_int} dan parse string = ${parse_string} dan parse empty = ${parse_empty}`)