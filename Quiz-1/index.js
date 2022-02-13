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

// soal 2
function next_date(tanggal,bulan,tahun){
    tanggalBerikut = 0;
    bulanBerikut = 0;
    tahunBerikut = 0;

    if (bulan === 12 && tanggal === 31) {
      tanggalBerikut = 1;
      bulanBerikut = 1;
      tahunBerikut = tahun + 1;
    } else {
      tahunBerikut = tahun;
      if (bulan === 2) {
        if ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0) {
          if (tanggal === 29) {
            tanggalBerikut = 1;
            bulanBerikut = bulan + 1;
          } else {
            tanggalBerikut = tanggal + 1;
            bulanBerikut = bulan;
          }
        } else {
          if (tanggal === 28) {
            tanggalBerikut = 1;
            bulanBerikut = bulan + 1;
          } else {
            tanggalBerikut = tanggal + 1;
            bulanBerikut = bulan;
          }
        }
      } else if (bulan === 7) {
        if (tanggal === 31) {
          tanggalBerikut = 1;
          bulanBerikut = bulan + 1;
        } else {
          tanggalBerikut = tanggal + 1;
          bulanBerikut = bulan;
        }
      } else {
        if ((bulan % 2 === 0 && bulan <= 6) || (bulan % 2 !== 0 && bulan > 6)) {
          if (tanggal === 30) {
            tanggalBerikut = 1;
            bulanBerikut = bulan + 1;
          } else {
            tanggalBerikut = tanggal + 1;
            bulanBerikut = bulan;
          }
        }
        if ((bulan % 2 !== 0 && bulan <= 6) || (bulan % 2 === 0 && bulan > 6)) {
          if (tanggal === 31) {
            tanggalBerikut = 1;
            bulanBerikut = bulan + 1;
          } else {
            tanggalBerikut = tanggal + 1;
            bulanBerikut = bulan;
          }
        }
      }
    }

    switch (bulanBerikut){
        case 1 : { bulan_string = 'Januari'; break; }
        case 2 : { bulan_string = 'Februari'; break; }
        case 3 : { bulan_string = 'Maret'; break; }
        case 4 : { bulan_string = 'April'; break; }
        case 5 : { bulan_string = 'Mei'; break; }
        case 6 : { bulan_string = 'Juni'; break; }
        case 7 : { bulan_string = 'Juli'; break; }
        case 8 : { bulan_string = 'Agustus'; break; }
        case 9 : { bulan_string = 'September'; break; }
        case 10 : { bulan_string = 'Oktober'; break; }
        case 11 : { bulan_string = 'November'; break; }
        case 12 : { bulan_string = 'Desember'; break; }
        default : { bulan_string = 'Error'; }
    }

    if (tanggalBerikut >= 32 || (bulanBerikut === 2 && tanggalBerikut >= 30)){
        return "Nilai input error";
    } else {
        return tanggalBerikut + " " + bulan_string + " " + tahunBerikut;
    }
}

// contoh 1

var tanggal = 29
var bulan = 2
var tahun = 2020

console.log(next_date(tanggal , bulan , tahun )); // output : 1 Maret 2020

// contoh 2

var tanggal = 28
var bulan = 2
var tahun = 2021

console.log(next_date(tanggal , bulan , tahun )); // output : 1 Maret 2021

// contoh 3

var tanggal = 31
var bulan = 12
var tahun = 2020

console.log(next_date(tanggal , bulan , tahun )); // output : 1 Januari 2021

// contoh 4

var tanggal = 31
var bulan = 7
var tahun = 2021

console.log(next_date(tanggal , bulan , tahun )); // output : 1 September 2021