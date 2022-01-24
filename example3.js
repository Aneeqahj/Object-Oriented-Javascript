var Car = function () {};

Car.prototype.honk = function () {
  console.log("honk honk");
};

var myCar1 = new Car();
var myCar2 = new Car();

Car.prototype.drive = function () {
  console.log("vroom...");
};

myCar1.drive();
myCar2.drive();

Car.prototype.honk = function () {
  console.log("meep meep");
};

myCar1.honk();
myCar2.honk();
