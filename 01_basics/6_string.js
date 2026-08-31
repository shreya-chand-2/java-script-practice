const name ="shreya"
const repoCount=50
console.log(name + repoCount +" Value")
//dont use these ++ ,, wli chize
//these r old outdated so we use modern ones
//instead use baptics
//string inter colation yaha banate h place holders
//waha pr jo b variable h  usse directly inject krdo
console.log(`Hello my name is ${name} and my repo counts is ${repoCount}`)
const gameName =new String('shr-ey-ay-a-yyayay')
console.log(gameName[0]);
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('y'))
const newString = gameName.substring(0,4)
console.log(newString);
const anotherString=gameName.slice(-8,10)
console.log(anotherString)
/*tum substring me -ve use kroge toh woh ignore
krta h aur usse 0 se hi count krega
whereas slice k case me it aint like that
woh length - val krega aur u get the index from 
where you wanna start
*/
//trim replace method
const newStringOne="           shreya     "
console.log(newStringOne)
console.log(newStringOne.trim())
//trimstart trimend, white space +new lines
//replace
const url="https://shreyayyayyay.com/shrey%20chand"
console.log(url.replace('%20','-'))
console.log(url.includes('shreya'))
console.log(gameName.split('-'));

