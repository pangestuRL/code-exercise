function XO(str) {
    // Write your code here
    let oCount = 0;
    let xCount = 0;
    let result = true;
    for (let char of str.toLowerCase()) {
        if(char == `o`){
            oCount++
        }else if(char == `x`){
            xCount++
        }
    }
    if (oCount == xCount){
        result = true;
    }else{
        result = false;
    }
    return result;
}

console.log(XO(`mnnb`));