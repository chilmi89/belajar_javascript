export function MakeCoffee() {
    const Estimate = 5000;


    const Insecond = Math.ceil(Estimate / 1000);
    console.log(`It will take ${Insecond} seconds`);

    setTimeout(() => {  
        console.log('Coffee is ready');

    }, Estimate);
}
