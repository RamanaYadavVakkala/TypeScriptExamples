//function -- reuse , call or event 

/* syntax - function functionname(){
    body
} */

//Example


function hello():string{
    return "Hello";
}
console.log(hello());

//passing a parameter

function sa(name:string):string{
    return "hello"+name;
}
console.log(sa("venkat"));

//passing multiple parameters
function add(num1:number,num2:number):number{
    return num1+num2;
}
console.log("Sum is "+add(12,13));