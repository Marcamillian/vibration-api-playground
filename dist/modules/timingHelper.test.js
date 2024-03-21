import {test} from 'tap'
import TimingHelper from './timingHelper.js';

test("Testing timingArrayToTimeline()", (t)=>{
  const input = [
    100,100,
    300,
    300,100,
    100
  ]
  const expected = [
    100, 200,
    500,
    800,900,
    1000
  ]

  const observed = TimingHelper.timingArrayToTimeline(input)

  t.ok(Array.isArray(observed), "output is an array")
  t.equal(observed.length, expected.length, "same number of elements")

  let elementsMatch = true;
  expected.forEach((element, index)=>{
    if(observed[index] != element) elementsMatch = false
  })
  t.ok( elementsMatch, "all the timing elements are correct")

  t.end()
})