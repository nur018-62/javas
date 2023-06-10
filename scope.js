console.log("scope");
let bonus=20;//this is a global,you can use this value any here 
function sum(first, second){
   const result = first + second;
   return result;

};
const output = sum(3,7);
//console.log(result)// this is scope you can get this value in out side of function
console.log(output);


function sum1(first, second){
    const resut = first + second;
    if(resut > 9){
        const mod="happy";
        console.log(mod);
              
    };
  
    return resut;
 
 };
 const output1 = sum1(3,7);
 console.log(output1);