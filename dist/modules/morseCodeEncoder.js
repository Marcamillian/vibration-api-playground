/*
 1. ONE UNIT - The length of a dot
 2. THREE UNITS - the length of a dash
 3. ONE UNIT - space between parts of a letter
 4. THREE UNITS - space between letters
 5. SEVEN UNITS - space between words
*/

export default class MorseCodeEncoder{

  static morseMap = {
    "A": ".-",
    "B":"-...",
    "C":"-.-.",
    "D":"-..",
    "E":".",
    "F":"..-.",
    "G":"--.",
    "H":"....",
    "I":"..",
    "J":".---",
    "K":"-.-",
    "L":".-..",
    "M":"--",
    "N":"-.",
    "O":"---",
    "P":".--.",
    "Q":"--.-",
    "R":".-.",
    "S":"...",
    "T":"-",
    "U":"..-",
    "V":"...-",
    "W":".--",
    "X":"-..-",
    "Y":"-.--",
    "Z":"--..",
    //
    "1":".----",
    "2":"..---",
    "3":"...--",
    "4":"....-",
    "5":".....",
    "6":"-....",
    "7":"--...",
    "8":"---..",
    "9":"----.",
    "0":"-----",
    // 
    " ":"     " // word divider - 5 spaces + a space on either side = 7 spaces
  }

  static morseToTiming ={
    "dotSpace": {"on":false, "length": 1},        // between morse
    "letterSpace": {"on":false, "length": 3},     // between letters
    " ":{"on":false, "length": 7},                // between words
    ".":{"on":true, "length": 1},
    "-":{"on":true, "length": 3},
  }

  static textToMorse = (inputString)=>{

    // TODO:Marc - strip/filter characters not supported in morse

    let characterArray = inputString.split("")

    let morseCharacterArray = characterArray.map((character)=>{
      return this.morseMap[character.toUpperCase()]
    })

    return morseCharacterArray.join(" ")

  }

  static morseStringToTimingArray = (morseString, timingGap)=>{

    const timingArray = [];

    var swapWordSpaces = morseString.replaceAll("       ", 7)
    var wordAndLetterSpaces = swapWordSpaces.replaceAll(" ", 3)

    wordAndLetterSpaces.split("").forEach( (element)=>{
      switch(element){
        case "7":
          timingArray.pop()   // remove space between morse
          timingArray.push(7) // space between words 1+6 = 7
          break
        case "3":
          timingArray.pop()   // remove space between morse
          timingArray.push(3) // space between letters 1+2 = 3
          break
        case ".":
          timingArray.push(1) // dit
          timingArray.push(1) // space between morse
          break
        case "-":
          timingArray.push(3) // dah
          timingArray.push(1) // space between morse
          break
      }
    })

    timingArray.pop() // remove the character space after the last character
    
    const timingGapArray = timingArray.map( element =>{ return element*timingGap})

    return timingGapArray;

  }

}