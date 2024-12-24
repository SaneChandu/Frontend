const person={
    name:"zoe",
    age:20,
    greet: function(){
        console.log(`Hello,my name is ${this.name},age is ${this.age}`);
    }
};
person.greet();


