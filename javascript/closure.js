function outerfunction(){
    let counter=0;

    function innerfunction(){
        counter++;
        return counter;

    }
    return innerfunction;
}
const incrementcounter=outerfunction();

console.log(incrementcounter());
console.log(incrementcounter())