window.cipher = {

  encode: (str, num0) => {
    const strMy = str.toUpperCase();
    const letters = strMy.length;

    for (let i = 0; i < letters; i++) {
      
      let letter_1 = 0;
      let letter_2 = 0;
      let letter_3 = 0;
      let newStr = "";

      letter_1 = strMy.charCodeAt(i);
      letter_2 = ((letter_1 - 65 + num0) % 26 + 65);
      letter_3 = String.fromCharCode(letter_2);
      newStr = newStr + letter_3;
    }
    return newStr;
  },
  
  decode: () => {
    /* Acá va tu código */
  }
}


