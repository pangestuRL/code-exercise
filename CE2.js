// let str = `Halo Selamat Pagi!`; //["H", "a", "l", "o", " ", "S", "e", "l", "a", "m", "a", "t", " ", "P", "a", "g", "i", "!"]
// let vowels = [`a`, `i`, `u`, `e`, `o`];
function countVowels(str, vowels){
    let arrstr = str.split("");
    let capitalVowels = vowels.map(vowel => vowel.toUpperCase());
    let result = ``;
    for(let i = 0; i < arrstr.length; i++){
        if(vowels.includes(arrstr[i]) || capitalVowels.includes(arrstr[i])){
            result += arrstr[i]
        }
    }

    return result.length;
}

console.log(countVowels(`Apa kabar dunia fana!`, [`a`, `i`, `u`, `e`, `o`]))
