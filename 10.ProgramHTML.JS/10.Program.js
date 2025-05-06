
        function konversi() {
            let kb = document.getElementById("kb").value;
            let mb = (kb / 1024).toFixed(2); // 1 MB = 1024 KB :P
            document.getElementById("hasil").innerText = `${mb} MB`;
        }
