class SmartPhone{
    constructor(name , brand , model){
        this.name = name;
        this.brand = brand;
        this.model = model;
    };

    charging(){
        console.log(`${this.name} is charging`);
    }
}

class Android extends SmartPhone{
    constructor(name , brand , model){
        super(name , brand , model);
        this.device = "Android";
    };

    Splitscreen(){
        console.log(`${this.name} is splitscreen`);
    };
};

class IOS extends SmartPhone{
    constructor(name , brand , model){
        super(name , brand , model);
        this.device = "IOS";
    };

    airDrop(){
        console.log(`${this.name} is airDrop`);
    }

};


const Iphone1 = new IOS('red' , 'apple' , 'iPhone 11');
const iphone2 = new IOS('blue' , 'apple' , 'Iphone 12 pro max');

const Android1 = new Android('blue', 'samsung', 'Galaxy S10');
const Android2 = new Android('red', 'samsung', 'Galaxy S20');

console.log(Iphone1);
console.log(iphone2);



console.log(Android1);
console.log(Android2);
