
        function konversi() {
            let mil = document.getElementById("mil").value;
            let km = (mil * 1.60934).toFixed(2); 
            document.getElementById("hasil").innerText = `${km} km`;
        }
