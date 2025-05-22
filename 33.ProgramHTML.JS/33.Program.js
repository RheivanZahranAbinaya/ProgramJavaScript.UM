  let score = 0;
        document.getElementById("clickBtn").addEventListener("click", () => {
            score++;
            document.getElementById("score").innerText = `Skor: ${score}`;
        });
        setTimeout(() => {
            alert(`Waktu habis! Skor kamu: ${score}`);
        }, 5000);