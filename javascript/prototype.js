let person2={
    name:"sahasra",
}

let person3={
    age:21,
}
let person4={
    gender:"Female"
};

person3.__proto__=person2;
person4.__proto__=person3;
console.log(person3.name);
console.log(person3.age);
console.log(person4.name);
console.log(person4.gender);

let student={
    branch:"cse",
    branch(){
        console.log("cse")

    }
};
let student2={
    year:"2nd year",
    __proto__:student
};
student2.branch();
console.log(student2);

