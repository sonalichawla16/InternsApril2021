const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };
  
  function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
  
    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  }
  
  function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = "0."
      calculator.waitingForSecondOperand = false;
      return
    }
  
    if (!calculator.displayValue.includes(dot)) {
      calculator.displayValue += dot;
    }
  }
  
  function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);

    if (operator && calculator.waitingForSecondOperand)  {
      calculator.operator = nextOperator;
      return;
    }
  
  
    if (firstOperand == null && !isNaN(inputValue)) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
  
      calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
      calculator.firstOperand = result;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
  }
  
  function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
        // console.log("ans" + firstOperand + secondOperand );
      return firstOperand + secondOperand;
    } else if (operator === '-') {
      return firstOperand - secondOperand;
    } else if (operator === '*') {
      return firstOperand * secondOperand;
    } else if (operator === '/') {
      return firstOperand / secondOperand;
    }
  
    return secondOperand;
  }
  
  function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
  }
  
  function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
  }
  
  updateDisplay();
  
  const keys = document.querySelector('.calculator-keys');
  keys.addEventListener('click', event => {
    //   console.log("call at-------------",event.target.firstChild.nodeValue)
    // console.log("many1--- ",event.target," ----- evv");
    // console.log('after changing',event.target)
    // console.log("many2--- ",event.currentTarget," ----- evv");
    // const target = event.target.parentElement;
    // const { value } = target;

    const target = event.target.parentElement;
    const { value } = target;
    console.log(target,value);
    if (!target.matches('button')) {
        console.log("exited somes")
        return;
    }
    
    switch (value) {
        case '+':
            case '-':
                case '*':
                    case '/':
                        case '=':
                            console.log("11111111"+target)
                            handleOperator(value);
                            break;
                            case '.':
                                inputDecimal(value);
                                break;
      case 'all-clear':
          resetCalculator();
        break;
      default:
        if (Number.isInteger(parseFloat(value))) {
            inputDigit(value);
        }
    }
    
    updateDisplay();
  });