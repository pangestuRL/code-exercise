function manipulateString(str) {
    let result = [];
    let before = ``; 
    for (let i = 0; i < str.length; i++) {
        if(result.length == 0){
            result.push(str[i]);
        }
        if(str[i] >= `a` && str[i] <= `z`){
            result.push(str[i]);
            before = str[i];
        }else if((str[i] >= `A` && str[i] <= `Z`) && (before >= `a` && before <= `z`)){
            result.push(` ${str[i]}`);
            before = str[i];

        }
    }
    return result.join(``);

}

console.log(manipulateString(`ApaKabarKamu`));
//output = `Selamat Pagi Dunia`;

function processData(data) {
    // kode di bawah hanya untuk melihat nilai data. Silakan hapus untuk menjawab kuis.
      const fetchPromises = data.map((item) => 
        API.fetch(item.delay, item.simulateError)
      );
      return Promise.all(fetchPromises);
  }