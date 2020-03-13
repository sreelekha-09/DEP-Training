//http://www.codewars.com/kata/partition-on

function partitionOn(pred, items) {
var even_arr=items.filter(pred);
var odd_arr=items.filter(function(n){
                                      return !pred(n)});
var res=odd_arr.concat(even_arr);
items.length=0;
items.push.apply(items, res); 
return odd_arr.length;
}