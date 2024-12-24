function sumTh(){
    let sum=0
    for(let i=1;i<=1000;i++){
        return sum+=i
    }
        
};
const start=performance.now()
console.log(sumTh());
const end=performance.now()
console.log(end-start);