function maxMin(array) {
    // Write your code here
    let result = {max : undefined, min : undefined};
    for (let i = 0; i < array.length; i++) {
        if(result.max == undefined || array[i] > result.max){
            result.max = array[i];
        }else if(result.min == undefined || array[i] < result.min){
            result.min = array[i];
        }  
    }
    return result;
}  

console.log(maxMin([31, 9, 54, 0, 43, 6, 67]));