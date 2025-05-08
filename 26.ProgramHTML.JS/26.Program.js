
        function hitungUmur() {
            let inputTanggal = document.getElementById("tanggalLahir").value;
            let tanggalLahir = new Date(inputTanggal);
            let sekarang = new Date();

            let umur = sekarang.getFullYear() - tanggalLahir.getFullYear();
            let bulan = sekarang.getMonth() - tanggalLahir.getMonth();
            let hari = sekarang.getDate() - tanggalLahir.getDate();

            if (bulan < 0 || (bulan === 0 && hari < 0)) {
                umur--;
            }

            document.getElementById("hasil").innerText = "Umur Anda: " + umur + " tahun.";
        }
