console.log("something")

var buttonClicked = (event)=>{
  console.log("button Clicked")

  const vibrationRate = document.querySelector(".vibration-rate").value

  if('vibrate' in navigator){
    const vibrationSucess = navigator.vibrate(vibrationRate)
    console.log(`vibration rate: ${vibrationRate} - succeeded: ${vibrationSucess}`)
  }

}

document.querySelector(".vibrate-1").addEventListener("click", buttonClicked)

document.querySelector(".vibrate-2").addEventListener("touchstart", buttonClicked)
