function getResponse() {
            let input = document.getElementById("userInput").value.toLowerCase();
            let responses = {
                "hai": "Halo! Apa kabar?",
                "apa kabar": "Saya baik, terima kasih!",
                "siapa kamu": "Saya chatbot sederhana!",
                "bye": "Sampai jumpa!"
            };
            document.getElementById("botResponse").innerText = responses[input] || "Maaf, saya tidak mengerti.";
        }