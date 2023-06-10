console.log("argument");
function add(num1,num2){
    console.log(arguments);
    return num1+num2;
}
const re=add(20,50,60,69)

function add(num1,num2){
    console.log(arguments);
    return num1+num2+arguments[2];
}
const rel=add(20,50,60)
console.log(rel)//for add with argument

function jug(num1,num2){
    console.log(...arguments);
    return num1+num2+arguments[2];
}
const jugrel=jug(20,4,5);
console.log(jugrel);
