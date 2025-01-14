/*
Buatlah sebuah fungsi yang menerima sebuah angka dan mencari dua angka yang berurutan di dalam angka tersebut, yang memiliki nilai paling besar. Fungsi akan mengembalikan pasangan angka berurutan tersebut.
Contoh 1:
Input:
641573
Output:
73
Penjelasan:
Pasangan dua angka berurutan yang ada di dalam angka 641573 adalah: 64, 41, 15, 57, dan 73.
Di antara semua pasangan tersebut, 73 adalah yang paling besar.
* Complete the 'pasanganTerbesar' function below.
*
* The function accepts number as parameter.
*/

function pasanganTerbesar(number) {
    let before = ``;
    let after = ``;
    let pairing = [];
    let newNum = number.toString().split(``);
    for(i = 0; i < newNum.length; i++){
        if( i == 0){
            before = newNum[i];
        }else{
            after = newNum[i];
            pairing.push(parseInt(before+after));
            before = after;
        }
    }
    let hasil = Math.max(...pairing);
    return hasil;
}


console.log(pasanganTerbesar(9834672));