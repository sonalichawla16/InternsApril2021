function fn1(){
    var x=document.getElementById("text1").value;
    var str= x.toUpperCase();
    document.querySelector('.output').innerHTML = str;
}
function fn2(){
    var x=document.getElementById("text1").value;
    var str= x.toLowerCase();
    document.querySelector('.output').innerHTML = str;
}
function fn3(){
    var x=document.getElementById("text1").value;
    var str= toPascalCase(x);
    document.querySelector('.output').innerHTML = str;
}
function fn4(){
    var x=document.getElementById("text1").value;
    var str= toSnakeCase(x);
    document.querySelector('.output').innerHTML = str;
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

    const toSnakeCase = (str = '') => {
        const strArr = str.split(' ');
        const snakeArr = strArr.reduce((acc, val) => {
           return acc.concat(val.toLowerCase());
        }, []);
        return snakeArr.join('_');
     };
