
var arr = document.getElementsByClassName('khabar');
var i;
for(i=0;i<arr.length;i++){
  arr[i].innerHTML = "Hai Juga!"; //change Hello and Hai to Hai Juga!
}

//styling array length (2, because there's only 'hello' and 'hai' that use class 'khabar')
document.write(arr.length + "<br>");
var t = arr.length;
document.write("<p style=\"color:red\">" + t + "<br>" + "</p>");

//print out pi number
document.write(Math.PI +"<br>");
//print out random number between 0 and 9
document.write(Math.floor(Math.random()*10));
//show array length in console
console.log(arr.length);

document.write("<br><br>");

//print out current date and time
var d = new Date();

document.write(d.getDate() + "/");
document.write(d.getMonth()+1 + "/");
document.write(d.getFullYear() + "\t");

if(d.getHours()>12){
  document.write((d.getHours()-12) + ":" + d.getMinutes() + "PM");
}
else {
  document.write(d.getHours() + ":" + d.getMinutes() + "AM");
}
