class CoffeMachine{
    constructor(water_amount){
        this.water_amount = water_amount;
        this.temperatur = 100;
    };

    make_coffe(){
        console.log(`water amount : ${this.water_amount} dengan temperatur ${this.temperatur} derajat celsius`);
    }
}



const coffe1 = new CoffeMachine(100);
coffe1.temperatur = 60;
coffe1.make_coffe();
console.log(coffe1);
