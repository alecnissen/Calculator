// I want to find a way to string multiple operators together and then get the result 
// something to calculate the result 
// something to update the result 
// another function which you can call 
// pass in an operator and a number 
// calculates the result, appends that result to the container which is on the global scope 
// 



// function addToResult(op, num) { 
    // if (op == + || - || * || /)
//    



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
let num1 = ''; 
let op = ''; 
let num2 = ''; 

 function updateDOM() {  
  output.textContent = `${num1} ${op} ${num2}`;   

//   let result = operate(num1, num2, op); 
 
}  


let sevenBtn = document.getElementById('seven-btn'); 

sevenBtn.addEventListener('click', e => { 
  
  if (num1 === '' || op === '') {  
   num1 += e.target.textContent;
  } else { 
  num2 += e.target.textContent;    
  } 

  
  updateDOM(); 
}) 


 
let eightBtn = document.getElementById('eight-btn'); 

eightBtn.addEventListener('click', e => { 
  
   if (num1 === '' || op === '') {  
   num1 += e.target.textContent;
  } else { 
  num2 += e.target.textContent;    
  } 
  
  updateDOM(); 
}) 

let nineBtn = document.getElementById('nine-btn'); 

nineBtn.addEventListener('click', e => { 
    
    if (num1 === '' || op === '') {  
   num1 += e.target.textContent;
  } else { 
  num2 += e.target.textContent;    
  } 
  
  updateDOM(); 
}) 


let divideBtn = document.getElementById('divide-btn'); 

divideBtn.addEventListener('click', e => { 

    op += e.target.textContent; 
  
    updateDOM(); 
  

}) 


let fourBtn = document.getElementById('four-btn'); 

fourBtn.addEventListener('click', e => { 
    
    if (num1 === '' || op === '') {  
   num1 += e.target.textContent;
  } else { 
  num2 += e.target.textContent;    
  } 
  
    updateDOM(); 
})  

let fiveBtn = document.getElementById('five-btn'); 

fiveBtn.addEventListener('click', e => { 
   
     if (num1 === '' || op === '') {  
   num1 += e.target.textContent;
  } else { 
  num2 += e.target.textContent;    
  } 
  
    updateDOM(); 
})  

let sixBtn = document.getElementById('six-btn'); 

sixBtn.addEventListener('click', e => { 
  
      if (num1 === '' || op === '') {  
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
  
     if (num1 === '' || op === '') {  
   num1 += e.target.textContent;
  } else { 
  num2 += e.target.textContent;    
  } 
  
  updateDOM(); 
})  

let twoBtn = document.getElementById('two-btn'); 

twoBtn.addEventListener('click', e => { 
  
    if (num1 === '' || op === '') {  
   num1 += e.target.textContent;
  } else { 
  num2 += e.target.textContent;    
  }  
  
  updateDOM(); 
})  

let threeBtn = document.getElementById('three-btn'); 

threeBtn.addEventListener('click', e => { 
  
    if (num1 === '' || op === '') {  
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
  
    if (num1 === '' || op === '') {  
   num1 += e.target.textContent;
  } else { 
  num2 += e.target.textContent;    
  }  
  
  updateDOM();
}) 

zeroBtn = document.getElementById('zero-btn'); 

zeroBtn.addEventListener('click', e => { 
  
   if (num1 === '' || op === '') {  
   num1 += e.target.textContent;
  } else { 
  num2 += e.target.textContent;    
  } 
  
  updateDOM();
}) 



equalsBtn = document.getElementById('equals-btn'); 

equalsBtn.addEventListener('click', e => {  


    let result = operate(num1, num2, op);  
 
    
     output.textContent = `${result}`;   

 })  

additionBtn = document.getElementById('addition-btn'); 

additionBtn.addEventListener('click', e => { 
   op += e.target.textContent; 
  
   updateDOM(); 
}) 





let clearBtn = document.getElementById('clear-btn'); 

clearBtn.addEventListener('click', e => { 
    num1 = ''; 
    num2 = ''; 
    op = '';  

    output.textContent = '';
}); 

















































































































































































