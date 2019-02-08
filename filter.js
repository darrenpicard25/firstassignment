// My filter Function
function myFilter(arr, callBack) {
  const arrayFiltered = [];
  for(let i=0; i < arr.length; i++) {
    const element = arr[i];
    if (callBack(element, i, arr)) {
      arrayFiltered.push(element);
    }
  }
  return arrayFiltered;
}

//All unfiltered lists
const unFilteredList = [1,2,4,77,44,22,34,1,6,8,77,6,4,3,100];


//Calling myFilter and setting up callback function
const newList = myFilter(unFilteredList, num => {
  return (num > 50);
});


//Print filtered lists
console.log(newList);