// lets take two (3 digit) number
// a = 456 
// b = 789
// c = 497

// 1st number => sum of digits  4+5+6 = 15 
// 2nd number => sum of sq of digits  7^2 + 8^2 + 9^2 = 94
// 3rd number => sum of cubes of digits  4^3 + 9^3 + 7^3 = 576



// let a = 456
// function sumOfDigits(){

// }


// let b = 789

// function sumOfSqOfDigits(){

// }


// let c = 497 

// function sumOfCubesOfDigits(){

// }



// last  = n%10

// let sum  = sum+ last**1
// let sum =  sum + last**2
// let sum =  sum + last**3



function playWithDigits(n,expo){

   let sum = 0
    while(n>0){
        let last = n%10
        sum = sum + last**expo
        n = parseInt(n/10)
    }
    console.log(sum)
}

playWithDigits(456,1)
playWithDigits(789,2)
playWithDigits(497,3)



