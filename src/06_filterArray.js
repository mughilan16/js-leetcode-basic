var filter = function(arr, fn) {
    var tempArr = [];
    for (i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
};

var greaterThan10 = (n) => {
    return n > 10;
};

arr = [10, 2, 3, 12];
console.log(filter(arr, greaterThan10));
