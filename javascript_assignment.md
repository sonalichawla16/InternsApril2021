
### Assignment Javascript 

- [Iffe](#iffe)
- [Call  Apply  Bind use](#call--apply--bind-use)
- [Differenece](#differenece)
- [Apply vs Call](#apply-vs-call)
- [Bind](#bind)


### Iffe
```javascript
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
 ```

### Call  Apply  Bind use 


all three are used to set this scope  for calling function to passed function

they either can be used for setting this variable scope from prototype or any other normal function

### Differenece
there are different usescases for each:

apply and call donot return function and moreover are required to pass the function (to which this variable is required to set) along with parameters

### Apply vs Call
 ```javacript
 fromFunction.call(toFunction,Parameter1,Parameter2,Parameter3);
 fromFunction.apply(toFunction,Parameters);
```
### Bind
bind return the function after setting this variable

```javascript
let save=fromFunction.bind(toFunction);
save(Parameters)
```