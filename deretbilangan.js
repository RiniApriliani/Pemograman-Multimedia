function tampilkanDeret() {
    var n = parseInt(document.getElementById("inputN").value);
    var hasil = "";

    if (!isNaN(n) && n > 0) {
        for (var i = 1; i <= n; i++) {
            if (i % 2 !== 0) {
                hasil += i + " ";
            }
        }
    } else {
        hasil = "Masukkan nilai N yang valid (bilangan bulat positif).";
    }

    document.getElementById("hasil").innerHTML = hasil;
}
