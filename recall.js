var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
//REUSABLE FUNCTION
function gradient(){
  body.style.background = 
  "linear-gradient(to right, " 
  + color1.value 
  + "," 
  + color2.value 
  + ")"
}
color1.addEventListener("input", gradient);
color2.addEventListener("input", gradient);



var userInput = document.getElementById("userInput");
var validate = document.getElementById("validate");
var ol = document.querySelector("ol");


validate.addEventListener("click", function() {
  if (userInput.value.length > 0) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    ol.appendChild(li);
    userInput.value = "";
  }
})

userInput.addEventListener("keypress", function() {
  if (userInput.value.length > 0 && event.keyCode === 13) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    ol.appendChild(li);
    userInput.value = "";
  }
})