class car {
    constructor(brand,model){
        this.brand=brand;
        this.model=model;

    }
    start(){
        console.log(`${this.brand} of  ${this.model} model car is started`);
    }
    drive(){
        console.log(`${this.brand}  ${this.model} is driving `);
    }
}
const mycar=new car('audi','a6');
mycar.start();

class ElectricCar extends car{
    constructor(brand,model,batteryCapacity){
    super(brand,model)
    this.batteryCapacity=batteryCapacity;
    }
    charge(){
        console.log(`${this.brand} ${this.model} is charging with ${this.batteryCapacity} capacity`);
    }
}
const myEcar=new ElectricCar('tesla','model s','100kmph');
myEcar.start();
myEcar.charge();