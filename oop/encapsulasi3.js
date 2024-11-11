class CoffeMachine{
    #temperatur = 90;
    constructor(water_amount)
    {
        this.water_amount = water_amount
        this.#temperatur = this.#defaultTemperatur()
    }

    set Temperatur(temperatur)
    {
        console.log(`kamu tidak dapat mengubah temperatur ${temperatur}`);
    };

    get Temperatur()
    {
        return this.#temperatur
    };
    
    #defaultTemperatur(){
        return this.#temperatur
        
    }
}   


const cofee1 = new CoffeMachine(100);
console.log("temperatur sebekum di ubah " + cofee1.Temperatur); //mencetak nilai default temperatur yang di protected
cofee1.Temperatur = 60; //mengubah nilai temperatur, tapi tidak akan berubah karena menggunakan setter
console.log("temperatur sebelum di ubah " + cofee1.Temperatur); //mencetak nilai default temperatur yang di protected, tidak berubah

// console.log(cofee1.#temperatur); // Error: Cannot read private member #tem
// cofee1.Temperatur = 100; // Error: Cannot set property Temperatur
// cofee1.water_amount = 100; // Error: Cannot set property water_amount
