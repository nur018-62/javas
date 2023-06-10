console.log("object");

const students=[
    {id:21, name:"umor"},
    {id:22, name:"roni"},
    {id:23, name:"lukman"},
    {id:33, name:"jonkkar"}
];

const names=students.map(x=> x.name);
const ids=students.map(x=> x.id);
const bnam=students.filter(x=> x.id>23);
const bid=students.find(x=> x.id>22);
console.log(names);
console.log(ids)
console.log(bnam);
console.log(bid);
