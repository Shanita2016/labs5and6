for (var i = 1; i < 101; i++)
{
  if(i % 3===0 && i % 5===0)
  {
    document.write("fizzBuzz");
  }
  else if(i % 3===0)
  {
    document.write("Fizz");
  }
  else if( i % 5===0)
  {
    document.write("Buzz");
  }
  else {
    document.write(i);
  }

}
