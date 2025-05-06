
        function konversi() {
            let gram = document.getElementById("gram").value;
            let kilogram = (gram / 1000).toFixed(2); 
            document.getElementById("hasil").innerText = `${kilogram} kg`;
        }
