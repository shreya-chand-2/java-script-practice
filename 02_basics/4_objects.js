//abh hum constructor ki baat krte.
const tinderUser =new Object() //singleton obj
//const tinderUser ={} non singleton obj
console.log(tinderUser)
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
console.log(tinderUser)
const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userfullname : {
            firstname:"shreya",
            lastname:"chand"

        }
    }
}
console.log(regularUser)
console.log(regularUser.fullname.userfullname.lastname)
/* jab hum aise apis se fetchkree h koi chiz toh tabh hume
? mark lagana hota h jaise console.log(user.id?.name)
iska matlab ki agr user me id exist krri h toh hi name 
search kro*/
const obj1 ={1: "a", 2:"b"}
const obj2 ={3:  "a", 4: "b"}
//const obj3 ={3 : "a", 4: "b"}
const obj3 = { obj1, obj2 }
console.log(obj3)
const obj4= Object.assign(obj1,obj2)
console.log(obj4)
// ek empty paranthesis is optional but it is good practice
//iska documentation object assign mdn
const obj6= {7 :"sareya"}
const obj5= Object.assign({},obj1,obj2,obj6)
console.log(obj5)
//but we usually use spread
const obj8 ={...obj1,...obj2}
console.log(obj8)
const users = [
    {
        id :1,
        email : "chans@"  
    },
    {
        id :1,
        email : "chans@"  
    },
    {
        id :1,
        email : "chans@"  
    },
    {
        id :1,
        email : "chans@"  
    }
]
users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
//issey apun array bana dete h
/*kai baar aap obj me loop thru krte ho to find value
aur kai baar woh exist nhi krti toh crash ho skta
toh ya toh do manually ya pucho uske pass h ki nhi by */
console.log(tinderUser.hasOwnProperty('isLogged'));
