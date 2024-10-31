function multiply(a , b ){
    return a * b
}


function calculate(operation , a ,b ){
    return operation (a , b)
}



const result = calculate(multiply , 10 , 20)
console.log(result)