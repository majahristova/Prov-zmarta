var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
}

var slider = document.getElementById("myRange2");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 

slider2.oninput = function() {
  output.innerHTML = this.value;
}