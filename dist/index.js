let depressedStart; 

let vibrationLengthDisplayElement = document.querySelector(".vibrate-display")

var buttonClicked = (event)=>{
  console.log("button Clicked")

  const vibrationRate = document.querySelector(".vibration-length").value

  if('vibrate' in navigator){
    const vibrationSucess = navigator.vibrate(vibrationRate)
    console.log(`vibration rate: ${vibrationRate} - succeeded: ${vibrationSucess}`)
  }

}

var vibrateStart = ()=>{
  depressedStart = new Date()
  navigator.vibrate(Infinity)
  console.log(`vibrate start: ${depressedStart}`)
  
}

var vibrateEnd = ()=>{
  const depressedMs = new Date() - depressedStart;
  navigator.vibrate(0)
  vibrationLengthDisplayElement.innerHTML = `last vibration ${depressedMs}ms long`
  console.log(`vibration ended after ${depressedMs}ms`)
} 

document.querySelector(".vibrate-1").addEventListener("click", buttonClicked)
document.querySelector(".vibrate-2").addEventListener("touchstart", buttonClicked)
document.querySelector(".vibrate-3").addEventListener("touchstart", vibrateStart)
document.querySelector(".vibrate-3").addEventListener("touchend", vibrateEnd)
