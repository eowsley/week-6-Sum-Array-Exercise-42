/* function called sumArray, single argument: array of #s, 
return sum of all #s in array*/

function sumArray(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];      
    }
    return sum
}

console.log(sumArray([2,3,6,9]))