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
        let num1 = nums[i]; 
        let num2 = nums[i + 1]; 
        
        return num1 - num2; 
       
    }
} 


function multiply(...nums) { 
    let product = 1; 

    for (let i = 0; i < nums.length; i++) { 
        let num = nums[i]; 

        product *= num; 

    }
    return product; 
} 


// function divide(...nums) { 
//     let total = 1; 

//     for (let i = 0; i < nums.length; i++) { 
//         let num = nums[i]; 

//         total /= num; 
//     }
//     return total; 
// }

function divide(...nums) { 
    for (let i = 0; i < nums.length; i++) { 
        let num1 = nums[i]; 
        let num2 = nums[i + 1]; 
        return num1 / num2;  
    }
}

// fix this function, copy format above 
// function divide(input1,... input2) { 
//     let quotient = input1 / input2; 
//     return quotient; 
// }  

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

// should be unlimited parameters, operator comes first, 

function operate(num1, num2, op) { 
    if (op === '+') { 
       return add(num1, num2, op); 
        
    } else if (op === '-') { 
       return subtract(num1, num2, op); 
        
    } else if (op === '*') { 
        return multiply(num1, num2, op); 
         
    } else if (op === '÷') { 
        return divide(num1, num2, op); 
     } 
} 

// global variable to hold the display value  
let output = document.getElementById('output'); 
let num1 = ''; 
let op = ''; 
let num2 = ''; 

function updateDOM() { 
  output.textContent = `${num1} ${op} ${num2}`; 
} 

// num1 += e.target.textContent; 
// event listener for 7 

let sevenBtn = document.getElementById('seven-btn'); 

sevenBtn.addEventListener('click', e => { 
  
  if (num1 === '') {  
   num1 += e.target.textContent;
  } else { 
  num2 += e.target.textContent;    
  } 

  
  updateDOM(); 
}) 


// event listener for 8 
let eightBtn = document.getElementById('eight-btn'); 

eightBtn.addEventListener('click', e => { 
  
   if (num1 === '') {  
   num1 += e.target.textContent;
  } else { 
  num2 += e.target.textContent;    
  } 
  
  updateDOM(); 
}) 
// 9 
let nineBtn = document.getElementById('nine-btn'); 

nineBtn.addEventListener('click', e => { 
    
    if (num1 === '') {  
   num1 += e.target.textContent;
  } else { 
  num2 += e.target.textContent;    
  } 
  
  updateDOM(); 
}) 

// divide  
let divideBtn = document.getElementById('divide-btn'); 

divideBtn.addEventListener('click', e => { 

    op += e.target.textContent; 
  
    updateDOM(); 
  

}) 

// four 
let fourBtn = document.getElementById('four-btn'); 

fourBtn.addEventListener('click', e => { 
    
    if (num1 === '') {  
   num1 += e.target.textContent;
  } else { 
  num2 += e.target.textContent;    
  } 
  
    updateDOM(); 
})  

let fiveBtn = document.getElementById('five-btn'); 

fiveBtn.addEventListener('click', e => { 
   
     if (num1 === '') {  
   num1 += e.target.textContent;
  } else { 
  num2 += e.target.textContent;    
  } 
  
    updateDOM(); 
})  

let sixBtn = document.getElementById('six-btn'); 

sixBtn.addEventListener('click', e => { 
  
      if (num1 === '') {  
   num1 += e.target.textContent;
  } else { 
  num2 += e.target.textContent;    
  } 
  
  updateDOM(); 
}) 

let multiplyBtn = document.getElementById('multiply-btn'); 

multiplyBtn.addEventListener('click', e => { 
   op += e.target.textContent; 
  
    updateDOM();   
})  

let oneBtn = document.getElementById('one-btn'); 

oneBtn.addEventListener('click', e => { 
  
     if (num1 === '') {  
   num1 += e.target.textContent;
  } else { 
  num2 += e.target.textContent;    
  } 
  
  updateDOM(); 
})  

let twoBtn = document.getElementById('two-btn'); 

twoBtn.addEventListener('click', e => { 
  
    if (num1 === '') {  
   num1 += e.target.textContent;
  } else { 
  num2 += e.target.textContent;    
  }  
  
  updateDOM(); 
})  

let threeBtn = document.getElementById('three-btn'); 

threeBtn.addEventListener('click', e => { 
  
    if (num1 === '') {  
   num1 += e.target.textContent;
  } else { 
  num2 += e.target.textContent;    
  }  
  
  updateDOM();
}) 

let subtractBtn = document.getElementById('subtract-btn'); 

subtractBtn.addEventListener('click', e => { 
    op += e.target.textContent; 
  
    updateDOM(); 
}) 

periodBtn = document.getElementById('period-btn'); 

periodBtn.addEventListener('click', e => { 
  
    if (num1 === '') {  
   num1 += e.target.textContent;
  } else { 
  num2 += e.target.textContent;    
  }  
  
  updateDOM();
}) 

zeroBtn = document.getElementById('zero-btn'); 

zeroBtn.addEventListener('click', e => { 
  
   if (num1 === '') {  
   num1 += e.target.textContent;
  } else { 
  num2 += e.target.textContent;    
  } 
  
  updateDOM();
}) 


equalsBtn = document.getElementById('equals-btn'); 

equalsBtn.addEventListener('click', e => {  
  
   let result = operate(num1, num2, op); 
  
  output.textContent = result;  
  

  
  // needs to be it's own function 
  
  // let result = operate(num1, num2, operator); 
  // output.textContent = result; 
  
  
//     let output = document.getElementById('output'); 

//     output.textContent = '='  

//     storeOperatorValue = '=' 
}) 

additionBtn = document.getElementById('addition-btn'); 

additionBtn.addEventListener('click', e => { 
   op += e.target.textContent; 
  
   updateDOM(); 
}) 




// gameplan for next step, 

// if statement which will check if storeOperatorValue === any operator seperated by || 
// use || because if it's any one of those operators userInput1 needs to be saved 
// if true, save userInput1 to var let userInput1 = ${storeDisplayValue} 
// also save the operend that the user picked, let selectedOperator = ${storeOperatorValue} 

// need to find a way to get userInput2, once user has selected the = sign 
// save userinput2 ,,, let userInput2 = ${storeDisplayValue} 
// call the operate function and pass those 3 values into the function like 
// operate(userInput1, userInput2, operator); 
// operate will perfom the calculation, find a way to capture its return value to variable, 
// append that variable to the ouput container so it displays the final result 

// hey guys I a have hit a wall with calculator, at this point I'm just trying to get the calculator 
// to perform the math. Would I be able to get some feedback on my gameplan/pseudocode for this step 

// Plan: To have the calculator perform the math based on operend the user chooses. 
// I know the calculator needs to perform calculations on a series of numbers
// right now I just want it to work with two numbers first then change it to accept unlimited args(rest syntax in the functions)
// 

// Problem: Not sure how to implement this into code, I feel like I will just use a couple nested if statements 
// in my global scope to get those 3 values. I also want to make sure I am somewhat on the right track here 
// before I implement the plan 

// IF statement, if the storeOperatorValue === any operator, save the first number and the operand to a variable 
// IF the user selects the = sign, save the second value/values to a variable 
// pass all three args to the operate function which will perform the calculation 
// save the return value of the calculation to variable 
// append that variable to the output container, which will display the result. 


// putting the 3 values that need to be passed into the global variables 

// plan 1 


// let selectedOperator = ''; 

// let userValue1 = ''; 

// let userValue2 = ''; 

// if (storeOperatorValue === ('+' || '-' || '*' || '÷')) { 
//     selectedOperator = `${storeOperatorValue}`;  
//     userValue1 = `${storeDisplayValue}`;  

//     if (storeDisplayValue === '=') { 
//          userValue2 = `${storeDisplayValue}`; 
//         let result = operate(userValue1, userValue2, selectedOperator); 
//         output.textContent = result; 
//     }        
// } 


// 1. Global variables for display value and for current operator. These will need to be passed into the operate function 

    // 



// 2. if the user presses ANY of the operands, save the current display value to a variable, and save the operand to a variable. These variables will need to be global 

// userValue1 = ${storeDisplayValue} 

// currentOperand = ${storeOperatorValue} 

// 3. If the user clicks on the  = save the second value, set to another variable 

// userValue2 = ${storeDisplayValue}; 

// 4. Pass all 3 values to operate function 
// operate(userValue1, userValue2, operator);
// 5. Save the return value when passing to operate 

// let result = operate(userValue1, userValue2, operator); 

// 6. Append result to the output container 

// output.textContent = result;

























































































































































































// // create functions 
 

// function add(...nums) { 
//     let sum = 0; 
//     for (let i = 0; i < nums.length; i++) { 
//         let num = nums[i]; 
//         sum += num; 
//     }
//     return sum;  
// }


// function subtract(...nums) {       
//     let total = 0; 

//     for (let i = 0; i < nums.length; i++) { 
//         let num1 = nums[i]; 
//         let num2 = nums[i + 1]; 
        
//         return num1 - num2; 
       
//     }
// } 


// function multiply(...nums) { 
//     let product = 1; 

//     for (let i = 0; i < nums.length; i++) { 
//         let num = nums[i]; 

//         product *= num; 

//     }
//     return product; 
// } 


// // function divide(...nums) { 
// //     let total = 1; 

// //     for (let i = 0; i < nums.length; i++) { 
// //         let num = nums[i]; 

// //         total /= num; 
// //     }
// //     return total; 
// // }

// function divide(...nums) { 
//     for (let i = 0; i < nums.length; i++) { 
//         let num1 = nums[i]; 
//         let num2 = nums[i + 1]; 
//         return num1 / num2;  
//     }
// }

// // fix this function, copy format above 
// // function divide(input1,... input2) { 
// //     let quotient = input1 / input2; 
// //     return quotient; 
// // }  

// // function divide(input1,... input2) { 

// // let result = 0; 

// // s1 = parseInt(input1); 
// // s2 = parseInt(input2); 

// // if (s2!=0) { 
// //     result = s1 / s2; 
// // }
// //     return result; 
// // }  

// // create a new function called operate 
// // takes an operator (+, -, *, / ) 
// // takes in 2 numbers 
// // calls the operation functions to calculate final result 

// // should be unlimited parameters, operator comes first, 

// function operate(num1, num2, operator) { 
//     if (operator === '+') { 
//         add(); 
//         return num1 + num2; 
//     } else if (operator === '-') { 
//         subtract(); 
//         return num1 - num2; 
//     } else if (operator === '*') { 
//         multiply(); 
//         return num1 * num2; 
//     } else if (operator === '÷') { 
//         divide(); 
//         return num1 / num2; 
//     } 
// } 

// // global variable to hold the display value  
// let storeDisplayValue = ''; 

// let storeOperatorValue = ''; 

// // event listener for 7 

// let sevenBtn = document.getElementById('seven-btn'); 

// sevenBtn.addEventListener('click', e => { 
//     let output = document.getElementById('output'); 

//     output.textContent += '7';  

//     storeDisplayValue = '7'; 
// })

// // event listener for 8 
// let eightBtn = document.getElementById('eight-btn'); 

// eightBtn.addEventListener('click', e => { 
//     let output = document.getElementById('output'); 

//     output.textContent += '8';  

//     storeDisplayValue = '8'; 
// }) 
// // 9 
// let nineBtn = document.getElementById('nine-btn'); 

// nineBtn.addEventListener('click', e => { 
//     let output = document.getElementById('output'); 

//     output.textContent += '9';  

//     storeDisplayValue = '9'; 
// }) 

// // divide  
// let divideBtn = document.getElementById('divide-btn'); 

// divideBtn.addEventListener('click', e => { 
//     let output = document.getElementById('output'); 

//     output.textContent += '÷'  

//     storeOperatorValue = '÷' 
// }) 

// // four 
// let fourBtn = document.getElementById('four-btn'); 

// fourBtn.addEventListener('click', e => { 
//     let output = document.getElementById('output'); 

//     output.textContent += '4'  

//     storeDisplayValue = '4' 
// })  

// let fiveBtn = document.getElementById('five-btn'); 

// fiveBtn.addEventListener('click', e => { 
//     let output = document.getElementById('output'); 

//     output.textContent += '5'  

//     storeDisplayValue = '5' 
// })  

// let sixBtn = document.getElementById('six-btn'); 

// sixBtn.addEventListener('click', e => { 
//     let output = document.getElementById('output'); 

//     output.textContent += '6'  

//     storeDisplayValue = '6' 
// }) 

// let multiplyBtn = document.getElementById('multiply-btn'); 

// multiplyBtn.addEventListener('click', e => { 
//     let output = document.getElementById('output'); 

//     output.textContent += '*' 

//     storeOperatorValue = '*' 
// })  

// let oneBtn = document.getElementById('one-btn'); 

// oneBtn.addEventListener('click', e => { 
//     let output = document.getElementById('output'); 

//     output.textContent += '1'  

//     storeDisplayValue = '1' 
// })  

// let twoBtn = document.getElementById('two-btn'); 

// twoBtn.addEventListener('click', e => { 
//     let output = document.getElementById('output'); 

//     output.textContent += '2'  

//     storeDisplayValue = '2' 
// })  

// let threeBtn = document.getElementById('three-btn'); 

// threeBtn.addEventListener('click', e => { 
//     let output = document.getElementById('output'); 

//     output.textContent += '3'  

//     storeDisplayValue = '3' 
// }) 

// let subtractBtn = document.getElementById('subtract-btn'); 

// subtractBtn.addEventListener('click', e => { 
//     let output = document.getElementById('output'); 

//     output.textContent += '-'  

//     storeOperatorValue = '-' 
// }) 

// periodBtn = document.getElementById('period-btn'); 

// periodBtn.addEventListener('click', e => { 
//     let output = document.getElementById('output'); 

//     output.textContent += '.'  

//     storeDisplayValue = '.' 
// }) 

// zeroBtn = document.getElementById('zero-btn'); 

// zeroBtn.addEventListener('click', e => { 
//     let output = document.getElementById('output'); 

//     output.textContent += '0'  

//     storeDisplayValue = '0' 
// }) 

// equalsBtn = document.getElementById('equals-btn'); 

// equalsBtn.addEventListener('click', e => { 
//     let output = document.getElementById('output'); 

//     output.textContent = '='  

//     storeOperatorValue = '=' 
// }) 

// additionBtn = document.getElementById('addition-btn'); 

// additionBtn.addEventListener('click', e => { 
//     let output = document.getElementById('output'); 

//     output.textContent += '+'  

//     storeOperatorValue = '+' 
// }) 




// // gameplan for next step, 

// // if statement which will check if storeOperatorValue === any operator seperated by || 
// // use || because if it's any one of those operators userInput1 needs to be saved 
// // if true, save userInput1 to var let userInput1 = ${storeDisplayValue} 
// // also save the operend that the user picked, let selectedOperator = ${storeOperatorValue} 

// // need to find a way to get userInput2, once user has selected the = sign 
// // save userinput2 ,,, let userInput2 = ${storeDisplayValue} 
// // call the operate function and pass those 3 values into the function like 
// // operate(userInput1, userInput2, operator); 
// // operate will perfom the calculation, find a way to capture its return value to variable, 
// // append that variable to the ouput container so it displays the final result 

// // hey guys I a have hit a wall with calculator, at this point I'm just trying to get the calculator 
// // to perform the math. Would I be able to get some feedback on my gameplan/pseudocode for this step 

// // Plan: To have the calculator perform the math based on operend the user chooses. 
// // I know the calculator needs to perform calculations on a series of numbers
// // right now I just want it to work with two numbers first then change it to accept unlimited args(rest syntax in the functions)
// // 

// // Problem: Not sure how to implement this into code, I feel like I will just use a couple nested if statements 
// // in my global scope to get those 3 values. I also want to make sure I am somewhat on the right track here 
// // before I implement the plan 

// // IF statement, if the storeOperatorValue === any operator, save the first number and the operand to a variable 
// // IF the user selects the = sign, save the second value/values to a variable 
// // pass all three args to the operate function which will perform the calculation 
// // save the return value of the calculation to variable 
// // append that variable to the output container, which will display the result. 


// // putting the 3 values that need to be passed into the global variables 

// // plan 1 


// let selectedOperator = ''; 

// let userValue1 = ''; 

// let userValue2 = ''; 

// if (storeOperatorValue === ('+' || '-' || '*' || '÷')) { 
//     selectedOperator = `${storeOperatorValue}`;  
//     userValue1 = `${storeDisplayValue}`;  

//     if (storeDisplayValue === '=') { 
//          userValue2 = `${storeDisplayValue}`; 
//         let result = operate(userValue1, userValue2, selectedOperator); 
//         output.textContent = result; 
//     }        
// } 


// // 1. Global variables for display value and for current operator. These will need to be passed into the operate function 

//     // 



// // 2. if the user presses ANY of the operands, save the current display value to a variable, and save the operand to a variable. These variables will need to be global 

// // userValue1 = ${storeDisplayValue} 

// // currentOperand = ${storeOperatorValue} 

// // 3. If the user clicks on the  = save the second value, set to another variable 

// // userValue2 = ${storeDisplayValue}; 

// // 4. Pass all 3 values to operate function 
// // operate(userValue1, userValue2, operator);
// // 5. Save the return value when passing to operate 

// // let result = operate(userValue1, userValue2, operator); 

// // 6. Append result to the output container 

// // output.textContent = result; 



// // let output = document.getElementById('output');
// // let num1 = '';
// // let op = '';
// // let num2 = '';

// // function updateDom() {
// //   output.textContent = `${num1} ${op} ${num2}`;
// // }

// // exampleButton.addEventListener('click', function(e) {
// //   num1 += e.target.value // or e.target.textContent -- value is better
// //   updateDom();
// // })