
        function konversi() {
            let celsius = document.getElementById("celsius").value;
            let fahrenheit = ((celsius * 9/5) + 32).toFixed(2); 
            document.getElementById("hasil").innerText = `${fahrenheit} °F`;
        }
