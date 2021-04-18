let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        // if(buttonText=='X'){
        //     butttonText= '*' ;
        //     screenValue += buttonText;
        //     screen.value = screenValue;
        // }
        if(buttonText=='C')
        {
            screenValue="";
            screen.value = screenValue;
        }
        else if(buttonText== '=' )
        {
            screen.value = eval(screenValue);
            
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }


    });
}