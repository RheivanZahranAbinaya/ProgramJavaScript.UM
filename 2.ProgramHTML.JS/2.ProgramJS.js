
        function hitungKata() {
            let teks = document.getElementById("inputText").value.trim();
            let jumlahKata = teks ? teks.split(/\s+/).length : 0;
            document.getElementById("hasil").textContent = jumlahKata;
        }