var expect = function(val) {
    return {
        toBe: (anotherVal) => {
            if (val === anotherVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: (anotherVal) => {
            if (val !== anotherVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        },
    };
};

console.log(expect(5).toBe(null));
