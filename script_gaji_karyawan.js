function hitungGaji() {
    var namaKaryawan = document.getElementById("nama").value;
    var gajiPokok = parseFloat(document.getElementById("gaji").value);
    var tunjangan = parseFloat(document.getElementById("tunjangan").value);
    var pajak = parseFloat(document.getElementById("pajak").value);

    var gajiBersih = gajiPokok + tunjangan - pajak;

    var hasil = "Nama Karyawan: " + namaKaryawan + "<br>Gaji Bersih: " + gajiBersih;

    document.getElementById("hasil").innerHTML = hasil;
}
