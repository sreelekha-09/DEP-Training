//http://www.codewars.com/kata/calculating-with-functions

function zero(op) {
 if(!op)
 {return 0;}
 else
 {
 return op(0);
 }
}
function one(op) {
if(!op)
 {return 1;}
 else
 {
 return op(1);
 }
}
function two(op) {
if(!op)
 {return 2;}
 else
 {
 return op(2);
 }}
function three(op) {
if(!op)
 {return 3;}
 else
 {
 return op(3);
 }}
function four(op) {
if(!op)
 {return 4;}
 else
 {
 return op(4);
 }}
function five(op) {
if(!op)
 {return 5;}
 else
 {
 return op(5);
 }}
function six(op) {
if(!op)
 {return 6;}
 else
 {
 return op(6);
 }}
function seven(op) {
if(!op)
 {return 7;}
 else
 {
 return op(7);
 }}
function eight(op) {
if(!op)
 {return 8;}
 else
 {
 return op(8);
 }}
function nine(op) {
if(!op)
 {return 9;}
 else
 {
 return op(9);
 }}

function plus(b) {
return function (a){
return a+b;
} 
}
function minus(b) {
return function (a){
return a-b;
}}
function times(b) {
return function (a){
return a*b;
}
}
function dividedBy(b) {
return function (a){
return parseInt(a/b);
}}