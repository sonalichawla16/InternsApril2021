function fn1(){
    var x=document.getElementById("text1").value;
    var str= x.toUpperCase();
    alert(str);
}
function fn2(){
    var x=document.getElementById("text1").value;
    var str= x.toLowerCase();
    alert(str);
}
function fn3(){
    var x=document.getElementById("text1").value;
    var str= toPascalCase(x);
    alert(str);
}
function fn4(){
    var x=document.getElementById("text1").value;
    var str= toSnakeCase(x);
    alert(str);
}
function fn5(){
    var x=document.getElementById("text1").value;
    var str= toKebebCase(x);
    alert(str);
}
function toCamelCase(str) {
    // Lower cases the string
    console.log("Return ?");

    return str.toLowerCase()
      // Replaces any - or _ characters with a space 
      .replace( /[-_]+/g, ' ')
      // Removes any non alphanumeric characters 
      .replace( /[^\w\s]/g, '')
      // Uppercases the first character in each group immediately following a space 
      // (delimited by spaces) 
      .replace( / (.)/g, function($1) { return $1.toUpperCase(); })
      // Removes spaces 
      .replace( / /g, '' );

  }

function fn6(){
    var x=document.getElementById("text1").value;
    var str=toCamelCase(x);
    alert(str);
}
function toPascalCase(string) {
    return `${string}`
      .replace(new RegExp(/[-_]+/, 'g'), ' ')
      .replace(new RegExp(/[^\w\s]/, 'g'), '')
      .replace(
        new RegExp(/\s+(.)(\w+)/, 'g'),
        ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
      )
      .replace(new RegExp(/\s/, 'g'), '')
      .replace(new RegExp(/\w/), s => s.toUpperCase());
  }


// function toKebebCase(str) {
//     str &&
//     str
//       .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
//       .map(x => x.toLowerCase())
//       .join('-');


//   }
  const toKebebCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');


    const toSnakeCase = (str = '') => {
        const strArr = str.split(' ');
        const snakeArr = strArr.reduce((acc, val) => {
           return acc.concat(val.toLowerCase());
        }, []);
        return snakeArr.join('_');
     };



