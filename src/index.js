const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  /** make an array of morse letters */
  let letters = [];
  for (let i = 0; i < expr.length; i += 10) {
    let codedLetter = expr.substring(i, i + 10);
    let decodedLetter = '';

    for (let j = 0; j < codedLetter.length; j += 2) {
      let symbol = codedLetter.substring(j, j + 2);
      if (symbol == '10') {
        decodedLetter += '.';
      } else if (symbol == '11') {
        decodedLetter += '-';
      }
    }
    letters.push(decodedLetter);
  }
  // console.log(letters);

  /** turn morse letters to latin letters */
  let morseArray = letters.map(function (letter) {
    return letter == '' ? ' ' : MORSE_TABLE[letter];
  });
  // console.log(morseArray)

  /** return result */
  return String(morseArray.join(''));
}

// decode(
//   '00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'
// );
// console.log('hello world');

module.exports = {
  decode,
};
