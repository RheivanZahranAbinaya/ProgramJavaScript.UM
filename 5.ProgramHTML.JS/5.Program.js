
        function konversi() {
            let menit = document.getElementById("menit").value;
            let jam = Math.floor(menit / 60);
            let sisaMenit = menit % 60;
            document.getElementById("hasil").innerText = `${jam} jam ${sisaMenit} menit`;
        }
