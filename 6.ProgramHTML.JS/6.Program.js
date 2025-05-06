
        function konversi() {
            let jam = document.getElementById("jam").value;
            let hari = Math.floor(jam / 24);
            let sisaJam = jam % 24;
            document.getElementById("hasil").innerText = `${hari} hari ${sisaJam} jam`;
        }
