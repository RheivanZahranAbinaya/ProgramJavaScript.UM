
        function luasKerucut(jariJari, tinggi) {
            let selimut = Math.sqrt(Math.pow(jariJari, 2) + Math.pow(tinggi, 2));
            return Math.PI * Math.pow(jariJari, 2) + Math.PI * jariJari * selimut;
        }

        function volumeKerucut(jariJari, tinggi) {
            return (1/3) * Math.PI * Math.pow(jariJari, 2) * tinggi;
        }

        function hitungKerucut() {
            let jariJari = document.getElementById("jariJari").value;
            let tinggi = document.getElementById("tinggi").value;

            let hasil = `
                Luas Permukaan Kerucut: ${luasKerucut(jariJari, tinggi).toFixed(2)}<br>
                Volume Kerucut: ${volumeKerucut(jariJari, tinggi).toFixed(2)}
            `;

            document.getElementById("hasil").innerHTML = hasil;
        }
