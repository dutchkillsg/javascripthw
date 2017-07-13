//question 1
var x = 2;
var y = 3;
console.log(x+y)
 
var a = "john"
var b = "doe"
console.log(a+b)
//question 2

var boys = ["john","mike","joe","kyle"]
var girls = ["jane","jill","sara","karen"]
var people = [boys,girls]
console.log(people[0][0])
console.log(people[1][0])

//question 3--same as q4 with values changed
/*var c = 102
var d = 86

if (d<100) {
	console.log("your number is less than 100")
} else if (c>100) {
	console.log("your number is greater than 100")
}*/

// question 4 
var c = 169
var d = 102

if (d<100) {
	console.log("your number is less than 100")
} else if (c>100) {
	console.log("your number is greater than 100")
}

// question 5
if (c==d){
	console.log("these numbers are the same")
} else if (c!==d){
	console.log("these numbers are not the same")
}
//question 6
function nm(name){
	return alert(name)
	
}
nm("Malik")

//question 7
function narg(){
	console.log("whatever");
}
narg();

//question 8
function game(door){

	if(door==="door1"){

		return "you lose"

	}else if(door==='door2'){

		return "you win"

	}else if(door==='door3') {

		return "you get nothing"

	} else return "this is not valid"
}





