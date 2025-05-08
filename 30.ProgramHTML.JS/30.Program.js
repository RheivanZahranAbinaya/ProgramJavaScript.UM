
        function gerak(arah) {
            let kotak = document.getElementById("kotak");
            let posisi = parseInt(kotak.style.left) || 50;
            kotak.style.left = (arah === 'left') ? (posisi - 20) + "px" : (posisi + 20) + "px";
        }
