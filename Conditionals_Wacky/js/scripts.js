//Gregory Mitchell Feb 20, 2014 Activity: Conditionals Wacky
// wacky conditionals time to get ready 
var name = prompt("Please enter your name");
var time = parseInt(prompt("On the average, how long does it take you to get ready in the morning?\nTen Minutes, Twenty Minutes, Thrity Minutes, Foutry Minutes, Fifty Minutes, Sixty Plus\nEnter the number in the box"));
if(time >= 0 && time <= 9) { // time entered is between 0 and 9
  console.log(time + " minutes is lightning quick " + name + " there is no way you are female");
}
if(time >= 10 && time <= 19) { // time entered is between 10 and 19
  console.log(time + " minutes is very quick " + name + " you are most likely a male");
}
if(time >= 20 && time <= 29) { // time entered is between 20 and 29
  console.log(time + " minutes is still very quick " + name + " you are most likely a male");
}
if(time >= 30 && time<= 39) { // time entered is between 30 and 39
  console.log(time + " minutes is average " + name + " you could be a male or female");
}
if(time >= 40 && time <= 49) { // time entered is between 40 and 49
  console.log(time + " minutes is teetering on rediculous " + name + " you're most likely a female");
}
if(time >= 50 && time <= 59) { // time entered is between 50 and 59
  console.log(time + " is way too long to get ready " + name + " you scream female");
}
if(time > 60) { // time entered is between 60 and 100
  console.log(time + " really???? " + name + " do you get lost getting ready?");
}


if (name == "") {
  alert("Please enter a name");
}
if (time == "") {
  prompt("Enter a number!");
}