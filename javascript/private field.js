class User{
    #password;
    constructor(username,password){
        this.username=username;
        this.password=password;
    }
    getPassword(){
        return this.#password;
    }
}
const user=new User("chandana","chandu");
console.log(user.getPassword())