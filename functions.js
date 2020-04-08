//while loops 
//syntax 

//while(<condition>){
      //code to be executed 
      //increament/decreament
  //}

//let i = 0;
//while(i<5){
  //console.log(i);
 // i++
//}

//do while evaluates codition at least one
//do{
  //code to be executed 
  //increament/decreament 
//}while>(<condition>)

//let x = 0;
//do {
 // console.log(x)
 // x++
//}while(x<5)
 
  
  //FUNCTIONSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
  function sum(num1,num2){
    return num1 + num2;
  }

sum(1,3)

function fullname(){
  const fname = "simon";
  const lname = "peter";
  console.log(fname + ' ' + lname)
}
fullname()


//function expression 
const isEven = function(num2){
  return num2 % 2 === 0
}

isEven(6)

const isodd = function(numbers){
  for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i] % 2 === 0)
  }
}  
//  isodd([20,31,3,7,8,9])


//Arrow functionsssssssssssssss
const multiply = (num1,num2) =>{
  return num1*num2;
}

//multiply(3,8)

//if it is one parameter 
const Even = numberToCheck => numberToCheck % 2 ===0;

Even(2)

//functions declared within objects ie methods 

const student = {
  first : "Hewitt",
  last : "Ttiweh",
  fullname(){
    return `${this.first} ${this.last }`
  }
}  
student.fullname()