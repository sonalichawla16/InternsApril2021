var input_box = document.getElementById('calculation');

// document.getElementById('one').addEventListener('click',userClickButton('1'));
// document.getElementById('two').addEventListener('click',userClickButton('2'));
// document.getElementById('three').addEventListener('click',userClickButton('3'));
// document.getElementById('four').addEventListener('click',userClickButton('4'));
// document.getElementById('five').addEventListener('click',userClickButton('5'));
// document.getElementById('six').addEventListener('click',userClickButton('6'));
// document.getElementById('seven').addEventListener('click',userClickButton('7'));
// document.getElementById('eight').addEventListener('click',userClickButton('8'));
// document.getElementById('nine').addEventListener('click',userClickButton('9'));
// document.getElementById('zero').addEventListener('click',userClickButton('0'));
// document.getElementById('multiply').addEventListener('click',userClickButton('*'));
// document.getElementById('add').addEventListener('click',userClickButton('+'));
// document.getElementById('minus').addEventListener('click',userClickButton('-'));
// document.getElementById('divide').addEventListener('click',userClickButton('/'));
// document.getElementById('dot').addEventListener('click',userClickButton('.'));
// document.getElementById('clear').addEventListener('click',clearData());
// document.getElementById('equalTo').addEventListener('click',calculateValue());

function userClickButton(input){
    var oldInput = input_box.value;
    var newInput = oldInput + "" + input;
    input_box.value = newInput;
}

function calculateValue(){
    var input = input_box.value;
    var result =  eval(input);
    input_box.value = result;
}

function clearData(){
    input_box.value = "";
}