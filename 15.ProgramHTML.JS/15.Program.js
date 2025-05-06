
        function konversi() {
            let ml = document.getElementById("ml").value;
            let liter = (ml / 1000).toFixed(2); 
            document.getElementById("hasil").innerText = `${liter} liter`;
        }
