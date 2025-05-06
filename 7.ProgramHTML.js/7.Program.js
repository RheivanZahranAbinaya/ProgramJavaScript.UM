
        function konversi() {
            let hari = document.getElementById("hari").value;
            let bulan = (hari / 30.44).toFixed(2); // 1 bulan rata-rata memiliki 30.44 hari
            let sisaHari = (hari % 30.44).toFixed(0);
            document.getElementById("hasil").innerText = `${bulan} bulan ${sisaHari} hari`;
        }
