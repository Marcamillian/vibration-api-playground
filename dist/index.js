console.log("something")

var buttonClicked = (event)=>{
  console.log("button Clicked")

  if('vibrate' in navigator){
    navigator.vibrate(200)
  }

}

document.querySelector("button").addEventListener("click", buttonClicked)
