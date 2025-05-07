
        const waifus = [
            { name: "Umaru", img: "Waifu.jpeg" },
            { name: "Yuuka", img: "WaifuYuuka.jpeg" },
            { name: "Megumin", img: "WaifuMegumin.jpeg" },
            { name: "Ayane", img: "WaifuAyane.jpeg" },
            { name: "Mahiru", img: "WaifuMahiru.jpeg" },
            { name: "Mari", img: "WaifuMari.jpeg"},
            { name: "Komi", img: "WaifuKomi.jpeg"},
            { name: "Chisato", img: "WaifuChisato.jpeg"},
            { name: "Shuichi", img: "Shuichi.jpeg"}
        ];

        function gacha() {
            const randomIndex = Math.floor(Math.random() * waifus.length);
            const waifu = waifus[randomIndex];
            document.getElementById("waifu-name").textContent = `Waifu kamu: ${waifu.name}`;
            document.getElementById("waifu-img").src = waifu.img;
        }
