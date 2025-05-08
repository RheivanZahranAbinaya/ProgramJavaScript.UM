
        function mulaiTimer() {
            let detik = document.getElementById("waktu").value;
            let interval = setInterval(function() {
                document.getElementById("hasil").innerText = "Sisa waktu: " + detik + " detik";
                detik--;
                if (detik < 0) {
                    clearInterval(interval);
                    document.getElementById("hasil").innerText = "Waktu Habis!";
                }
            }, 1000);
        }
