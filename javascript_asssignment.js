
//iffe
function Per_name(person){
    return function(greet){
        console.log(`${greet},${person}!`)
    }
}
var him=Per_name("himanshu");
him("hi");
var ram=Per_name("ram");
ram("Morning");
Per_name("abc")("hi")
 

//call vs apply vs Bind 
/*

all three are used to set this scope  for calling function to passed function

they either can be used for setting this variable scope from prototype or any other normal function

differenece?:
there are different usescases for each:

apply and call donot return function and moreover are required to pass the function (to which this variable is required to set) along with parameters

 apply and call
 fromFunction.call(toFunction,Parameter1,Parameter2,Parameter3);
 fromFunction.apply(toFunction,Parameters);

bind return the function after setting this variable

let save=fromFunction.bind(toFunction);
save(Parameters)
*/