//Datessssssss(complexx h yeh bus basics h)
let myDate =new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)
let myCreatedDate= new Date(2023,0,23)
console.log(myCreatedDate.toDateString())
//month starts from 0
console.log(myCreatedDate.toLocaleString())
let myCreatedDate2= new Date("2023-01-14")
console.log(myCreatedDate2.toLocaleString())
let myCreatedDate3= new Date("01-14-2030")
console.log(myCreatedDate3.toLocaleString())
//--------time stamps
let myTimeStamp =Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000));
let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())
//`${newDate}
newDate.toLocaleString('default',{
    weekday: "long",
    //timeZone:'' google kro 
})

