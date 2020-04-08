//Non-primitive data types 
//objects and arrays

//objects 

//object creation javascript 

//first OBJECT LITERAL 
const student = {};
//console.log(typeof students)
//giving the object properties way 1
student.name = "hewitt";
student.age = 25;

//giving the object properties way2
const person = {
 name:"Hewitt",
 age: 25
  
};
//console.log(person)

//Secong USING CONSTRUCTORS 
const human = new Object();
human.name = "ttiweh";
human.age = 22;

//dot notation can be used to access properties
//console.log(human.age);

//console.log('hey my name is' ${human.name},'i am' ${human.age});

//bracket notation can be used too
//console.log(human["name"])

//ARRAYSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
const points = [24,34,34,55];

//nsole.log(points)

const point = new Array();
point[0]= 1
point[1]=3
point[2]=4

console.log(point)

//an array with multiple datatypes 
const myArray = ["Oranges", 23, 45.0, true,{name:'lika', sex: 'F'}]

console.log(myArray)

//an array of multipleobjects 
const mentees =[
  {
    name : "Maria",
    sex : "F"
  },
  {
    name : "Mary",
    sex : "F"
  }
]
//nsole.log(mentees[2])

for(let i=0; i<mentees.length; i++){
  console.log(mentees[i].name)
}
//LOOOPSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS

//For Loop 
const numbers = [12,23,45,56]

for(let i = 0; i<numbers.length; i++){
  console.log(numbers[i]);
}

