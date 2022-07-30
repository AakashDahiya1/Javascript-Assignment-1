// Q2. Write a JavaScript program to get the first n Fibonacci numbers
var n = parseInt(prompt("Enter the number upto which you want the fibonacci series to be displayed !!!"));
let num1=0;
let num2=1;
let temp=0;
for(let i=0;i<=n;i++)
{ 
    document.write("<br>"+num1);
    temp=num1+num2;
    num1=num2;
    num2=temp;
}



