/*var temp = parseInt(prompt("What temperature would you like to convert?"));
var convertedTemp = 5/9*(temp - 32);
document.write(temp + " degrees fahrenheit = " + convertedTemp + " degrees celsius");
*/
var conversion = function convertTemp(temperature, unit)
{
  if (unit==="c" || unit==="C")
    {
      conversion = (1.8 *temp)+32;
    }
    else if (unit==="f" || unit==="F")
    {
      conversion = 5/9 * (temp-32);
    }

  return conversion;
}
convertTemp(212, "C");
console.log(conversion);
