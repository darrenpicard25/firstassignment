// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function (x,index) {
    if (x === "Waldo") {
      found(index);
    }
  });
}

function actionWhenFound(index) {
  console.log("Found him! At index: ", index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

//array.forEach(callBack... {currentValue, index, array})


