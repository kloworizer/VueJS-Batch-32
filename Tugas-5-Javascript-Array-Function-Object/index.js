// soal 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];

for (i=0;i<daftarHewan.length;i++) {
    console.log(daftarHewan.sort()[i]);
}

// soal 2
function introduce(data) {
    var hasil =  "Nama saya " + data["name"] + ", umur saya " + data["age"] + " tahun, alamat saya di " + data["address"] + ", dan saya punya hobby yaitu " + data["hobby"]
    return hasil;
}
 
var data = {name : "John" , age : 30 , address : "Jalan Pelesiran" , hobby : "Gaming" };
 
var perkenalan = introduce(data);
console.log(perkenalan); // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di Jalan Pelesiran, dan saya punya hobby yaitu Gaming"

// soal 3
function hitung_huruf_vokal(string) {
    var hasil = 0;
    string = string.toLowerCase();
    for (i = 0; i < string.length; i++){
        if (string[i]==="a" || string[i]==="i" || string[i]==="u" || string[i]==="e" || string[i]==="o"){
            hasil +=1;
        }
    }
    return hasil;
}

var hitung_1 = hitung_huruf_vokal("Muhammad");

var hitung_2 = hitung_huruf_vokal("Iqbal");

console.log(hitung_1 , hitung_2) // 3 2

// soal 4
function hitung(angka) {
    return angka * 2 -2;
}

console.log( hitung(0) ) // -2
console.log( hitung(1) ) // 0
console.log( hitung(2) ) // 2
console.log( hitung(3) ) // 4
console.log( hitung(5) ) // 8