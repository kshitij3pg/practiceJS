//convert switch to if-else
browser="Chrome"
if(browser=="Edge")
    console.log("You've got the Edge!")
else if(browser=="Chrome" || browser=="Firefox" || browser=="Opera" || browser=="Safari")
    console.log('Okay we support these browsers too')
else
    console.log('We hope that this page looks ok!')

//convert if to switch
var a = 3
switch(a){
case 0:
    console.log(0)
    break
case 1:
    console.log(1)
    break
case 2:
case 3:
    console.log("2,3")
    break
}

//if-else
if ("0") {
    console.log( 'Hello' );
  }

let n=1
if(n>0)
  console.log(1)
else if(n<0)
  console.log(-1)
else
  console.log(0)

//rewrite if into ?
var a=2,b=1
let result=a+b<4?"Below":"Over"
console.log(result)

//rewrite if else into ?
var login=" "
let message=login=="Employee"?
"Hello":login=="Director"?
"Greetings":login==" "?"No Login":" "
console.log(message)

