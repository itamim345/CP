let arr = [23,43,2,12,500,0,45,1,76,5,7,13];
function findSmallest(){
  // sort the array
  arr.sort(function (a, b) {
    return a - b;
  });
  //return 1st index to get min value as We sorted the array
  return (arr[0]);
}
// Console log to print the value in console
console.log(findSmallest());
