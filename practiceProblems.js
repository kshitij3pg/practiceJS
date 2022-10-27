//1 array sum
//function arraySum()

//2 fibonacci numbers

function fibonacci(a){
    if(a==0 || a==1)
    {
        console.log(0)
        return
    }
    let f=0,s=1
    console.log(f)
    console.log(s)
    for(let i=2;i<a;i++)
    {
        console.log(f+s);
        let t=f+s;
        f=s;
        s=t;
    }

}
fibonacci(10)

//3 check leap year

function leapYear(y){
    if((y%4==0)&&(y%100!=0)||(y%400==0))
        console.log(y+' is a leap year');
    else
        console.log(y+' is not a leap year');
}
leapYear(2022)

//4 absolute diff with 19

function absDiff(n){
    console.log(Math.abs(n-19))
    if(n>19)
        console.log(3*(Math.abs(n-19)))
}

absDiff(25)

//5 Add Py
function addPy(str){
    if(str.startsWith("Py"))
        return str
    else
        return ("Py"+str)
}

console.log(addPy("Python"))

//6 return argument type

function retType(a){
    return typeof(a);
}

console.log(retType(null))
console.log(retType(5))
console.log(retType(undefined))
console.log(retType('kshitij'))

//7 longest word



//8 sort items in array
var members=['Kailash','Punit','Sravan','Ayushi']
members.sort()
console.log(members)

let marks=[45,88,90,52,29]
marks.sort(function(a,b){return a-b})
console.log(marks)


//9 fizzbuzz
function fizzBuzz(){
    for(let i=1;i<=100;i++)
    {
        if(i%3==0&&i%5==0)
            console.log("fizzbuzz")
        else if(i%3==0)
            console.log("fizz")
        else if(i%5==0)
            console.log("buzz")
        else
            console.log("indivisible number")
    }
}
fizzBuzz()
