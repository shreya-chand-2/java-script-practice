//singleton
/* interview
jab b hum actually literals se banate toh singleton 
nhi banta aur jab constructor se singleton ban skta
*/
//object literals
// const JsUser ={
//     name : "Shreya",
//     age : 18,
//     location : "Mumbai",
//     email:"shreya@gamil.com",
//     isLoggedIn : false,
//     lastLoginDays: ["Monday","Saturday"]
// }
// console.log(JsUser.email)
// //it is correct method but cant be say sahi tareeka
// console.log(JsUser["email"])
// now re declare aur iss bar . se access nhi hoga
const mySym = Symbol("key1")
const JsUser ={
    name : "Shreya",
    "full name":"lalala",
    [mySym] : "my key 1",
    age : 18,
    location : "Mumbai",
    email:"shreya@gamil.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"]
}
//console.log(JsUser["full name"])
// this cant be accessed by .
//console.log(JsUser.mySym)
//but aise yeh symbol ki trh use krna tha
//console.log(typeof JsUser.mySym)
//toh iska ek hi tarika put in [] and dot cant be 
// used to access it
//console.log(JsUser[mySym])
//console.log(typeof mySym)
JsUser.email="miow";
//Object.freeze(JsUser) //isse u caant change it anymore
JsUser.email="heheheh"
//console.log(JsUser)
JsUser.greeting = function(){
    console.log("Hello JS user ")
}
//console.log(JsUser.greeting)
console.log(JsUser.greeting())
JsUser.greeting2=function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting2())








