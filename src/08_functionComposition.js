var compose = function(functions) {
    functions = functions.reverse();
    return function(x) {
        for (let i = 0; i < functions.length; i++) {
            x = functions[i](x);
        }
        return x
    };
};
