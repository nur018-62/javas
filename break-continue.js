console.log("this is break");

/*const num=[1,2,3,4,5,6,7];
for(let i=0; i<num.length;i++){
    console.log(num[i])
}
*/
// it is normal role
/*const num=[1,2,3,4,5,6,7,8,9];
for(let i=0; i<num.length;i++){

    if(num[i]>6){
        break;
    }
    console.log(num[i]);
};*/ //it is break end of 6 arroy

const num=[-1,-2,-3,-4,5,6,7];
for(let i=0; i<num.length;i++){
    if(num[i]<0){
        continue;
    }

    console.log(num[i])
}
// continue means that it ignore - num in this arroy by contition