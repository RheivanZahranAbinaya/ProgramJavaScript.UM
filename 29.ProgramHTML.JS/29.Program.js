
        let angkaRandom = Math.floor(Math.random() * 10) + 1;
        function cekAngka() {
            let tebakan = document.getElementById("tebakan").value;
            let pesan = (tebakan == angkaRandom) ? "Benar!" : "Salah, coba lagi!";
            document.getElementById("hasil").innerText = pesan;
        }
