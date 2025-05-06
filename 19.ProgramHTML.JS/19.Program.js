
        function konversi() {
            let km = document.getElementById("km").value;
            let mil = (km * 0.621371).toFixed(2); 
            document.getElementById("hasil").innerText = `${mil} mil`;
        }
