function hitung() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);

    if (!isNaN(angka1) && !isNaN(angka2)) {
        var penjumlahan = angka1 + angka2;
        var pengurangan = angka1 - angka2;
        var perkalian = angka1 * angka2;
        var pembagian = angka1 / angka2;
        var sisaHasilBagi = angka1 % angka2;

        var hasil = "Hasil Penjumlahan: " + penjumlahan + "<br>";
        hasil += "Hasil Pengurangan: " + pengurangan + "<br>";
        hasil += "Hasil Perkalian: " + perkalian + "<br>";
        hasil += "Hasil Pembagian: " + pembagian + "<br>";
        hasil += "Sisa Hasil Bagi: " + sisaHasilBagi;

        document.getElementById("hasil").innerHTML = hasil;
    } else {
        document.getElementById("hasil").innerHTML = "Masukkan angka yang valid.";
    }
}