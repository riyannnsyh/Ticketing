let vip = parseFloat (prompt("Masukkan Jumlah Tiket VIP yang Terjual"));
let eksekutif = parseFloat (prompt("Masukkan Jumlah Tiket Eksekutif yang Terjual"));
let ekonomi = parseFloat (prompt("Masukkan Jumlah Tiket Ekonomi yang Terjual"));

if (vip >= 35) {
  untung1 = 25;
} else if (vip >= 20 && vip < 35) {
  untung1 = 20;
} else {
  untung1 = 15;
}

if (eksekutif >= 40) {
  untung2 = 20;
} else if (eksekutif >= 20 && eksekutif < 40) {
  untung2 = 10;
} else {
  untung2 = 5;
}

if (ekonomi > 0) {
  untung3 = 7;
}

let klsvip = untung1 * vip;
let klsekse = untung2 * eksekutif;
let klseko = untung3 * ekonomi;

let totaluntung = klsvip + klsekse + klseko;

let totaltiket = vip + eksekutif + ekonomi;

document.write(
  `Jumlah Tiket yang Terjual <br> 1. VIP ${vip} Tiket <br> 2. Eksekutif ${eksekutif} Tiket <br> 3. Ekonomi ${ekonomi} Tiket <br> Total Semua Tiket yang Terjual ${totaltiket} Tiket <hr>`
);

document.write(
  `Jumlah Keuntungan Tiket yang Terjual <br> 1. Keuntungan Tiket VIP ${klsvip}% <br> 2. Keuntungan Tiket Eksekutif ${klsekse}% <br> 3. Keuntungan Tiket Ekonomi ${klseko}% <br> Total Keuntungan Semua Tiket ${totaluntung}% <hr>`
)

console.log(`tiket yang terjual dari kelas vip adalah ${vip} tiket, keuntungannya adalah ${untung1}%/1 tiket dan total keuntungan dari kelas vip adalah ${klsvip}%

tiket yang terjual dari kelas eksekutif adalah ${eksekutif} tiket, keuntungannya adalah ${untung2}%/1 tiket dan total keuntungan dari kelas eksekutif adalah ${klsekse}%

tiket yang terjual dari elas ekonomi adalah ${ekonomi} tiket, keuntungannya adalah ${untung3}%/1 tiket dan total keuntungan dari kelas ekonomi adalah ${klseko}%

total tiket yang terjual dari 3 kelas di atas adalah ${totaltiket} tiket dan total keuntungan dari 3 kelas adalah ${totaluntung}%`);

