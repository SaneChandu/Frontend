let car= {
    brand:"audi",
    model: "A2",
    year:2020,
   
}
console.log(car.brand);
console.log(car.model);
console.log(car.year);

/*empty set and delte object*/
let person2={};
    
person2.firstname="chandana";
person2.lastname="sane";
person2.age=22;
delete person.age;
console.log(person2);

/*checking for property*/
let book={
    title:"Wings of Fire",
    Author:"A.P.J.Abdul kalam"
};
function hasproperty(obj,key){
    return key in obj;
}
console.log(hasproperty(book,'title'));
console.log(hasproperty(book,'year'))

/*looping through objects*/

let student={
    name:"chandu",
    age:21,
    grade:"A"


};
for (let key in student){
    console.log(`${key}:${student[key]}`);
}

/*counting properties in an object*/

function countProperties(obj){
    let count=0;
    for(let key in obj){
       
        count++;
        }
        return count;
}
let user={
    name:"zoe",
    age:19,


};
console.log(countProperties(user));

/*objects with methods*/
const calculator={
    num1:3,
    num2:7,
    add(){
        return this.num1+this.num2;
    },
    subtract(){
        return this.num1 - this.num2;
    }
};
console.log(calculator.add());
console.log(calculator.subtract());

/*cloning an object*/
let user2={
    name:"niha",
    age:22,
};
function cloneobject(obj){
    let clone ={};
    for (let key in obj){
        clone[key]=obj[key];

    }
    return clone;

}
let userclone=cloneobject(user);
console.log(userclone);

/*merging objects*/
let userInfo1={
    name:"jaya",

};
let userInfo2={
    age:24,
    city:"Ananthapur",
};
let merged =Object.assign({},userInfo1,userInfo2);
console.log(merged);

/*objects with default values*/
function createuser(name,age,role="user"){
   return{
    name: name,
    age: age,
    role: role

};
}
let newuser=createuser("rama",25);
console.log(newuser);

/*nested objects*/
let company={
    name:'capgemini',
    employees:[
        {name:'chandana',position:'intern'},
        {name:'nithish',position:'Developer'}

    ]

};
console.log(company.employees[0].name);
console.log(company.employees[1].positon);

//converting objects to arrays
let fruitPrices={
    apple:2,
    banana:1,
    cherry:3
};
function getKeys(obj){
    return Object.keys(obj);
}
function getValues(obj){
    return Object.values(obj);
}
console.log(getKeys(fruitPrices));
console.log(getValues(fruitPrices));





