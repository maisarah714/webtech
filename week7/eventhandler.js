/*
var myButton = document.querySelector('button');
function myFunction(){
  var myX = document.getElementById('x').value;
  var myY = document.getElementById('y').value;
  var total = Number(myX) + Number(myY);

  var msg = 'The value of x+y is ' + total;
  document.getElementById('result').textContent = msg;
}

myButton.onclick = myFunction;
*/

var myButton = document.querySelector('button');

//anon function must have the word 'function' in front
myButton.onclick = function myFunction() {
  var myX = document.getElementById('x').value;
  var myY = document.getElementById('y').value;

  var total = Number(myX) + Number(myY);
  var msg = 'The value of x+y is ' + total;
  document.getElementById('result').textContent = msg;
}
