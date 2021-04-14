console.log("HI");

var writer = document.getElementById('writter');



var set=(txt)=>{
    var i=0,speed =100;
    console.log("H");
    function typeWriter() {
        console.log("I");

        if (i < txt.length) {
          writer.innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }}
return typeWriter();
}
var example = [' I am a web developer ...', ' I like playing chess ...', ' I like writing scripts ...', ' I love linux! ...'];

        textSequence(0);
        function textSequence(i) {

            if (example.length > i) {
                setTimeout(function() {
                    set(example[i]);
                    textSequence(++i);
                    writer.innerHTML=" ";
                }, 8000); // 1 second (in milliseconds)

            } else if (example.length == i) { // Loop
                textSequence(0);
            }
        }



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