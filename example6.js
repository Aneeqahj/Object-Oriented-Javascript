// Object.create = function (o) {
//   var F = function () {};
//   FontFace.prototype = o;
//   return new F();
// };

var vehicle = {};
vehicle.drive = function () {
  console.log("vrooom.....");
};

var car = Object.create(vehicle);
car.honk = function () {
  console.log("honk honk");
};

var myCar = Object.create(car);

myCar.honk();
myCar.drive();
