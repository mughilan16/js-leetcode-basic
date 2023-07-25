var createCounter = function(init) {
    class Counter {
        constructor(init) {
            this.count = init;
        }
        increment() {
            return ++this.count;
        }
        decrement() {
            return --this.count;
        }
        reset() {
            return this.count = init
        }
    }
    return new Counter(init)
};
