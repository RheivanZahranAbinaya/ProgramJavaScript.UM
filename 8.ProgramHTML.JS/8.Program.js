
        function konversi() {
            let bulan = document.getElementById("bulan").value;
            let tahun = Math.floor(bulan / 12);
            let sisaBulan = bulan % 12;
            document.getElementById("hasil").innerText = `${tahun} tahun ${sisaBulan} bulan`;
        }
