
        function luasBola(jariJari) {
            return 4 * Math.PI * Math.pow(jariJari, 2);
        }

        function volumeBola(jariJari) {
            return (4/3) * Math.PI * Math.pow(jariJari, 3);
        }

        function hitungBola() {
            let jariJari = document.getElementById("jariJari").value;

            let hasil = `
                Luas Permukaan Bola: ${luasBola(jariJari).toFixed(2)}<br>
                Volume Bola: ${volumeBola(jariJari).toFixed(2)}
            `;

            document.getElementById("hasil").innerHTML = hasil;
        }
