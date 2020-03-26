//http://www.codewars.com/kata/array-helpers

Array.prototype.square = function () {
    var result = [];
    for (let i = 0; i < this.length; i++) {
        result[i] = this[i] * this[i];
    }
    return result;
};

Array.prototype.cube = function () {
    var result = [];
    for (let i = 0; i < this.length; i++) {
        result[i] = this[i] * this[i] * this[i];
    }
    return result;
};
Array.prototype.sum = function () {
    var result = 0;
    for (let i = 0; i < this.length; i++) {
        result += this[i];
    }
    return result;
};
Array.prototype.even = function () {
    var k = 0;
    var result = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 == 0) {
            result[k++] = this[i];
        }
    }
    return result;
};
Array.prototype.odd = function () {
    var k = 0;
    var result = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 != 0) {
            result[k++] = this[i];
        }
    }
    return result;
};
Array.prototype.average = function () {
    var sum = this.sum();
    return (sum / this.length);
}
