var C = function () {
  this.f = function (foo) {
    console.log(foo);
  };
};

var a = [];
for (var i = 0; i < 1000000; i++) {
  a.push(new C());
}
