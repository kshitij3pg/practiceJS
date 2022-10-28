//increment/ decrement operators
var a = 1, b = 1;
let c = ++a; 
let d = b++; 
console.log(a+" "+b+" "+c+" "+d)

//assignment op
var a = 2;

let x = 1 + (a *= 2);

console.log(a+" "+x)

//type conversions
console.log("" + 1 + 0)
console.log("" - 1 + 0)
console.log(true + false)
console.log(6 / "3")
console.log("2" * "3")
console.log(4 + 5 + "px")
console.log("$" + 4 + 5)
console.log("4" - 2)
console.log("4px" - 2)
console.log("  -9  " + 5)
console.log("  -9  " - 5)
console.log(null + 1)
console.log(undefined + 1)
console.log(" \t \n" - 2)

//comparison operators
console.log(5 > 4)
console.log("apple" > "pineapple")
console.log("2" > "12")
console.log(undefined == null)
console.log(undefined === null)
console.log(null == "\n0\n")
console.log(null === +"\n0\n")

//logical operators
console.log(null || 2 || undefined)
console.log(console.log(1)||2||console.log(3))
console.log(1 && null && 2)
console.log(console.log(1)&&console.log(2))
console.log(null || 2 && 3 || 4)

checkAge=(age)=>{
    if(age>=14 && age<=90)
        return true
    else
        return false
}
console.log(checkAge(15))
let age=12
if(!(age>=14&&age<=90))
{
    console.log("true")
}
if(age<14||age>90)
{
    console.log("true")
}

if (-1 || 0)
    console.log('first')
if(-1&&0)
    console.log('second')
if(null || -1 && 1)
    console.log('third')

