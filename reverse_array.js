let arr = [3,4,7,8,9,12,34];
let arr2 = [];
function reverseArray(){
    for(let i = arr.length-1; i>=0; i--){
        arr2.push(arr[i]);
    }
    return arr2;
}
console.log(reverseArray());
