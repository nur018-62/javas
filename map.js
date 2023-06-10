console.log('map');

const num1=[3,5,6,7];
const sqre=num1.map(function(element){
   return element*element;
});
console.log(sqre);//for squre the number

//you can see with index and arry

const num=[3,5,6,7];
const sqr=num.map(function(element,index,array){
    console.log(element, index, array);
});
console.log(sqr);

