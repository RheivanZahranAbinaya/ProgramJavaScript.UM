
        function konversi() {
            let mb = document.getElementById("mb").value;
            let gb = (mb / 1024).toFixed(2); 
            document.getElementById("hasil").innerText = `${gb} GB`;
        }
