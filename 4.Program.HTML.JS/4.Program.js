
        function konversi() {
            let detik = document.getElementById("detik").value;
            let menit = Math.floor(detik / 60);
            let sisaDetik = detik % 60;
            document.getElementById("hasil").innerText = `${menit} menit ${sisaDetik} detik`;
        }
