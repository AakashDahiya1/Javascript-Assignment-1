// Q3. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
var n = parseInt(prompt("Enter the year !!!"));
if(n%4==0 && n%100==0 || n%400==0)
{
    document.write("The year is leap year")
}
else
{
    document.write("The year is not a leap year")
}