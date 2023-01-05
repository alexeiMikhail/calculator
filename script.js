let buttons = {
  clear: {
    id: 'ac',
    display: '0',
    type: 'clear',
    press(){
      handleInput(this)
    },
    element: document.getElementById('ac'),
  },
  pm: {
    id: 'pm',
    display: '+/-',
    type: 'plusminus',
    press(){
      handleInput(this)
    },
    element: document.getElementById('pm'),
  },
  percent: {
    id: 'percent',
    display: '%',
    type: 'percent',
    press(){
      handleInput(this)
    },
    element: document.getElementById('percent'),
  },
  divide: {
    id: 'divide',
    display: '/',
    type: 'operator',
    press(){
      handleInput(this)
    },
    element: document.getElementById('divide'),
  },
  multiply: {
    id: 'multiply',
    display: '*',
    type: 'operator',
    press(){
      handleInput(this)
    },
    element: document.getElementById('multiply'),
  },
  subtract: {
    id: 'subtract',
    display: '-',
    type: 'operator',
    press(){
      handleInput(this)
    },
    element: document.getElementById('subtract'),
  },
  add: {
    id: 'add',
    display: '+',
    type: 'operator',
    press(){
      handleInput(this)
    },
    element: document.getElementById('add'),
  },
  equals: {
    id: 'equals',
    display: '=',
    type: 'equals',
    press(){
      handleInput(this)
    },
    element: document.getElementById('equals'),
  },
  one: {
    id: 'one',
    display: '1',
    type: 'digit',
    press(){
      handleInput(this)
    },
    element: document.getElementById('one'),
  },
  two: {
    id: 'two',
    display: '2',
    type: 'digit',
    press(){
      handleInput(this)
    },
    element: document.getElementById('two'),
  },
  three: {
    id: 'three',
    display: '3',
    type: 'digit',
    press(){
      handleInput(this)
    },
    element: document.getElementById('three'),
  },
  four: {
    id: 'four',
    display: '4',
    type: 'digit',
    press(){
      handleInput(this)
    },
    element: document.getElementById('four'),
  },
  five: {
    id: 'five',
    display: '5',
    type: 'digit',
    press(){
      handleInput(this)
    },
    element: document.getElementById('five'),
  },
  six: {
    id: 'six',
    display: '6',
    type: 'digit',
    press(){
      handleInput(this)
    },
    element: document.getElementById('six'),
  },
  seven: {
    id: 'seven',
    display: '7',
    type: 'digit',
    press(){
      handleInput(this)
    },
    element: document.getElementById('seven'),
  },
  eight: {
    id: 'eight',
    display: '8',
    type: 'digit',
    press(){
      handleInput(this)
    },
    element: document.getElementById('eight'),
  },
  nine: {
    id: 'nine',
    display: '9',
    type: 'digit',
    press(){
      handleInput(this)
    },
    element: document.getElementById('nine'),
  },
  zero: {
    id: 'zero',
    display: '0',
    type: 'digit',
    press(){
      handleInput(this)
    },
    element: document.getElementById('zero'),
  },
  dot: {
    id: 'dot',
    display: '.',
    type: 'decimal',
    press(){
      handleInput(this)
    },
    element: document.getElementById('dot'),
  },
}

for (const property in buttons) {
  //console.log(`${property}: ${buttons[property].element}`);
  buttons[property].element.addEventListener('click', () => {
    buttons[property].press()
  })
}

//let displayElement = document.getElementById('display')
//let stored = 0
//let reset = false
//let decimal = false
//let last = null

const calculator = {
  displayValue: '0',
  firstOperand: null,
  operator: null,
  secondOperand: null
}

const calculate = () => {
  console.log('made it to calculate function')
  const { operator, firstOperand, secondOperand } = calculator
  console.log(operator)

  if (operator === '+') {
    return firstOperand + secondOperand
  }
  if (operator === '-') {
    return firstOperand - secondOperand
  }
  if (operator === '*') {
    return firstOperand * secondOperand
  }
  if (operator === '/') {
    return firstOperand / secondOperand
  }
}

const handleDigit = (digit) => {
  if (!calculator.operator) {
    calculator.displayValue = calculator.displayValue === '0' ? digit : calculator.displayValue + digit
    calculator.firstOperand = parseFloat(calculator.displayValue)
    console.log(calculator)
    updateDisplay()
    return
  }
  if (!calculator.secondOperand) {
    calculator.displayValue = digit
    calculator.secondOperand = parseFloat(calculator.displayValue)
    updateDisplay()
    return
  }
  calculator.displayValue = calculator.displayValue === '0' ? digit : calculator.displayValue + digit
  calculator.secondOperand = parseFloat(calculator.displayValue)
  console.log(calculator)
  updateDisplay()
}

const handleOperator = (op) => {
  if(!calculator.firstOperand) {
    calculator.operator = op
    return
  }
  if (!calculator.secondOperand) {
    calculator.operator = op
    return
  }
  calculator.firstOperand = calculate()
  calculator.operator = op
  calculator.displayValue = calculator.firstOperand.toString()
  updateDisplay()
  calculator.secondOperand = null
  console.log(op)
}

const handleEquals = () => {
  calculator.firstOperand = calculate()
  calculator.displayValue = calculator.firstOperand.toString()
  updateDisplay()
}

const handleClear = () => {
  calculator.displayValue = '0'
  calculator.firstOperand = null
  calculator.secondOperand = null
  calculator.operator = null
  updateDisplay()
  console.log(calculator)
}

const handleInput = (input) => {
  if (input.type === 'digit') {
    handleDigit(input.display)
    console.log(calculator)
    return
  }
  if (input.type === 'operator') {
    handleOperator(input.display)
    console.log(calculator)
    return
  }
  if (input.type === 'clear') {
    handleClear()
    console.log(calculator)
    return
  }
  if (input.type === 'equals') {
    handleEquals()
    console.log(calculator)
    return
  }
  console.log(input.type)
  console.log(calculator)
}

const updateDisplay = () => {
  const displayElement = document.getElementById('display')
  displayElement.textContent = calculator.displayValue
}

/*

function update_display(s) {
    if (display.textContent == "0") {
        display.textContent = s;
        return;
    }
    display.textContent += s;
}
function clear_display() {
    display.textContent = "0";
}

function storeNum() {
    stored = parseInt(display.textContent);
}

function add() {
    reset = true;
    stored += parseInt(display.textContent);
    last = add;
    console.log(`pressed ${this.display}`)
}


function operate() {
    let result;
    if (last) {
        result = last(stored);
    }
    

}

function multiply() {
    stored *= parseInt(display.textContent);
    last = multiply;
}
*/