
        function updateJam() {
            let sekarang = new Date();
            let waktu = sekarang.toLocaleTimeString();
            document.getElementById("jam").innerText = waktu;
            document.getElementById("jam").style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        }
        setInterval(updateJam, 1000);
