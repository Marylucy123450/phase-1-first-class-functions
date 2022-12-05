function receivesAFunction(callback) {
    return callback();
}

receivesAFunction(() =>{

});

function returnsANamedFunction() {
    let sam = () => console.log("mans")
    return (sam)
}

var returnsAnAnonymousFunction = function() {
    return (() => {
    alert('This an anonymous function')
    }
    )
}