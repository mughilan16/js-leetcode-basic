var addTwoPromises = async function(promise1, promise2) {
    return await promise1
        .then(async val => await promise2.then(val2 => val + val2))
};
