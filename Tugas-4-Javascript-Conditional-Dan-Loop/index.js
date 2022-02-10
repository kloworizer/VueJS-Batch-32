// soal 1
var nilai;
var indeks;

nilai = 75;

if (nilai >= 85) {
    indeks = 'A'
} else if (nilai >= 75) {
    indeks = 'B'
} else if (nilai >= 65) {
    indeks = 'C'
} else if (nilai >= 55) {
    indeks = 'D'
} else {
    indeks = 'E'
}

console.log(indeks);

// soal 2
var tanggal = 24;
var bulan = 3;
var tahun = 1986;

var bulan_string;

switch (bulan) {
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

console.log(tanggal.toString() + ' ' + bulan_string + ' ' + tahun.toString());

// soal 3
var n = 5;
var pagar = '#';
var baris = '';

for (var index = 0; index < n; index++) {
    baris += pagar;
    console.log(baris);
}

// soal 4
m = 10;
var baris1 = 'I love programming';
var baris2 = 'I love Javascript';
var baris3 = 'I love VueJS';
var baris4 = '===';
var baris5 = '';

for (var index = 1; index <= m; index++) {
    if (index === 1) {
        console.log(index + ' - ' + baris1);
    } else if (index === 2) {
        console.log(index + ' - ' + baris2);
    }else if (index % 3 === 0) {
        console.log(index + ' - ' + baris3);
        console.log(baris5 += baris4);
    } else if (index % 3 === 1) {
        console.log(index + ' - ' + baris1);
    } else if (index % 3 === 2) {
        console.log(index + ' - ' + baris2);
    } else {
        console.log(index);
    }
}