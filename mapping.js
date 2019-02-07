var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];


var result = input.map( function (coord) {
  let z = Math.sqrt(coord.x*coord.x + coord.y*coord.y);
  return z;
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);






//input array of objects
//assign coordinate to represent object with two position in it
//we extract our x and y
// square each independentaly and add together then square root
//return value