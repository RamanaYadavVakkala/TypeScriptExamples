// arrow functions are shortcut for anonymous function
//example var doubleMe = (num:number) => num*2;
//(num:number) => { return num*2; }

var hell = ():string=>{
    return "Hello";
}
console.log(hell());

//passing parameters

var h1=(name:string):string=>{
    return "hwllo"+name;
};
console.log(h1("Venkat"));

var multiply = (num1:number,num2:number):number =>{
    return num1*num2;
}
console.log("Product is",multiply(5,8));

//array of arrow functions
 var myarray:Array<any> = [];
 for(var i=0;i<10;i++){
    myarray.push(():number=>{return i}); 
 }
for(var i=0;i<10;i++){
 console.log(myarray[i]());
}
