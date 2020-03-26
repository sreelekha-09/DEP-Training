//http://www.codewars.com/kata/word-count

function countWords(str) {

  var res = str.trim();
  if (res.length === 0) {
    return 0;
  }
  return res.split(/\s+/).length;
}