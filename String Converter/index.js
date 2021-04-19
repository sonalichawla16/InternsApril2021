function clicked(){
    var texted=document.getElementById('text').value;
    if(document.getElementById("UpperCase").checked)
    {
        alert(texted.toUpperCase());
    }
    else if(document.getElementById("LowerCase").checked)
    {
        alert(texted.toLowerCase());
    }
    else if(document.getElementById("PascalCase").checked)
    {
       var pascal=toPascalCase();
       alert(pascal);
    }
    else if(document.getElementById("SnakeCase").checked)
    {
       var snake=toSnakeCase();
       alert(snake);
    }
    else if(document.getElementById("UpperAndSnakeCase").checked){
        var uasc=toUpperAndSnake();
        alert(uasc);
    }
    else if(document.getElementById("KebabCase").checked){
        var kebab=toKebabCase();
        alert(kebab);
    }
    else if(document.getElementById("CamelCase").checked){
        var camel=toCamelCase();
        alert(camel);
    }
}

function toPascalCase()
{
    var mytext = document.getElementById("text").value; 
    console.log("My input text="+mytext);
    mytext = mytext.charAt(0).toUpperCase() + mytext.slice(1);
    var i;
    for (i = 1; i < mytext.length; i++) {
     if (i > 120) {
        console.log("INFINITY");
        alert(
        "BAD LOGIC ERROR. Hit INFINITY");
      break;
    }
    if (mytext[i] == " ") {
      mytext =
        mytext.slice(0, i) +
        mytext.charAt(i + 1).toUpperCase() +
        mytext.slice(i + 2);
    }
  }
  return mytext;
}
function toSnakeCase(){
    var str=document.getElementById("text").value; 
        return str && str.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(s => s.toLowerCase())
            .join('_');
}
function toUpperAndSnake()
{
    var str=document.getElementById("text").value.toUpperCase(); 
    
    return str && str.match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
                .map(s => s.toUpperCase())
                .join('_');

}
function toKebabCase()
{
    var str=document.getElementById("text").value; 
    return str
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}
function toCamelCase()
{
    var str=document.getElementById("text").value; 
    return str.split(' ')
      // get rid of any extra spaces using trim
      .map(a => a.trim())
      // Convert first char to upper case for each word
      .map(a => a[0].toUpperCase() + a.substring(1))
      // Join all the strings back together
      .join("")
//     function toCamelCase()
// {
//     var mytext = document.getElementById("text").value;
//   mytext = mytext.charAt(0).toLowerCase() + mytext.slice(1);
//   var i;
//   for (i = 1; i < mytext.length; i++) {
//     if (i > 120) {
//       console.log("INFINITY");
//       document.getElementById("output").innerHTML =
//         "BAD LOGIC ERROR. Hit INFINITY";
//       break;
//     }
//     if (mytext[i] == " ") {
//       mytext =
//         mytext.slice(0, i) +
//         mytext.charAt(i + 1).toUpperCase() +
//         mytext.slice(i + 2);
//     }
//   }
//  return mytext;

// }
}