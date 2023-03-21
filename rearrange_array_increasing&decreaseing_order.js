let arr = [10,30,20,40,60,50];

function rearrangeArray (){
    let sortedArr = arr.sort((a, b) => {
      return a - b;
    });

    //console.log(sortedArr);

    for(let i = 0; i< sortedArr.length/2; i++){
        console.log(sortedArr[i]);
    }
    for (let i = sortedArr.length - 1; i >= sortedArr.length / 2; i--) {
      console.log(sortedArr[i]);
    }
}
rearrangeArray()
