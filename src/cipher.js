window.cipher = {

  //Codificar
  encode: (str, num0) => {

    const strMy = str.toUpperCase();  //Cambio de letras a mayúsculas
    const letters = strMy.length;  //Cantidad de letras en el mensaje
    let newStr = "";

    for (let i = 0; i < letters; i++) {  //Contador de posiciones (letras)
      
      //variables
      let letter_1 = 0;
      let letter_2 = 0;
      let letter_3 = 0;

      letter_1 = strMy.charCodeAt(i); //Posición ASCII de letra
      letter_2 = 0;
      letter_2 = ((letter_1 - 65 + num0) % 26 + 65);
      letter_3 = String.fromCharCode(letter_2); //Se obtiene nueva letra (según cálculos)
      newStr = newStr + letter_3;
    }
    return newStr;  //Mensaje codificado
  },
  
  //Decodificar
  decode: (str2, num_1) => {
    
    const strMy1 = str2.toUpperCase(); //Cambio de letras a mayúsculas
    const letters1 = strMy1.length; //Cantidad de letras en el mensaje
    let new1Str = "";

    for (let a = 0; a < letters1; a++) { //Contador de posiciones (letras)
      
      //variables
      let letter_a = 0;
      let letter_b = 0;
      let letter_c = 0;

      letter_a = strMy1.charCodeAt(a); //Posición ASCII de letra
      letter_b = 0;
      letter_b = letter_a + (26 -(num_1) % 26);
      
      if (90 < letter_b) {
        letter_b = letter_b % 90 + 64;
      }
      letter_c = String.fromCharCode(letter_b); //Se obtiene nueva letra (según calculos)
      new1Str = new1Str + letter_c;
    }
    return  new1Str;  //Mensaje decifrado
  }
};


