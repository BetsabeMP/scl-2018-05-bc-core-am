window.onload = () => {

    const btn1 = document.getElementById("btnCifrar");

    encodeBtn.addEventListener("click", () => {
        const strCifrar = document.getElementById("text").value;
        const num1 = parseInt(document.getElementById("number").value);
        const msjeCifrar = window.cipher.encode(str, num1);
        document.getElementById("msje1").innerHTML = msjeCifrar;
      });

}