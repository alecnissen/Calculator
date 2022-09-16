function add(num1, num2, num3, num4) { 
    return Number(num1) + Number(num2); 
}


function subtract(num1, num2) { 
    return num1 - num2; 
}



function multiply(num1, num2) { 
    return num1 * num2; 
}


function divide(num1, num2) { 
    if (num1 == 0 || num2 == 0) { 
        return output.textContent = "NOPE! Can't divide by 0! You should know this! :D";  
    }

    return num1 / num2; 
}



function operate(num1, num2, op) { 
    if (op === '+') { 
       return add(num1, num2); 
       
        
    } else if (op === '-') {    
       return subtract(num1, num2); 
       
        
    } else if (op === '*') { 
        return multiply(num1, num2); 
        
         
    } else if (op === '/') { 
        return divide(num1, num2);   
     } 
} 


// global variable to store the result 
// let result = operate(num1, num2, op) 
// result ${op}= ${num} 
// output.textContent = result 

// global variable to hold the display value  
let output = document.getElementById('output'); 
// let num1 = ''; 
// let op = ''; 
// let num2 = ''; 
// let result = '';    

let outputObj = { 
    num1: '',
    operator: '',
    num2: '',
} 

let resultObj = { 
    result: ''
}




//  function updateDOM() {     
//     output.textContent = `${num1} ${op} ${num2}`; 
  
//  } 

function updateDisplayNum1() { 
    output.textContent = outputObj.num1; 
}

function updateDisplayNum2() { 
    output.textContent = outputObj.num2; 
} 

function updateOperatorValue() { 
    output.textContent = outputObj.operator; 
} 

function updateResult() { 
    output.textContent = resultObj.result; 
}

// function result() {      
//     result = operate(num1, num2, op); 
//     output.textContent = result; 
// }   

// function updateResult() { 

// }
// function reUpdateDOM() { 
//     output.textContent = result; 
// }

let sevenBtn = document.getElementById('seven-btn'); 

sevenBtn.addEventListener('click', function sevenBtn(e) { 
  
  if (outputObj.num1 === '' || outputObj.operator === '') {  
   outputObj.num1 += e.target.textContent; 
   updateDisplayNum1();  
  } else { 
  outputObj.num2 += e.target.textContent;  
  updateDisplayNum2();   
  }   
}) 


 
let eightBtn = document.getElementById('eight-btn'); 

eightBtn.addEventListener('click', function eightBtn(e) { 
  
    if (outputObj.num1 === '' || outputObj.operator === '') {  
        outputObj.num1 += e.target.textContent; 
        updateDisplayNum1();  
       } else { 
       outputObj.num2 += e.target.textContent;  
       updateDisplayNum2();   
       }   
}) 

let nineBtn = document.getElementById('nine-btn'); 

nineBtn.addEventListener('click', function nineBtn(e) { 
    if (outputObj.num1 === '' || outputObj.operator === '') {  
        outputObj.num1 += e.target.textContent; 
        updateDisplayNum1();  
       } else { 
       outputObj.num2 += e.target.textContent;  
       updateDisplayNum2();   
       }   
}) 


let divideBtn = document.getElementById('divide-btn'); 

divideBtn.addEventListener('click', function divideBtn(e) { 
    if (outputObj.operator === '') { 
    outputObj.operator = e.target.textContent; 
    updateOperatorValue(); 
    } 
}) 


let fourBtn = document.getElementById('four-btn'); 

fourBtn.addEventListener('click', function fourBtn(e) { 
    
    if (outputObj.num1 === '' || outputObj.operator === '') {  
        outputObj.num1 += e.target.textContent; 
        updateDisplayNum1();  
       } else { 
       outputObj.num2 += e.target.textContent;  
       updateDisplayNum2();   
       }   
})  

let fiveBtn = document.getElementById('five-btn'); 

fiveBtn.addEventListener('click', function fiveBtn(e) { 
   
    if (outputObj.num1 === '' || outputObj.operator === '') {  
        outputObj.num1 += e.target.textContent; 
        updateDisplayNum1();  
       } else { 
       outputObj.num2 += e.target.textContent;  
       updateDisplayNum2();   
       }    
})  

let sixBtn = document.getElementById('six-btn'); 

sixBtn.addEventListener('click', function sixBtn(e) { 
  
    if (outputObj.num1 === '' || outputObj.operator === '') {  
        outputObj.num1 += e.target.textContent; 
        updateDisplayNum1();  
       } else { 
       outputObj.num2 += e.target.textContent;  
       updateDisplayNum2();   
       }   
}) 

let multiplyBtn = document.getElementById('multiply-btn'); 

multiplyBtn.addEventListener('click', function multiplyBtn(e) { 
    if (outputObj.operator === '') { 
        outputObj.operator = e.target.textContent; 
        updateOperatorValue(); 
    } 
})  

let oneBtn = document.getElementById('one-btn'); 

oneBtn.addEventListener('click', function oneBtn(e) { 
    if (outputObj.num1 === '' || outputObj.operator === '') {  
        outputObj.num1 += e.target.textContent; 
        updateDisplayNum1();  
       } else { 
       outputObj.num2 += e.target.textContent;  
       updateDisplayNum2();   
       } 
})  

let twoBtn = document.getElementById('two-btn'); 

twoBtn.addEventListener('click', function twoBtn(e) { 
    if (outputObj.num1 === '' || outputObj.operator === '') {  
        outputObj.num1 += e.target.textContent; 
        updateDisplayNum1();  
       } else { 
       outputObj.num2 += e.target.textContent;  
       updateDisplayNum2();   
       } 
})  

let threeBtn = document.getElementById('three-btn'); 

threeBtn.addEventListener('click', function threeBtn(e) { 
  
    if (outputObj.num1 === '' || outputObj.operator === '') {  
        outputObj.num1 += e.target.textContent; 
        updateDisplayNum1();  
       } else { 
       outputObj.num2 += e.target.textContent;  
       updateDisplayNum2();   
       } 
}) 

let subtractBtn = document.getElementById('subtract-btn'); 

subtractBtn.addEventListener('click', function(e) { 
    if (outputObj.operator === '') { 
        outputObj.operator = e.target.textContent; 
        updateOperatorValue(); 
    }  
}) 

periodBtn = document.getElementById('period-btn'); 

periodBtn.addEventListener('click', function periodBtn(e) { 
  
    if (outputObj.num1 === '' || outputObj.operator === '') {  
        outputObj.num1 += e.target.textContent; 
        updateDisplayNum1();  
       } else { 
       outputObj.num2 += e.target.textContent;  
       updateDisplayNum2();   
       } 
}) 

zeroBtn = document.getElementById('zero-btn'); 

zeroBtn.addEventListener('click', function zeroBtn(e) { 
  
    if (outputObj.num1 === '' || outputObj.operator === '') {  
        outputObj.num1 += e.target.textContent; 
        updateDisplayNum1();  
       } else { 
       outputObj.num2 += e.target.textContent;  
       updateDisplayNum2();   
       } 
}) 


equalsBtn = document.getElementById('equals-btn'); 

equalsBtn.addEventListener('click', function equalsBtn(e) {  

    resultObj.result = operate(outputObj.num1, outputObj.num2, outputObj.operator);  
    
    updateResult(); 

}) 


additionBtn = document.getElementById('addition-btn'); 

additionBtn.addEventListener('click', function additionBtn(e) { 
    if (outputObj.operator === '') { 
        outputObj.operator = e.target.textContent; 
        updateOperatorValue(); 
    }   
}) 



let clearBtn = document.getElementById('clear-btn'); 

clearBtn.addEventListener('click', function clearBtn(e) { 
    outputObj.num1 = ''; 
    outputObj.num2 = ''; 
    outputObj.operator = '';  

    output.textContent = '';
}); 


let deleteBtn = document.getElementById('delete-btn'); 

deleteBtn.addEventListener('click', e => { 
    
})



















































































// function add(num1, num2, num3, num4) { 
//     return Number(num1) + Number(num2); 
// }


// function subtract(num1, num2) { 
//     return num1 - num2; 
// }



// function multiply(num1, num2) { 
//     return num1 * num2; 
// }


// function divide(num1, num2) { 
//     if (num1 == 0 || num2 == 0) { 
//         return output.textContent = "NOPE! Can't divide by 0! You should know this! :D";  
//     }

//     return num1 / num2; 
// }



// function operate(num1, num2, op) { 
//     if (op === '+') { 
//        return add(num1, num2); 
       
        
//     } else if (op === '-') {    
//        return subtract(num1, num2); 
       
        
//     } else if (op === '*') { 
//         return multiply(num1, num2); 
        
         
//     } else if (op === '/') { 
//         return divide(num1, num2);   
//      } 
// } 


// // global variable to store the result 
// // let result = operate(num1, num2, op) 
// // result ${op}= ${num} 
// // output.textContent = result 

// // global variable to hold the display value  
// let output = document.getElementById('output'); 

// let num1 = ''; 
// let op = ''; 
// let num2 = ''; 
// let result = '';      

                                     
//  function updateDOM() {     
//    output.textContent = `${num1} ${op} ${num2}`; 
//   }  



// function updateResult() { 
//     output.textContent = result; 
// } 

// let sevenBtn = document.getElementById('seven-btn'); 

// sevenBtn.addEventListener('click', e => { 
  
//   if (num1 === '' || op === '') {  
//    num1 += e.target.textContent; 
//   } else { 
//   num2 += e.target.textContent;    
//   }   
//   updateDOM(); 
// }) 


 
// let eightBtn = document.getElementById('eight-btn'); 

// eightBtn.addEventListener('click', e => { 
  
//    if (num1 === '' || op === '') {  
//    num1 += e.target.textContent;
//   } else { 
//   num2 += e.target.textContent;    
//   } 
  
//   updateDOM(); 
// }) 

// let nineBtn = document.getElementById('nine-btn'); 

// nineBtn.addEventListener('click', e => { 
    
//     if (num1 === '' || op === '') {  
//    num1 += e.target.textContent;
//   } else { 
//   num2 += e.target.textContent;    
//   } 
  
//   updateDOM(); 
// }) 


// let divideBtn = document.getElementById('divide-btn'); 

// divideBtn.addEventListener('click', e => { 

//     op += e.target.textContent; 
  
//     updateDOM(); 
  

// }) 


// let fourBtn = document.getElementById('four-btn'); 

// fourBtn.addEventListener('click', e => { 
    
//     if (num1 === '' || op === '') {  
//    num1 += e.target.textContent;
//   } else { 
//   num2 += e.target.textContent;    
//   } 
  
//     updateDOM(); 
// })  

// let fiveBtn = document.getElementById('five-btn'); 

// fiveBtn.addEventListener('click', e => { 
   
//      if (num1 === '' || op === '') {  
//    num1 += e.target.textContent;
//   } else { 
//   num2 += e.target.textContent;    
//   } 
  
//     updateDOM(); 
// })  

// let sixBtn = document.getElementById('six-btn'); 

// sixBtn.addEventListener('click', e => { 
  
//       if (num1 === '' || op === '') {  
//    num1 += e.target.textContent;
//   } else { 
//   num2 += e.target.textContent;    
//   } 
  
//   updateDOM(); 
// }) 

// let multiplyBtn = document.getElementById('multiply-btn'); 

// multiplyBtn.addEventListener('click', e => { 
//    op += e.target.textContent; 
  
//     updateDOM();   
// })  

// let oneBtn = document.getElementById('one-btn'); 

// oneBtn.addEventListener('click', e => { 
  
//      if (num1 === '' || op === '') {  
//    num1 += e.target.textContent;
//   } else { 
//   num2 += e.target.textContent;    
//   } 
  
//   updateDOM(); 
// })  

// let twoBtn = document.getElementById('two-btn'); 

// twoBtn.addEventListener('click', e => { 
  
//     if (num1 === '' || op === '') {  
//    num1 += e.target.textContent;
//   } else { 
//   num2 += e.target.textContent;    
//   }  
  
//   updateDOM(); 
// })  

// let threeBtn = document.getElementById('three-btn'); 

// threeBtn.addEventListener('click', e => { 
  
//     if (num1 === '' || op === '') {  
//    num1 += e.target.textContent;
//   } else { 
//   num2 += e.target.textContent;    
//   }  
  
//   updateDOM();
// }) 

// let subtractBtn = document.getElementById('subtract-btn'); 

// subtractBtn.addEventListener('click', e => { 
//     op += e.target.textContent; 
  
//     updateDOM(); 
// }) 

// periodBtn = document.getElementById('period-btn'); 

// periodBtn.addEventListener('click', e => { 
  
//     if (num1 === '' || op === '') {  
//    num1 += e.target.textContent;
//   } else { 
//   num2 += e.target.textContent;    
//   }  
  
//   updateDOM();
// }) 

// zeroBtn = document.getElementById('zero-btn'); 

// zeroBtn.addEventListener('click', e => { 
  
//    if (num1 === '' || op === '') {  
//    num1 += e.target.textContent;
//   } else { 
//   num2 += e.target.textContent;    
//   } 
  
//   updateDOM();
// }) 

// equalsBtn = document.getElementById('equals-btn'); 
// output2 = document.getElementById('output-2'); 

// equalsBtn.addEventListener('click', e => {  


//      result = operate(num1, num2, op);  
 
    
//      output.textContent = result.toFixed(2); 

//  })  

// additionBtn = document.getElementById('addition-btn'); 

// additionBtn.addEventListener('click', e => { 
//    op += e.target.textContent; 
  
//    updateDOM(); 
// }) 



// let clearBtn = document.getElementById('clear-btn'); 

// clearBtn.addEventListener('click', e => { 
//     num1 = ''; 
//     num2 = ''; 
//     op = '';  

//     output.textContent = '';
// }); 


// let deleteBtn = document.getElementById('delete-btn'); 

// deleteBtn.addEventListener('click', e => { 
    
// })










































































































































































