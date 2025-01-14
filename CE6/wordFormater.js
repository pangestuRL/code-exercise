/*
* Complete the 'wordFormatter'wordtion below.
*
* The function accepts STRING n as parameter.

*/

function wordFormatter(word) {
    // Write your code here
    let formattedWord = word.toLowerCase().split(' ');
    for(let i = 0; i < formattedWord.length; i++) {
        let firstChar = formattedWord[i].charAt(0).toUpperCase();
        let rest = formattedWord[i].substring(1);
        formattedWord[i] = firstChar + rest;
    }
    return formattedWord.join(' ');
}

console.log(wordFormatter(`Halloo SElamat PaGi duNIa`));

