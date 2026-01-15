console.log("Anubhav");
//2 variable
let name = "jay";  //string
let age=22;              //number
const country="India";   //constant
let isstudent = true ;   //boolean


console.log(name);
console.log(age);
console.log(country);
console.log(isstudent);

//6 operators
let a=10;
let b=5;

console.log("Add:",a+b);
console.log("Add:",a-b);
console.log("Add:",a*b);
console.log("Add:",a/b);

//condition (if-else)
let loginAge=18;
if(loginAge>=18){
    console.log("Allowed to login")
}    
else {
    console.log("Not Allowed");
}

//loop (for)
for(let i=1;i<=5;i++){
    console.log("loop count:", i);
}

//function 
function add(x,y){
    return x+y;
}


let result =add(20,30);
console.log("function result:", result);


//simple backend login
const admin={
    username:"admin",
    password:"1234"
};

function login(username,password){
    if(username===admin.username && password===admin.password){
        console.log("Login Successful");
    }else{
        console.log("Login Failed");
    }
}
login("admin","1234");