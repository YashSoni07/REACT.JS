// An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

// Arrow Function are modfied version of ES6 functions in term of Syntax

// Syntax in Es5:
// function function_name(parameters){

// }
// function_name(arguments)

function addition(num){
    return num + num;
}
console.log(addition(10));

// Syntax in Es6:
// var var_name = {} => {  };

var multiplication = num => console.log(num * num);
multiplication(20)

// Arrow 
var users = [
    {
        name : "Yash Soni",
        address : "Jabalpur"
    },
    {
        name : "Shashwat Jain",
        address : "Hyderabed"
    }
]

// in ES5:
console.log("in ES5:");
users.forEach(function (user) {
    console.log(user.name + "\t" + user.address);
})

// In ES6:
console.log("In ES6:");
users.forEach(user => console.log(user.name +"\t"+user.address));

// Key Points:
// 1. Use Arrow Function when we have to write Single liner implementations.
// 2.  If we have only one parentheis{}, then we can ignore parentheis{}
// 3. we can use rest parentheis, Defult values with Arrow Functions
