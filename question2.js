// let n = 78934 

//step 1:  product of digits 7*8*9*3*4 = 1512

// step 2: products of digits + n = 1512+78934 = 80446

// step 3:  product of digits of step 2 = 8*0*4*4*6 = 0


// number => product  

// ans + n 

// product of digits of ans


function productOfDigits(n){
   
   let mul = 1
    while(n>0){
        let last = n%10 
         mul = mul * last
        n = parseInt(n/10)
    }

    // console.log(mul)
    return mul  // 125 => 1*2*5 = 10
    // 135 => 1*3*5 = 15
}

let originalNumber = 125
let x  = productOfDigits(originalNumber) // 125 => 10
let step2ans = x+ originalNumber // 10 + 125 = 135

let  y = productOfDigits(step2ans) // 15

console.log(y) // 15



// function product(n){
//     prod = 1
//     while(n>0){
//         rem = n%10
        
//         prod = prod*rem 
//         n = parseInt(n/10)
//     }
//      return prod // 10
// }
//  let ans1 = product(125)
 

//  let step2 =  125+ ans1 // 125+10 = 135

// let z = product(step2) // 15

// console.log(z) // 15



function product(n, expi){
    prod = 1
    while(n>0){
        rem = n%10
        
        prod = prod*rem +expi
        n = parseInt(n/10)
    }
    console.log(prod)
}
// product(78934, 0)
// product(prod, 78934)
// product(80446, 0)