
        function konversi() {
            let fahrenheit = document.getElementById("fahrenheit").value;
            let celsius = ((fahrenheit - 32) * 5/9).toFixed(2); 
            document.getElementById("hasil").innerText = `${celsius} °C`;
        }
