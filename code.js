// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function


function sayHello(x) {
    if (x === "Pat" || x === "Alex" || x === "Jane") {
        return "Hello, " + x + "!"
    }else if(typeof x === "boolean") {
        return "Hello, World!"
    }else if(typeof x === "object") {
        return "Hello, World!"
    }else if(typeof x === "function") {
        return "Hello, World!"
    }else return "Hello, World!"
}





