function displayRadioValue() {
    var ele = document.getElementsByName('output_case');
    var input_text = document.getElementById("input_case").value

      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            if(ele[i].value == 'lower')
            document.getElementById("result").innerHTML
                = "Final Lower Case Result: "+ input_text.toLowerCase();

            else if(ele[i].value == 'upper')
            document.getElementById("result").innerHTML
                = "<b>Final Upper Case Result: </b>"+ input_text.toUpperCase();

            else if(ele[i].value == 'pascal'){
                var temporary_text=input_text
            temporary_text = temporary_text.replace(/(\w)(\w*)/g,
                function(g0,g1,g2){ return g1.toUpperCase() + g2.toLowerCase();});
            document.getElementById("result").innerHTML
                = "Final Pascal Case Result: "+ temporary_text.replace(/ +/g, "");
            }
            

            else if(ele[i].value == 'snake'){
                const str = input_text;
                const toSnakeCase = (str = '') => {
                    const strArr = str.split(' ');
                    const snakeArr = strArr.reduce((acc, val) => {
                        return acc.concat(val.toLowerCase());
                    }, []);
                    return snakeArr.join('_');
                };
                var output = toSnakeCase(str);
                document.getElementById("result").innerHTML = "Final Snake Case Result: "+ output;
            }

            else if(ele[i].value == 'upper_snake'){
                const str = input_text;
                const toSnakeCase = (str = '') => {
                    const strArr = str.split(' ');
                    const snakeArr = strArr.reduce((acc, val) => {
                        return acc.concat(val.toUpperCase());
                    }, []);
                    return snakeArr.join('_');
                };
                var output = toSnakeCase(str);
                document.getElementById("result").innerHTML = "Final Upper Snake Case Result: "+ output;
            }

            else if(ele[i].value == 'kebab'){
                const str = input_text;
                const toSnakeCase = (str = '') => {
                    const strArr = str.split(' ');
                    const snakeArr = strArr.reduce((acc, val) => {
                        return acc.concat(val.toLowerCase());
                    }, []);
                    return snakeArr.join('-');
                };
                var output = toSnakeCase(str);
                document.getElementById("result").innerHTML = "Final Kebab Case Result: "+ output;
            }

            else if(ele[i].value == 'camel'){
                input_text = input_text.replace(/[-\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
                camel_result = input_text.substr(0, 1).toLowerCase() + input_text.substr(1);
                document.getElementById("result").innerHTML = "Final Camel Case Result: "+ camel_result;
            }
            

            
        }
    }
    console.log("DONE")
}