var createCounter = function(n) {
    return function() {
        return n++
    }
}

const i = createCounter(10);
console.log(i())
console.log(i())
console.log(i())
console.log(i())
