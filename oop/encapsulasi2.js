class CoffeMachine {
    constructor(water_amount) {
        this.water_amount = water_amount;
        this._temperatur = 100;
    }

    set Temperatur(temperatur) {
        console.log(`kamu tidak dapat mengubah temperatur ${temperatur}`);
    }

    get Temperatur() {
        return this._temperatur;
    }
}

const coffe = new CoffeMachine(100);
console.log('sebelum diubah', coffe.Temperatur);

coffe.Temperatur = 60;

console.log('sesudah diubah', coffe.Temperatur);









