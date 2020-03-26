//http://www.codewars.com/kata/prefill-an-array

function prefill(n, v) {
  if ((!(Number.isInteger(+n))) || (n < 0) || (n === true) || (n === false)) {
    {
      throw new TypeError(n + " is invalid");
    }
  }
  else if (n == 0) {
    return [];
  }
  else
    return Array(n).fill(v);
}