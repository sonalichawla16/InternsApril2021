function UpperCase(){
    var myStr = document.getElementById("name").value;
    myStr = myStr.toUpperCase();
    document.getElementById("output").innerHTML = myStr;

}
function LowerCase() {
  var myStr = document.getElementById("name").value;
  myStr = myStr.toLowerCase();
  document.getElementById("output").innerHTML = myStr;
}

function toPascalCase() {
  var mytext = document.getElementById("name").value;
  mytext = mytext.charAt(0).toUpperCase() + mytext.slice(1);
  var i;
  for (i = 1; i < mytext.length; i++) {
    if (i > 120) {
      console.log("INFINITY");
      alert("BAD LOGIC ERROR. Hit INFINITY");
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





function KebabCase() {
  var str = document.getElementById("name").value;
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

function toKebabCase() {
  var ans = KebabCase(); 
  document.getElementById("output").innerHTML = ans;
}


function CamelCase() {
  var str = document.getElementById("name").value;
  return (
    str
      .split(" ")
      // get rid of any extra spaces using trim
      .map((a) => a.trim())
      // Convert first char to upper case for each word
      .map((a) => a[0].toUpperCase() + a.substring(1))
      // Join all the strings back together
      .join("")
  );
}
function toCamelCase() {
  var ans = CamelCase();
  document.getElementById("output").innerHTML = ans;
}
