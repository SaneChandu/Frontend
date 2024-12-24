function createbook(title,author){
    return{
        title:title,
        author:author,
        describe:function(){
            console.log(`"${this.title}" by ${this.author}`);
        }
    }
}
const book1=createbook('1984','George Orwell');
const book2=createbook('Brave New World','Aldous Huxley');
book1.describe();
book2.describe();