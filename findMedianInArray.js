let arr = [11, 2, 3, 4];
// [2,3,4,7,11]

function findMedian (){
  // 1. sort the array
  arr.sort((a, b) => {
    return a - b;
  });
  //2. if it is odd, find median value
  let midIndex = arr[Math.floor(arr.length / 2)];
  //3. find lowerIndex incase of even number
  let lowerIndex = arr[arr.length / 2 - 1];
  
  //4.Applying Logic
  if(arr.length%2 == 0){
    return (midIndex + lowerIndex) / 2;
  }else {
    return midIndex;
  }
}

console.log(findMedian())
 

