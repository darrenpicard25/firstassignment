var countdownGenerator = function (x) {
  /* your code here */
  x++;
  return function() {
    x--;
    if(x > 0) {
      console.log(`T-minus ${x}...`);
    } else if (x===0) {
      console.log("Blast Off!");
    } else {
      console.log("Rockets already gone, bub!");
    }
  };
};

var countdown = countdownGenerator(4);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!