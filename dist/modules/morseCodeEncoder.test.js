import {test} from 'tap'
import {MorseCodeEncoder} from './morseCodeEncoder.js';

test("Testing textToMorse()", (t)=>{

  t.test("handles single word", (ts)=>{
    var input = "hello"
    var expected = ".... . .-.. .-.. ---"

    var observed = MorseCodeEncoder.textToMorse(input)

    ts.equal(observed, expected)
    ts.end()
  })

  t.test("handles spaces between words", (ts)=>{
    var input = "hello world"
    var expected =".... . .-.. .-.. ---       .-- --- .-. .-.. -.."

    var observed = MorseCodeEncoder.textToMorse(input)

    ts.equal(observed, expected)
    ts.end()
  })

  // TODO handles punctuation correctly

  t.end()
  
})

test("Testing morseStringToTimingArray()", (t)=>{

  t.test("handles a single word", (ts)=>{
    const input = ".... . .-.. .-.. ---"
    const expected = [
      1,1,
      1,1,
      1,1,
      1,
      3, 
      1,
      3,
      1,1,
      3,1,
      1,1,
      1,
      3, 
      1,1,
      3,1,
      1,1,
      1,
      3, 
      3,1,
      3,1,
      3 
    ]

    const output = MorseCodeEncoder.morseStringToTimingArray(input, 1)

    ts.ok(Array.isArray(output), "outputs an array")
    ts.equal(output.length, expected.length, "has the right number of timing elements")

    let timingElementsMatch = true;
    expected.forEach((element, index)=>{
      if(output[index] != element) timingElementsMatch = false;
    })
    ts.ok(timingElementsMatch, "all the timing elements are correct")

    ts.end()

  })

  t.test("handles a space between words in a message", (ts)=>{
    const input = ".-       -.. --- --"
    const expected = [
      1,1,
      3,
      7,
      3,1,
      1,1,
      1,
      3,
      3,1,
      3,1,
      3,
      3,
      3,1,
      3
    ]

    const observed = MorseCodeEncoder.morseStringToTimingArray(input, 1)

    ts.ok(Array.isArray(observed), "outputs an array")
    ts.equal(observed.length, expected.length, "had the right number of elements")

    let timingElementsMatch = true;
    expected.forEach((element, index)=>{
      if(observed[index] != element) timingElementsMatch = false;
    })
    ts.ok(timingElementsMatch, "all the timing elements are correct")

    ts.end() 
  })

  t.test("handles different timing gaps", (ts)=>{
    const input = ".-       -... . .";
    const expected = [
      100,100,
      300,
      700,
      300,100,
      100,100,
      100,100,
      100,
      300,
      100,
      300,
      100
    ]

    const observed = MorseCodeEncoder.morseStringToTimingArray(input, 100)

    ts.ok(Array.isArray(observed), "outputs an array")
    ts.equal(observed.length, expected.length, "has the right number of elements")

    let timingElementsMatch = true;
    expected.forEach((element, index)=>{
      if(observed[index] != element) timingElementsMatch = false;
    })
    ts.ok(timingElementsMatch, "all the timing elements are correct")

    ts.end()

  })

  t.end()
})