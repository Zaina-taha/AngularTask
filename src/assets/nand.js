var list = new Array();
var counter = 0;

function AddContent() {
  list[counter] = "Line " + counter +"<br>";
  counter += 1;
  document.getElementById("lineContent").innerHTML = list;
};
function Reset() {
  document.getElementById("lineContent").innerHTML= "";

}
