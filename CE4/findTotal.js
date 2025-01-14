/*
Buatlah sebuah fungsi bernama findTotal yang menerima sebuah array dari angka-angka.
Fungsi ini akan menghitung total poin berdasarkan aturan berikut:
Tambah 2 poin untuk setiap bilangan genap.
Tambah 3 poin untuk setiap bilangan ganjil, kecuali angka 7.
Tambah 6 poin untuk setiap angka 7 yang ada di dalam array.
Jika array kosong atau tidak ada angka di dalamnya, maka fungsi harus mengembalikan false.
Contoh 1:
Input:
1, 2, 3
Output:
8
Penjelasan:
Angka 1 adalah ganjil, jadi mendapat 3 poin.
Angka 2 adalah genap, jadi mendapat 2 poin.
Angka 3 adalah ganjil, jadi mendapat 3 poin.
Total poin: 3 + 2 + 3 = 8
* Complete the 'findTotal' function below.
*
* The function accepts INTEGER n as parameter.
*/

function findTotal(arr) {
    let newArr = [];
    if(arr.length == 0){
        return false;
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0){
            newArr.push(2);
        }else if( arr[i] % 2 !== 0 && arr[i] == 7){
            newArr.push(6);
        }else{
            newArr.push(3);
        }
    }
    return newArr.reduce((a, b) => a+b, 0);

}



console.log(findTotal([4,5,8,7,6]));
// findTotal([4,5,8,7,6])



