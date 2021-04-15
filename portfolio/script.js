//Navbar handeling
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('collapsibleNavbar')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})

//DOM-Manipulation
let writer = document.getElementById('writter');
let quote= document.querySelector('.my-blockquote');
let quoteName= document.querySelector('.my-blockquote-name')
var example = [' I am a web developer ...', ' I like playing chess ...', ' I like writing scripts ...', ' I love linux! ...'];

var set=(txt)=>{
    var i=0,speed =100;
    function typeChar() {

        if (i < txt.length) {
          writer.innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeChar, speed);
        }}
return typeChar();
}

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
// console.log(quote,quoteName)
//Api-fetch-call
fetch('http://quotes.stormconsultancy.co.uk/random.json')
.then(response => response.json())
.then(data => 
    {  
        quote.innerHTML=data.quote;
        quoteName.textContent=data.author
        // console.log(`received -${data}`)

});
