/*
  Provides functions to add events to a document timeline


*/
export default class TimingHelper{

  /** Produces a function that can be called to trigger events on a given schedule
   * @param {function}    signalOnFunc  user provided signal to indicate an on signal (dot/dash)
   * @param {function}    signalOffFunc user provided function to indicate an off signal (gap between dot/dash/letter/word)
   * @param {Int[]}       timingArray   an array of ms values describing when signal should be on/off e.g. [100, 200, 300, 400]  
   * @returns {function}  a function that can be called to trigger the events (N.B - calling this function retuns a function that can cancel the events)
   */
  static executeOnTiming = (signalOnFunc, signalOffFunc,  timingArray)=>{

    const timelineArray = TimingHelper.timingArrayToTimeline(timingArray)

    return ()=>{
      let timeoutIndexArray = [];
      let running;                  // tracks alternating signalOn/signalOff calls

      signalOnFunc();  // turn the signal on
      running = true;

      // schedule alternating on/off events for the future using the timing array
      timelineArray.forEach(( timing )=>{

        if(running){
          let timeoutIndex = setTimeout(signalOffFunc, timing)
          timeoutIndexArray.push(timeoutIndex)  // store the index of the scheduled call
        }
        else{ 
          let timeoutIndex = setTimeout(signalOnFunc, timing)
          timeoutIndexArray.push(timeoutIndex)  // store the index of the scheduled call 
        }
        running = !running // flip to other signal state for next call

      })

      const cancelExecution = ()=>{
        signalOffFunc();  // make sure signal is off
  
        timeoutIndexArray.forEach((timeoutIndex)=>{ // cancel each scheduled call by its index
          clearTimeout(timeoutIndex)
        })
      }

      return cancelExecution;
  
    }

  }

  /** Turns an array of timing gaps into an array of timings from the start
   * @param   {Int[]} timingArray 
   * @returns null
   * 
   * e.g. [100,100,100] turns into [100,200,300]
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