function callFriend(friendsName = "Aizu") {
  console.log(friendsName);
  console.log("Pick up the phone");
  console.log("Type in the number of" + friendsName);
  console.log("Press call");
  console.log("Wait for the answer");
}

// callFriend("Aizu");
// callFriend("Mali");
// callFriend("Eliza");
// callFriend();

function calculareSquareArea(a, b) {
  console.log(a * b);
}

// calculareSquareArea(5, 100000);
// calculareSquareArea(10, 12);
// calculareSquareArea(1, 0);

function calculteCylinderVolume(r, h) {
  return 3.14 * r * r * h;
}
var volume = calculteCylinderVolume(3, 4);
// console.log(volume);

var smallGlassVol = calculteCylinderVolume(3, 4);
var bottleVol = calculteCylinderVolume(3, 10);

// console.log(smallGlassVol);
// console.log(bottleVol);

// document.write("<h1>Hello world</h1>!");
// document.write("<p>Goodbye world</p>");

function countdown(number) {
  for (let i = number; i > 0; i--) {
    document.write(i + "<br>");
  }
}

// countdown(5);
// countdown(10);

function countdown(number) {
  for (let i = number; i > 0; i--) {
    document.write(i + "");
  }
}

// countdown(5);
// countdown(10);

// countdown(prompt("Enter the number" , 100))

// var number = Math.random();
// document.write(number)

function randomColor() {
  var red = Math.random() * 225;
  var blue = Math.random() * 225;
  var green = Math.random() * 225;

  return "rgb(" + red + "," + green + "," + blue + ")";
}

function colorfulText(text, color) {
  document.write('<h1 style="color:' + color + ';">' + text + "</h1>");
}

var color = randomColor();
colorfulText("Hello world!", color);
colorfulText("Bye world!", color);
