
        function konversi() {
            let rupiah = document.getElementById("rupiah").value;
            let dolar = (rupiah / 15000).toFixed(2);
            document.getElementById("hasil").innerText = "Hasil: $" + dolar;
        }
