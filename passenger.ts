class Passenger{
    firstname:string;
    lastname:string;
    frequentFlyerNo:number;

    constructor(firstname:string,lastname:string,frequentFlyerNo:number){
        this.firstname=firstname;
        this.lastname=lastname;
        this.frequentFlyerNo=frequentFlyerNo;
    }
}

var passenger = new Passenger("venkat","yadav",123);
console.log(passenger.firstname+" "+passenger.lastname+" "+passenger.frequentFlyerNo);