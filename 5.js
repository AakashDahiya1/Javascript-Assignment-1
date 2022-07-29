var userString=prompt("Enter a new string:");
var Prefix="Py";
var begin=userString.substring(0,2);
function addString()
{
    
    if(begin==Prefix)
    {
        document.write("The string is:"+ userString);
    }
    else if(begin!==Prefix)
    {
        document.write("The updated string:"+Prefix+userString);
    }
}
addString();