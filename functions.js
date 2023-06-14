//function -- reuse , call or event 
/* syntax - function functionname(){
    body
} */
//Example
function hello() {
    return "Hello";
}
console.log(hello());
//passing a parameter
function sa(name) {
    return "hello" + name;
}
console.log(sa("venkat"));
//passing multiple parameters
function add(num1, num2) {
    return num1 + num2;
}
console.log("Sum is " + add(12, 13));
