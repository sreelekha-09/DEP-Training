// Let's make a Cat constructor!
var Cat = (function () {
    return function (catName, catWeight) {
        if (catName == undefined || catWeight == undefined) {
            throw new TypeError("undefined");
    }
        Cat.catCount++;
        Cat.totalCatWeight += catWeight;
        this.name = catName;
        Object.defineProperty(Cat, 'weight', {
            configurable: true,
            set: function (newWeight) {
                Cat.totalCatWeight -= this.weight;
                Cat.totalCatWeight += newWeight;
                catWeight = newWeight;
            },
            get: function () {
                return catWeight;
            }
        });

    }
}());
Cat.totalCatWeight = 0;
Cat.catCount = 0;
function averageWeight() {
    return Cat.totalCatWeight / Cat.catCount;
}