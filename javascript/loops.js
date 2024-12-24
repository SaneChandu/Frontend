for (let i=1;i<11;i++){
    console.log(i);
}

/*while*/
let j=1;
while(j<10){
    console.log(j);
    j++;
}

/*do while*/
let k=11;
do{
    console.log(k);
     (k++);
}while(k<15);

/*for..in*/
let person1={name:"chandu",age:21, city:"ATP"};
for (let key in person1){
    console.log(key + ':' +person1[key])
}

/*for..of*/
let arr=[10,20,30];
for (let value of arr){
    console.log(value);
}


