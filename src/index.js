const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let newExpr = "";
    let array = [];
    let decodedMessage = "";

    for (let i = 0; i < expr.length; i++) {
        newExpr += expr[i];
        if (newExpr.length == 10) {
            if (newExpr === "**********") {
                array.push(" ");
            } else {
                let decodedChar = "";
                for (let j = 0; j < newExpr.length; j += 2) {
                    const twoBits = newExpr.slice(j, j + 2);
                    if (twoBits === "00") {
                        continue;
                    } else if (twoBits === "10") {
                        decodedChar += ".";
                    } else if (twoBits === "11") {
                        decodedChar += "-";
                    }
                }
                array.push(decodedChar);
                console.log(decodedChar);
            }
            newExpr = "";
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (MORSE_TABLE[array[i]]) {
            decodedMessage += MORSE_TABLE[array[i]];
        } else {
            decodedMessage += array[i]; 
        }
    }
    return decodedMessage;
}

module.exports = {
    decode
}