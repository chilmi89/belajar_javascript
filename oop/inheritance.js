class SmartPhone{
    constructor(color , brand , model){
        this.color = color;
        this.brand = brand;
        this.model = model;
    };
    charging(){
        console.log('charging' , this.model);
    };
};

class IOS extends SmartPhone {
    airDrop(){
        console.log('airDrop' , this.model);
    }
};

class Android extends SmartPhone {
    Splitscreen(){
        console.log('Splitscreen' , this.model);
    }
};


const Iphone1 = new IOS('red' , 'apple' , 'iPhone 11');
const iphone2 = new IOS('blue' , 'apple' , 'Iphone 12 pro max');

const Android1 = new Android('blue', 'samsung', 'Galaxy S10');
const Android2 = new Android('red', 'samsung', 'Galaxy S20');


Iphone1.airDrop();
Iphone1.charging();

Android1.Splitscreen();
Android1.charging();

console.log(Iphone1);
console.log(iphone2);
console.log(Android1);
console.log(Android2);