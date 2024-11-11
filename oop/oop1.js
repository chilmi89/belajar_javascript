function Person (name , age ){
    this.name = name;
    this.age = age;
};


// pembuatan method dari construktor
Person.prototype.eat = function(){
    console.log(`${this.name} is eating`);
}


// membuat objek class dari class Person
const person1 = new Person('achmad' , 20);

// memanggil method eat
person1.eat();