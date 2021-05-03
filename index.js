function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function fn (){
        console.log("I'm a function");
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('Hi');
    }
}