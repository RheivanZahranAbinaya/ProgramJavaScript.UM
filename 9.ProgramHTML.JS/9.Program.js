
function konversi() {
    let byte = document.getElementById("byte").value;
    let kilobyte = (byte / 1024).toFixed(2); 
    document.getElementById("hasil").innerText = `${kilobyte} KB`;
}
