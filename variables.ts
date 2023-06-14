//number
var n1:number = 10;
console.log(n1);

//string
var s1:string = "you are the creater of you destiny";
var s2:string = "iam the one";
console.log(s1);
console.log(s2);
var s3:string = s1;
console.log(s3);

//boolean
var b1:boolean = true;
var b2:boolean = false;

console.log(b1);
console.log(b2);

//any type
var a1:any={
    productid:1,
    productname:"iphone",
    productprice:10000
};
console.log(a1);

//homogenous arrays
var array1:Array<string> = ["AngularJS","ReactJS","NodeJS"];
console.log(array1);
console.log(array1[0]);
console.log(array1.length);

//heterogeneous arrays
var array2:Array<any> = ["AngularJS",true,123];
console.log(array2);

//enum - constant values
