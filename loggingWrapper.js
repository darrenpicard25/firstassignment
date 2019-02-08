var wrapLog = function (callback, name) {
  /* your code here */
  return function(...args) {
    let numbersOutput = args.join(',');
    console.log(`${name}(${numbersOutput}) => ${callback(...args)}`);
  };

};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24

var something = function (a,b,c,d,e) {
  return a*b*c*d*e;
};

var unreal = wrapLog(something, "Not real");

unreal(3,4,5,6,7);
unreal(3,4,5,4,7);