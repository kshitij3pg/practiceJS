//1 following function returns true if the parameter age is greater than 18 otherwise it return false

function checkAge(age) {
    if (age > 18) {
      return true;
    } 
    else {
      return false;
    }
}

console.log(checkAge(15))


//2 Make two variants of checkAge:

// Using a question mark operator ?

function checkAge(age){
    return (age>18)? true: false
}

console.log(checkAge(20))


// Using OR ||

function checkAge(age){
    return (age>18) || false
}

console.log(checkAge(14))

// 3 Function min(a,b)

function minimum(a,b){
    if(a>b)
        return b
    else
        return a
}

console.log(minimum(15,5))

// 4 Function power(x,n)

function power(a,b){
    let res=a
    for(let i=1;i<b;i++)
        res*=a
    return res
}

// let a=prompt("Enter base: ",'')
// let b=prompt("Enter power: ",'')
// if(b<1)
//     alert("Enter a positive integer")
// else
//     console.log(power(a,b))
console.log(power(2,4))

//5 arrow function for returning cube of a number
let cube=(a)=>a**3

console.log(cube(5))

//6 return sum of two numbers 

let sum=(a,b)=>{
    let res=a+b
    return res
}
console.log(sum(4.67,7.2))



