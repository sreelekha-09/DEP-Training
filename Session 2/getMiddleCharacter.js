//http://www.codewars.com/kata/get-the-middle-character

function getMiddle(s)
{
  //Code goes here!
  var l=s.length;
  var result="";
  if(l%2==0)
  {
    result=s.substring((l/2)-1,((l/2)-1)+2);
  }
  else
  {
    result=s.substring(l/2,l/2+1);
  }
  return result;
}