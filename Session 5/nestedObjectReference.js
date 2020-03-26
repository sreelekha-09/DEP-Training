//http://www.codewars.com/kata/extract-nested-object-reference
Object.prototype.hash = function (string) {
    var tempArray = string.split("."), Obj = obj;
    for (let i = 0; i < tempArray.length; i++) {
        if (Obj[tempArray[i]] == undefined) {
            return undefined;
        } else {
            Obj = Obj[tempArray[i]];
        }
    }
    return Obj;
}