
        function cekGanjilGenap() {
            let angka = document.getElementById("angka").value;
            let tipe = (angka % 2 === 0) ? "Genap" : "Ganjil";
            document.getElementById("hasil").innerText = "Angka " + angka + " adalah " + tipe + ".";
        }
