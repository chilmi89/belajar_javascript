class Person{
    // construktor di dalam class
    // paramater name dan age
    constructor(name , age){

        // attribut  this name dan age
        this.name = name;
        this.age = age;
    }
        // method eat
    eat(){
        console.log(`${this.name} is eating`);
    };

}

// inisialisasi objek 
const person1 = new Person('achmad' , 20);
const person2 = new Person('chilmi' , 20);


// cetak output
console.log('person 1 = ', person1);
console.log('person 2 = ', person2);

// memanggil method dari dalam class dan menggabungkan nya dengan objek
person1.eat()
person2.eat()