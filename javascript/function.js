let person={
    name:"niha"

}
let person2={
    name:"vandu"
    
}


function greet(greet1,greet2){
    console.log(greet1 +" "+this.name+" "+greet2);

}
greet.call(person,"hello","How are you?");
greet.apply(person2,["hello","How are you"]);

var person3=greet.bind(person2);
greet.bind(person3,"hi","hello");
