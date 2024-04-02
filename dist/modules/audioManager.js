export default class AudioManager{
  
  constructor(){
    this.audioCtx = new AudioContext();
    this.oscillator;
  }

  /** 
   * Plays a sound on the audio context
   */
  signalOn = ()=>{
    this.oscillator = this.audioCtx.createOscillator();

    this.oscillator.type = "square";
    this.oscillator.frequency.setValueAtTime(3000,0)
    this.oscillator.connect(this.audioCtx.destination)
    this.oscillator.start()

  }

  /**
   * Stops the sound playing on the audio context
   */
  signalOff = ()=>{
    if(!this.oscillator) return 
    this.oscillator.stop()
    this.oscillator = null
  }
}