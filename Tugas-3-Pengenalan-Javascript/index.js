// soal 1
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

console.log(pertama.substring(0, 4) + " " + pertama.substring(12, 18) + " " + kedua.substring(0, 7) + " " + kedua.substring(8, 18).toUpperCase());

// soal 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

var intKataPertama = parseInt(kataPertama);
var intKataKedua = parseInt(kataKedua);
var intkataKetiga = parseInt(kataKetiga);
var intKataKeempat = parseInt(kataKeempat);

var hasil = intKataPertama + (intKataKedua * intkataKetiga) + intKataKeempat

console.log(hasil);

// soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); // do your own! 
var kataKetiga = kalimat.substring(15, 18); // do your own! 
var kataKeempat = kalimat.substring(19, 24); // do your own! 
var kataKelima = kalimat.substring(25,); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);