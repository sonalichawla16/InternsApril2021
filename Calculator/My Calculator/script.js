function getHistory(){    //to get value stored in history panel
    return document.getElementById("history-value").innerText
 }
 function printHistory(num){  //to store value in history panel
     document.getElementById("history-value").innerText=num;
 }
 function getOutput(){      //to get value stored in output panel
     return document.getElementById("output-value").innerText;
 }
 function printOutput(num){   //to store value in output panel
     if(num=="") //required as the getFormattedNumber will convert empty value to 0;
     document.getElementById("output-value").innerText=num;
     else{
     document.getElementById("output-value").innerText=getFormattedNumber(num);
 }
 }
 function getFormattedNumber(num){   //to convert the number into a comma separated format
    if(num=="-")
    return ""; 
    var n=Number(num);
     var newN=n.toLocaleString("en"); 
     return newN;
 }
 function reverseNumberFormat(num){   //to convert the number to non-comma separated format
     return Number(num.replace(/,/g,''));
 }
 var operator = document.getElementsByClassName("operator");
 for(var i=0;i<operator.length;i++){       //adding event listners for operator buttons
     operator[i].addEventListener('click',function(){
         if(this.id=="clear"){
             printHistory("");
             printOutput("");
         }
         else if(this.id=="backspace"){
             var output=reverseNumberFormat(getOutput()).toString();
             if(output)
             {
                 output=output.substr(0,output.length-1);
                 printOutput(output);
             }
            }
             else{
                 var output=getOutput();
                 var history=getHistory();
                 if(output==""&&history!="")
                 {
                     if(isNaN(history[history.length-1]))
                     history=history.substr(0,history.length-1)
                 }
                 if(output!=""||history!="")
                 {
                     output=output==""?output:reverseNumberFormat(output);
                     history+=output;
                     if(this.id=="="){
                         var result=eval(history);
                         printOutput(result);
                         printHistory("");
                     }
                     else{
                         history+=this.id;
                         printHistory(history);
                         printOutput("");
                     }
                 }
             
                }
     })
 }
 var number = document.getElementsByClassName("number");
 for(var i=0;i<number.length;i++){         //adding event listners for number buttons
     number[i].addEventListener('click',function(){
         var output=reverseNumberFormat(getOutput());
         if(output!=NaN){          //output is a number
            output+=this.id;
            printOutput(output);
         }
     })
 }
 