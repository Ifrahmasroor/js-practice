console.log("hello");
console.log("welcome to my first javascript program");
console.log("javascript is amazing");
console.log ("23");

console.write("hi");
// variables
let name='ifrah';
let age='20';
const color ='red';
console.log(color);
//basic math
let x = 8;
let y = 54;
console.log(x+y);
let x=4+5/6 -2;
console.log(x);
// increment
let count =0;
count++;
console.log(count);

// decrement
let score =100;
score --;
console.log(score);
// decision making
if(condition){
    statements
}

if(health<1){
    console.log("game over");

}
if(points >=100);{
console.log("you win");
}
else{
    console.log("try again");

}
//combining conditions &&
let age =45;
if(age >=18 && age< 65){
    console.log("(Adults");
}
//combining conditions ||
if(hour>18||day >5){
    console.log("closed");
}

// ternary operator
if(hour>18){
    ="Closed";
}
else{
    ="open";
}
//loops 
for(initializer:condition; final-expression){
// code to run
}
// example 
for(let i=1; i<=10; i++){
    console.log(i);
}
//lets nmaken another loop, which outputs only  the even numbers 0 to 20
for(let i=0; i<=20;i+=2){
    console.log(i);
}
//while loop
while(condition){
    //code to run
    //final -expression
}
//here is the previous example ,outputting the numbers 0 to 10, using a while loop
let i=0;
while(i<=10){
    console.log(i);
    i++;
}
//break
for(let i=0; i<10;i++){
    if(i==3){
        break;
    }
    console.log(i);
}
//continue...
for(let i=0; i<10;i++){
    if(i==3){
        continue;
    }
    console.log(i);
}
//arrays allow you to store multiple values in a single variable
//to create an array we need to declare a variable and assign it to the list of values,enmclosed in square brackets
let cart =['banana' 'apples' 'milk'];
console.log(cart[0]);
//calculate the sum of all the values in array
//res variable which is added to each number in the array during the loop iteration

let nums=[12,66,43,22];
let res =0;
for( let x=0; x<4; x++){
    res+=nums[x];
}
console.log(res);
//function
//create a funtion called login which output simple messeage
function login(){
    console.log("hi!");
}
//parameters
function login(user){
    console.login("hi,"+user);
}
//return 
function add(x+y){
    return x+y;
}
//also assign a varible  to the function result
let  result=add(42,8);
console.log(result);
//alert()function is used  to create a message box
alert("welcome");
//events here is our buuton in html
<button id = "my Button">
    click me
</button>
//buuton in the java script
let btn = document.getElementsById("my button");
//we can set its onclick event to our desired function
btn.onclick = hello;
//onload event of the window
window.onload = function(){
    let btn =
    document.getElementsById("my button");
    btn.onclick = hello;
};
//create a function right when defining the event handler
btn.onclick = function(){
    console.log("hello");
};
