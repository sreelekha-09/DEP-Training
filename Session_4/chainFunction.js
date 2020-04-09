//http://www.codewars.com/kata/a-chain-adding-function

function add(n) {
    var result = function (m) {
        return add(n + m);
    };
    result.toString = function () {
        return n;
    }
    return result;
}