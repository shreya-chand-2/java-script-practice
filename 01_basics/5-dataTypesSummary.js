//primitive
//7 types : String,Number,Boolean,NULL,undefined,
// symbol,BigInt
//js is
const score =100
const scoreValue = 100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail=undefined;
//declaring symbols
const id=Symbol('123')
const anotherId= Symbol('123')
console.log(id==anotherId);
//big int
const bigNumber =3454432123454321n
console.log(bigNumber)

//Reference{(Non primitive)}
//Array,objects,functions

const heros=["shaktiman","naagraj","doga"]
//objs

let myObj= {
    name:"shreya",
    age:"18"
}
const myFunction= function(){
    console.log("Hello world");
}
//fns r fns but inka type obj fns h
console.log(typeof myFunction)
myFunction()
// memoriesssssssssssssssssssss
//stack,heap
//stack(primitive),heap(Non-Primitive)
let myYoutubename="shreyayayayya"
//jitni  primitive values h woh stack me jaegi
let anotherName="chaiaurcode"
console.log(myYoutubename)
console.log(anotherName)
let user1={
    email:"user@gmail",
    upi:"@2"
}
let user2=user1
user2.email="shreya@email"
console.log(user1.email)
console.log(user2.email)

/*
primitive ke case me stack me copy ban jati h and 
non primitive k case mename jo h woh stack me h aur jo value h woh data heap me h
jab hum koi dusra element ko assign krenge same value toh fir heap wale pr
hi woh point krega isliye abh dono same location ko point kr rhe
ek me change dusre me reflect*/
