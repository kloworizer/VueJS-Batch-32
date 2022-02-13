// soal 1
function  jumlah_kata(kata){
    jumlahKata = 0;
    arrayKata = kata.trim().split(" ");
    arrayKata.forEach(function(kata) {
        if(kata !== ""){
            jumlahKata += 1;
        }
    });
    return jumlahKata;
}

var kalimat_1 = " Halo nama saya Muhammad Iqbal Mubarok ";
var kalimat_2 = " Saya    Iqbal";
var kalimat_3 = " Saya Muhammad Iqbal Mubarok ";

console.log(jumlah_kata(kalimat_1)); // 6
console.log(jumlah_kata(kalimat_2)); // 2
console.log(jumlah_kata(kalimat_3)); // 4