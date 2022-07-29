// Q4. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

var n1=19;
var n2=parseInt(prompt("Enter the number !!!"));
var n3=0;
n3=Math.abs(n1-n2);
document.write("The absolute difference is: \n"+ n3);
if(n2>n1)
{
    var n4=Math.pow(n3,3);
    document.write(" "+"and the triple of absolute differnece is: \n"+n4);
}
