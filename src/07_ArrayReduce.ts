type fnType = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: fnType, init: number): number {
    for (let i = 0; i < nums.length; i++) {
        init = fn(init, nums[i]);
    }
    return init;
}

const sum: fnType = (accum, curr) => {
    return accum + curr 
}

const arr = [1, 2, 3, 4]
console.log(reduce(arr, sum, 100))

