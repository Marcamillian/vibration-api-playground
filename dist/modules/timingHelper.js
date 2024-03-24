/*
  Provides functions to add events to a document timeline


*/
export default class TimingHelper{

  // Turn vibration timing array into a series of events
  // arguments - timing array in ms
  // return - a function that can be called to start vibrations
  static executeOnTiming = (startFunction, stopFunction,  timingArray)=>{

    const timelineArray = TimingHelper.timingArrayToTimeline(timingArray)

    return ()=>{
      let running = true
      let timeline = 0
      let timeoutIndexArray = []

      let timeoutIndex = startFunction()

      timelineArray.forEach(( timing, index )=>{

        if(running){
          let timeoutIndex = setTimeout(stopFunction, timing)
          timeoutIndexArray.push(timeoutIndex)
        }
        else{ 
          let timeoutIndex = setTimeout(startFunction, timing)
          timeoutIndexArray.push(timeoutIndex)
        }
        running = !running

      })

      return timeoutIndexArray
    }

  }

  /* Change an array
  */
  static timingArrayToTimeline(timingArray){
    
    return timingArray.reduce((carry, timing)=>{
      if (carry.length == 0){
        carry.push(timing)
      }else{
        carry.push( timing + carry[carry.length-1] )
      }

      return carry
    }, [])
  }

}