console.log("this is slice");

const num= [3,23,45,6,3,2,8];
const sub=num.slice(3,5);
console.log(sub);
console.log(num);//slice mean delet num from array but the main array don't change
//its splice method

const num1= [3,23,45,6,3,2,8];
const sub2=num1.splice(3,3);//that mean delt index from 3 no and 3 index ar delt.and add num and main array is changed without 3 num
console.log(sub2);
console.log(num1);
