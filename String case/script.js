console.log("js enabled");

let input=document.getElementById("input");
let output=document.getElementById("output");


function lowerCase(){
// console.log("called lowerCase");
output.value=input.value.toLowerCase();
}
function upperCase(){
    // console.log("called upperCase");
output.value=input.value.toUpperCase();
    
    }
function pascalCase(){
// console.log("called pascalCase");
console.log(input.value);
let temp=input.value;
temp=temp.split(" ");
let final="";
for(let i=0;i<temp.length;i++)
{   
    final+=temp[i].charAt(0).toUpperCase()+temp[i].slice(1);
}
// console.log(final);

output.value=final;
    
}
function snakeCase(){
// console.log("called snakeCase");
// console.log(input.value);
let temp=input.value;
temp=temp.split(" ");
let final=temp.join("_");

// console.log(final);

output.value=final;
}
function kebabCase(){
// console.log("called kebabCase");
let temp=input.value;
temp=temp.split(" ");
let final=temp.join("-");

output.value=final;

}
function camelCase(){
// console.log("called camelCase");
let temp=input.value;
temp=temp.split(" ");
let final=temp[0];
if(temp.length>1)
for(let i=1;i<temp.length;i++)
{   
    final+=temp[i].charAt(0).toUpperCase()+temp[i].slice(1);
}

output.value=final;
}
