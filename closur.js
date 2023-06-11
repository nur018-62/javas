console.log("this is courel");



function main(){
    let num=0;
    return function(){
        num++;
        return num;
    }
}
const sub = main();//fist call out put first num 
console.log(sub());
console.log(sub());

const suc=main();//second call out put first num agin afrer first call
console.log(suc());