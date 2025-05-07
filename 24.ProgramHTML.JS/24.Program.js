
        function luasPersegi(sisi) {
            return Math.pow(sisi, 2);
        }

        function kelilingPersegi(sisi) {
            return 4 * sisi;
        }

        function hitungPersegi() {
            let sisi = document.getElementById("sisi").value;

            let hasil = `
                Luas Persegi: ${luasPersegi(sisi).toFixed(2)}<br>
                Keliling Persegi: ${kelilingPersegi(sisi).toFixed(2)}
            `;

            document.getElementById("hasil").innerHTML = hasil;
        }
