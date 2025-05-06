
        function konversi() {
            let gb = document.getElementById("gb").value;
            let tb = (gb / 1024).toFixed(2); 
            document.getElementById("hasil").innerText = `${tb} TB`;
        }
