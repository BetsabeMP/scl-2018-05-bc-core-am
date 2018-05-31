window.onload = () => {
    const btn1 = document.getElementById("btnCifrar");

    btn1.addEventListener("click", () => {
        const str =  document.getElementById("text").value;
        const num1 = parseInt(document.getElementById("clave1").value);
        const msjeCifrar = window.cipher.encode(str, num1);
        document.getElementById("msje1").innerHTML = msjeCifrar;
    });

    const btn2 = document.getElementById("btnDecifrar");

    btn2.addEventListener("click", () => {
        const str2 = document.getElementById("text1").value;
        const num2 = parseInt(document.getElementById("clave2").value);
        const msjeDecifrar = window.cipher.decode(str2, num2);
        document.getElementById("msje2").innerHTML = msjeDecifrar;
    });

    const btnRst1 = document.getElementById("rst1");

    btnRst1.addEventListener("click", () => {
        document.getElementById("clave1").value = "";
        document.getElementById("text").value = "";
        document.getElementById("clave2").value = "";
        document.getElementById("text1").value = "";
        document.getElementById("msje2").value = " ";
    });
    
};

