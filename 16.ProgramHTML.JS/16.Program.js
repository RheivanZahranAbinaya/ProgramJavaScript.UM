
        function konversi() {
            let liter = document.getElementById("liter").value;
            let mililiter = (liter * 1000).toFixed(2); 
            document.getElementById("hasil").innerText = `${mililiter} ML`;
        }
