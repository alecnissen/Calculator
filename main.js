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
