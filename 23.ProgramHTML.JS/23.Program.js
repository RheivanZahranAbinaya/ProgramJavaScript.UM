
        function luasSegitiga(alas, tinggi) {
            return (alas * tinggi) / 2;
        }

        function kelilingSegitiga(sisi1, sisi2, sisi3) {
            return sisi1 + sisi2 + sisi3;
        }

        function hitungSegitiga() {
            let alas = document.getElementById("alas").value;
            let tinggi = document.getElementById("tinggi").value;
            let sisi1 = document.getElementById("sisi1").value;
            let sisi2 = document.getElementById("sisi2").value;
            let sisi3 = document.getElementById("sisi3").value;

            let hasil = `
                Luas Segitiga: ${luasSegitiga(alas, tinggi).toFixed(2)}<br>
                Keliling Segitiga: ${kelilingSegitiga(sisi1, sisi2, sisi3).toFixed(2)}
            `;

            document.getElementById("hasil").innerHTML = hasil;
        }
    