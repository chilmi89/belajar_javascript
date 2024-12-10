/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */

// Class Animal
class Animal {
    constructor(name, age, isMammal) {
        this.name = name;     // Nama hewan
        this.age = age;       // Usia hewan
        this.isMammal = isMammal; // Apakah hewan mamalia
    }
}

// Class Rabbit, turunan dari Animal
class Rabbit extends Animal {
    constructor(name, age) {
        super(name, age, true); // `isMammal` selalu true untuk Rabbit
    }

    // Method eat
    eat() {
        return `${this.name} sedang makan!`;
    }
}

// Class Eagle, turunan dari Animal
class Eagle extends Animal {
    constructor(name, age) {
        super(name, age, false); // `isMammal` selalu false untuk Eagle
    }

    // Method fly
    fly() {
        return `${this.name} sedang terbang!`;
    }
}

// Membuat instance dari Rabbit
const myRabbit = new Rabbit("Labi", 2);
console.log(myRabbit.eat()); // Output: Labi sedang makan!

// Membuat instance dari Eagle
const myEagle = new Eagle("Elo", 4);
console.log(myEagle.fly()); // Output: Elo sedang terbang!
