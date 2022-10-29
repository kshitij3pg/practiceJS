var i = 3;

while (i) {
  console.log( i-- );
}

var i = 0;
while (++i < 5) console.log(i);

var i = 0;
while (i++ < 5) console.log(i);

for (let i = 0; i < 5; i++) 
    console.log( i );

for (let i = 0; i < 5; ++i) 
    console.log( i );

//Use the for loop to output even numbers from 2 to 10.
for(let i=2;i<=10;i++)
    if(i%2==0)
        console.log(i)

//Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
for (let i = 0; i < 3; i++) {
    console.log( `number ${i}!` );
}

var i=0
while(i<3)
{
    console.log(`number ${i}!`);
    i++;
}

//prime numbers
var n=100
for(let i=2;i<=100;i++)
{
    let flag=0
    for(let j=2;j<=i/2;j++)
    {
        if(i%j==0)
        {
            flag=1
            break
        }
        
    }
    if(!flag)
        console.log(i)
}

//for...of
let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  console.log(fruit);
}

//for...in

for (let key in fruits) {
  console.log( fruits[key] ); // Apple, Orange, Pear
}