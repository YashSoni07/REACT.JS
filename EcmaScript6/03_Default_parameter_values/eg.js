//ES5
function a1( a, b , c){
    if (a == undefined){
        a = 10
    }
    if (b == undefined){
        b = 20
    }
    if (c == undefined){
        c = 30
    }
    console.log(a);
    console.log(b);
    console.log(c);
}
a1();

//ES6
function a2(a=1,b=2,c=3){
    console.log(a,b,c);
}
// a2()

// if you what to modife only one value then you can use undifiend 
a2(undefined, 20, undefined)
