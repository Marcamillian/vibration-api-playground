/*
  Provides functions to add events to a document timeline


*/
export default class TimingHelper{

  // Turn vibration timing array into a series of events
  // arguments - timing array in ms
  // return - a function that can be called to start vibrations
  static executeOnTiming = (startFunction, stopFunction,  timingArray)=>{

    // using set interval

    // start vibration 
    // wait for a time - defined in the timing array
      // call vibration next - need to know Infinity or 0
      // repeat

    return ()=>{
      let running = true
      startFunction()

      timingArray.forEach(( timing, index )=>{

        if(running){ setInterval(stopFunction, timing) }
        else{ setInterval(startFunction, timing )}
        running = !running

      })

    }


  }

}