// str = `AAAABBBBCCCDDDDEEEEFFFHHHAADD => `a`, `b`, `c`, `d`, dst

function removeDuplicate(str){
    let arrstr = str.split("");
    let result = "";
    for(let i = 0; i < arrstr.length; i++){
        if(str.includes(arrstr[i]) && !result.includes(arrstr[i])){
            result += arrstr[i]
        }
    }
    return result;
}

console.log(removeDuplicate(`AAAABBBBCCCDDDDEEEEFFFHHHAADD`))