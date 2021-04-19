//Lowercase to Uppercase
function myFunction1() {
    var str = document.getElementById("myText").value;
    var res = str.toUpperCase();
  document.getElementById("demo").innerHTML = res;
  }

  function myFunction2() {
    var str = document.getElementById("myText").value;
    var res = str.toLowerCase();
  document.getElementById("demo").innerHTML = res;
  }
  

  function myFunction3() {
    
    var str = document.getElementById("myText").value;

    str=str.toLowerCase();
    
    
        for(var i=0;i<str.length;i++){
        str=str.replace(' ','_');

        }
        document.getElementById("demo").innerHTML=str;
        
        
    }
    function myFunction4() {
    
        var j;
        var str = document.getElementById("myText").value;
        var temp=str.toUpperCase();
        
        for(let i=0;i<str.length;i++){

            if(str[i]==' '){
                
                str=str.slice(0,i)+str.charAt(i+1).toUpperCase()+str.slice(i+2);
                
            
            }

        }
        document.getElementById("demo").innerHTML=str;
        
        
        
    
            // if(str[i]==" "){
    
            // var j=i;  
                
            //  }
            // document.getElementById("demo").innerHTML=[str.slice(0, j), u, str.slice(j)].join('');
            // document.getElementById("demo").innerHTML=str;
            
            
        
    }
function myFunction5() {
    
    var str = document.getElementById("myText").value;

    str=str.toLowerCase();
    
    
        for(var i=0;i<str.length;i++){
        str=str.replace(' ','-');

        }
        document.getElementById("demo").innerHTML=str;
        
        
    }
    function myFunction6() {
    
        var str = document.getElementById("myText").value;
    
        str=str.toUpperCase();
        
        
            for(var i=0;i<str.length;i++){
            str=str.replace(' ','_');
    
            }
            document.getElementById("demo").innerHTML=str;
            
            
        }
        function myFunction7() {
    
            var j;
            var str = document.getElementById("myText").value;
            var temp=str.toUpperCase();
            var up=str.charAt(0);
            var lo=temp.charAt(0);
            str=str.replace(up,lo);
            for(let i=0;i<str.length;i++){

                if(str[i]==' '){
                    
                    str=str.slice(0,i)+str.charAt(i+1).toUpperCase()+str.slice(i+2);
                    
                
                }

            }
            document.getElementById("demo").innerHTML=str;
            
            
            
        
                // if(str[i]==" "){
        
                // var j=i;  
                    
                //  }
                // document.getElementById("demo").innerHTML=[str.slice(0, j), u, str.slice(j)].join('');
                // document.getElementById("demo").innerHTML=str;
                
                
            
        }

    

  