 let moon = document.getElementById("moon");
        let angle = 0;
        setInterval(() => {
            angle += 2;
            moon.style.transform = `translateX(${Math.sin(angle * Math.PI / 180) * 150}px)`;
        }, 100);