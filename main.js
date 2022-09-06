// create functions 

// function add(nums) { 
//     let sum = 0; 

//     for (let i = 0; i < nums.length; i++) { 
//         let num = nums[i]; 

//         sum += num; 
//     }
//     return sum; 
// } 
 
// how to create a function that adds an unlimited amount of numbers  

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
        total -= num; 
    }
    return total; 
}