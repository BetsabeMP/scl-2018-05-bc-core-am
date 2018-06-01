window.cipher = {

  encode: (str, num0) => {

    const strMy = str.toUpperCase();  
    const letters = strMy.length;  
    let newStr = "";

    for (let i = 0; i < letters; i++) {
      
      let letter_1 = 0;
      let letter_2 = 0;
      let letter_3 = 0;

      letter_1 = strMy.charCodeAt(i);
      letter_2 = 0;
      letter_2 = ((letter_1 - 65 + num0) % 26 + 65);
      letter_3 = String.fromCharCode(letter_2);
      newStr = newStr + letter_3;
    }
    return newStr;
  },

  decode: (str2, num_1) => {
    
    const strMy1 = str2.toUpperCase();
    const letters1 = strMy1.length;
    let new1Str = "";

    for (let a = 0; a < letters1; a++) {

      let letter_a = 0;
      let letter_b = 0;
      let letter_c = 0;

      letter_a = strMy1.charCodeAt(a);
      letter_b = 0;
      letter_b = letter_a + (26 -(num_1) % 26);
      
      if (90 < letter_b) {
        letter_b = letter_b % 90 + 64;
      }
      letter_c = String.fromCharCode(letter_b);
      new1Str = new1Str + letter_c;
    }
    return  new1Str;
  }
};


