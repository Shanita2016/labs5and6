var userTemp = prompt("What temperature do you want to convert?");
var userUnit = prompt("What unit do you want to convert your temperature to?");

function convertTemp(temperature, unit)
{
  if (unit==="c" || unit===="C")
  {
    conversion = 5/9 * (temperature - 32);
  }
  else if (unit ==="f" || unit==="F")
  {
    conversion = (1.8 * temperature) + 32;
  }
  else
    {
      console.log("You have entered an incorrect value. Please try again.");
    }
  convertTemp(userTemp, userUnit)
  console.log("Your converted temperature is "+conversion+" degrees.");  
}
