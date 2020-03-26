//http://www.codewars.com/kata/function-composition-1
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);