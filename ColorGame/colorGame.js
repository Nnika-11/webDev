// alert("connected");
var colors = generateColorsArray(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){


    //change colors of squares
  colors = generateColorsArray(6);
  pickedColor = pickColor();
  //pick a random color
  resetButton.textContent = "New Colors";
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "initial";
  for(var i = 0; i<squares.length; i++){
    //add initial colors to squates
    squares[i].style.backgroundColor = colors[i];
  }
});

for(var i = 0; i<squares.length; i++){
  //add initial colors to squates
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
      //grab clicked color
      var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
      if(clickedColor === pickedColor){
        // (clickedColor===pickedColor) alert("correct");
        messageDisplay.textContent = "Correct!"
        changeColors();
        resetButton.textContent = "Play again?";
    }
      else {
          this.style.backgroundColor = "#232323";
          messageDisplay.textContent = "Try again!"
        }
  });
}
function generateColorsArray(num){
  //make an array with num random colors
  var colorsArr =[];
  for(var i=0; i<num; i++){
    colorsArr.push(genRandomColor())
  }
  return colorsArr

}
function genRandomColor(){

  //get num from 0 to 255
  var redColor = Math.floor(Math.random()*256);
  var redGreen = Math.floor(Math.random()*256);
  var redBlue = Math.floor(Math.random()*256);
  var randomColor ="rgb("+redColor +", "+ redGreen + ", " + redBlue +")"
  return randomColor
}

function changeColors(){
  //loop throug all squares
  for(var i=0; i<squares.length; i++){
    //change color to match picked one
    squares[i].style.backgroundColor = pickedColor;
  }
  h1.style.backgroundColor = pickedColor;
}
function pickColor(){


  // pick random from array
  var randomColor = Math.floor(Math.random()*colors.length);
  return colors[randomColor];
}