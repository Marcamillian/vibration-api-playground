export default class AudioManager{
  
  constructor(){
    this.audioCtx = new AudioContext();
    this.oscillator = this.audioCtx.createOscillator();

    this.oscillator.type = "square";
    this.oscillator.frequency.setValueAtTime(3000,0)
    this.oscillator.connect(this.audioCtx.destination)
    this.oscillator.start()

    this.audioCtx.suspend()
  }

  /** 
   * Plays a sound on the audio context
   * @return a promise that resolves when the audio context is resumed
   */
  signalOn = ()=>{
    return this.audioCtx.resume()
  }

  /**
   * Stops the sound playing on the audio context
   * @return a promise that resolves when the audio context is suspended
   */
  signalOff = ()=>{
    return this.audioCtx.suspend()
  }
}