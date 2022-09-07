// create functions 
 

function add(...nums) { 
    let sum = 0; 
    for (let i = 0; i < nums.length; i++) { 
        let num = nums[i]; 
        sum += num; 
    }
    return sum;  
}


function subtract(...nums) { 
    let total = 0; 

    for (let i = 0; i < nums.length; i++) { 
        let num = nums[i]; 
        total =- num; 
    }
    return total; 
} 


function multiply(...nums) { 
    let product = 1; 

    for (let i = 0; i < nums.length; i++) { 
        let num = nums[i]; 

        product *= num; 

    }
    return product; 
} 

function divide(input1,... input2) { 
    let quotient = input1 / input2; 
    return quotient; 
}  

// function divide(input1,... input2) { 

// let result = 0; 

// s1 = parseInt(input1); 
// s2 = parseInt(input2); 

// if (s2!=0) { 
//     result = s1 / s2; 
// }
//     return result; 
// }  

// create a new function called operate 
// takes an operator (+, -, *, / ) 
// takes in 2 numbers 
// calls the operation functions to calculate final result 

function operate(num1, num2, operator) { 
    if (operator === '+') { 
        add(); 
        return num1 + num2; 
    } else if (operator === '-') { 
        subtract(); 
        return num1 - num2; 
    } else if (operator === '*') { 
        multiply(); 
        return num1 * num2; 
    } else if (operator === '/') { 
        divide(); 
        return num1 / num2; 
    } 
} 

// global variable to hold the display value  
let storeDisplayValue = ''; 

let storeOperatorValue = ''; 

// event listener for 7 

let sevenBtn = document.getElementById('seven-btn'); 

sevenBtn.addEventListener('click', e => { 
    let output = document.getElementById('output'); 

    output.textContent = '7';  

    storeDisplayValue = '7'; 
})

// event listener for 8 
let eightBtn = document.getElementById('eight-btn'); 

eightBtn.addEventListener('click', e => { 
    let output = document.getElementById('output'); 

    output.textContent = '8';  

    storeDisplayValue = '8'; 
}) 
// 9 
let nineBtn = document.getElementById('nine-btn'); 

nineBtn.addEventListener('click', e => { 
    let output = document.getElementById('output'); 

    output.textContent = '9';  

    storeDisplayValue = '9'; 
}) 

// divide  
let divideBtn = document.getElementById('divide-btn'); 

divideBtn.addEventListener('click', e => { 
    let output = document.getElementById('output'); 

    output.textContent = '÷'  

    storeOperatorValue = '÷' 
}) 

// four 
let fourBtn = document.getElementById('four-btn'); 

fourBtn.addEventListener('click', e => { 
    let output = document.getElementById('output'); 

    output.textContent = '4'  

    storeDisplayValue = '4' 
})  

let fiveBtn = document.getElementById('five-btn'); 

fiveBtn.addEventListener('click', e => { 
    let output = document.getElementById('output'); 

    output.textContent = '5'  

    storeDisplayValue = '5' 
})  

let sixBtn = document.getElementById('six-btn'); 

sixBtn.addEventListener('click', e => { 
    let output = document.getElementById('output'); 

    output.textContent = '6'  

    storeDisplayValue = '6' 
}) 

let multiplyBtn = document.getElementById('multiply-btn'); 

multiplyBtn.addEventListener('click', e => { 
    let output = document.getElementById('output'); 

    output.textContent = 'X'  

    storeOperatorValue = 'X' 
})  

let oneBtn = document.getElementById('one-btn'); 

oneBtn.addEventListener('click', e => { 
    let output = document.getElementById('output'); 

    output.textContent = '1'  

    storeDisplayValue = '1' 
})  

let twoBtn = document.getElementById('two-btn'); 

twoBtn.addEventListener('click', e => { 
    let output = document.getElementById('output'); 

    output.textContent = '2'  

    storeDisplayValue = '2' 
})  

let threeBtn = document.getElementById('three-btn'); 

threeBtn.addEventListener('click', e => { 
    let output = document.getElementById('output'); 

    output.textContent = '3'  

    storeDisplayValue = '3' 
}) 

let subtractBtn = document.getElementById('subtract-btn'); 

subtractBtn.addEventListener('click', e => { 
    let output = document.getElementById('output'); 

    output.textContent = '-'  

    storeOperatorValue = '-' 
}) 

periodBtn = document.getElementById('period-btn'); 

periodBtn.addEventListener('click', e => { 
    let output = document.getElementById('output'); 

    output.textContent = '.'  

    storeDisplayValue = '.' 
}) 

zeroBtn = document.getElementById('zero-btn'); 

zeroBtn.addEventListener('click', e => { 
    let output = document.getElementById('output'); 

    output.textContent = '0'  

    storeDisplayValue = '0' 
}) 

equalsBtn = document.getElementById('equals-btn'); 

equalsBtn.addEventListener('click', e => { 
    let output = document.getElementById('output'); 

    output.textContent = '='  

    storeOperatorValue = '=' 
}) 

additionBtn = document.getElementById('addition-btn'); 

additionBtn.addEventListener('click', e => { 
    let output = document.getElementById('output'); 

    output.textContent = '+'  

    storeOperatorValue = '+' 
}) 




