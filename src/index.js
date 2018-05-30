function botonReset() {
    document.getElementById("text").value = "";
    document.getElementById("text1").value = "";
}

function cifra() {
    let message = document.getElementById("text").value;
    document.getElementById("msje1").innerHTML = message;
}

function decifra() {
    let message = document.getElementById("text1").value;
    document.getElementById("msje2").innerHTML = message;
}
