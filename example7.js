var vehicle = {};
vehicle.drive = function () {
  console.log("vroom..");
};

var car = Object.create(vehicle);
car.honk = function () {
  console.log("honk honk");
};

var myVehicle = Object.create(vehicle);
var myCar1 = Object.create(car);
var myCar2 = Object.create(car);

myCar1.honk();
myCar2.honk();

myVehicle.drive();
myCar1.drive();
myCar2.drive();

var c = {};
c.f = function (foo) {
  console.log(foo);
};

var a = [];
for (var i = 0; i < 1000000; i++) {
  a.push(Object.create(c));
}
