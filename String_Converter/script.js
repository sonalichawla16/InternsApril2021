function Upper() {
  var mytext = document.getElementById("mytext").value;
  document.getElementById("output").innerHTML =
   mytext.toUpperCase();
}

function Lower() {
  var mytext = document.getElementById("mytext").value;
  document.getElementById("output").innerHTML =
   mytext.toLowerCase();
}

function Pascal() {
  var mytext = document.getElementById("mytext").value;
  mytext = mytext.charAt(0).toUpperCase() + mytext.slice(1);
  var i;
  for (i = 1; i < mytext.length; i++) {
    if (i > 120) {
      console.log("INFINITY");
      document.getElementById("output").innerHTML =
        "BAD LOGIC ERROR. Hit INFINITY";
      break;
    }
    if (mytext[i] == " ") {
      mytext =
        mytext.slice(0, i) +
        mytext.charAt(i + 1).toUpperCase() +
        mytext.slice(i + 2);
    }
  }
  document.getElementById("output").innerHTML = mytext;
}

function Snake() {
  var mytext = document.getElementById("mytext").value;
  var i;
  for (i = 0; i < mytext.length; i++) {
    if (i > 120) {
      console.log("INFINITY");
      document.getElementById("output").innerHTML =
        "BAD LOGIC ERROR. Hit INFINITY";
      break;
    }
    if (mytext[i] == " ") {
      mytext = mytext.slice(0, i) + "_" + mytext.slice(i + 1);
    }
  }
  document.getElementById("output").innerHTML =mytext;
}

function Kebab() {
  var mytext = document.getElementById("mytext").value;
  var i;
  for (i = 0; i < mytext.length; i++) {
    if (i > 120) {
      console.log("INFINITY");
      document.getElementById("output").innerHTML =
        "BAD LOGIC ERROR. Hit INFINITY";
      break;
    }
    if (mytext[i] == " ") {
      mytext = mytext.slice(0, i) + "-" + mytext.slice(i + 1);
    }
  }
  document.getElementById("output").innerHTML = mytext;
}

function Camel() {
  var mytext = document.getElementById("mytext").value;
  mytext = mytext.charAt(0).toLowerCase() + mytext.slice(1);
  var i;
  for (i = 1; i < mytext.length; i++) {
    if (i > 120) {
      console.log("INFINITY");
      document.getElementById("output").innerHTML =
        "BAD LOGIC ERROR. Hit INFINITY";
      break;
    }
    if (mytext[i] == " ") {
      mytext =
        mytext.slice(0, i) +
        mytext.charAt(i + 1).toUpperCase() +
        mytext.slice(i + 2);
    }
  }
  document.getElementById("output").innerHTML = mytext;
}