var Passenger = /** @class */ (function () {
    function Passenger(firstname, lastname, frequentFlyerNo) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.frequentFlyerNo = frequentFlyerNo;
    }
    return Passenger;
}());
var passenger = new Passenger("venkat", "yadav", 123);
console.log(passenger.firstname + " " + passenger.lastname + " " + passenger.frequentFlyerNo);
