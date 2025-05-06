
        function konversi() {
            let kg = document.getElementById("kg").value;
            let gram = (kg * 1000).toFixed(2);
            document.getElementById("hasil").innerText = `${gram} gram`;
        }
