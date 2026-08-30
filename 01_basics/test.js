console.log("shreya")
const a=100;
let b="rftghj"
var c="1234567876543"
//u cant chnge a const
/*
prefer not to use var because of issue in block scope
and functional scope
*/
console.table(["before values",a,b,c])
b='2' 
c='a'
console.table(["after values",a,b,c])
