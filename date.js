console.log("date");

const start= new Date();
let sum =0;
for(let i=0;i<100000000;i++){
    sum++;
}
const last=new Date();
console.log('time spend',last-start,sum);
