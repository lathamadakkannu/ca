
let value1=prompt("Enter the first value");
let value2=prompt("Enter the second value");

let operation=(value1,value2,divide)=>{
    divide(value1,value2)
}

divide=(value1,value2)=>{
    let result=value1/value2
    document.write(`The division of two Numbers: ${result}`)
}
operation(value1,value2,divide)