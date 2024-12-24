const myPromise=new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("error");
    },2000);
})
myPromise
   .then((message) => {
    console.log(message);
})
.catch((message)=>{
    console.log(error);
})







let ans=new Promise((resolve, reject) => {
    let a=Math.random()
    if(a>0.5){
        resolve("Greater")
    }else{
        reject("Smaller")
    }
       
})
ans
.then((e)=>{console.log(e)})
.catch((e)=>{console.log(e)})

