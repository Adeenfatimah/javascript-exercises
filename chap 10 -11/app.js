// Q1
// let city = prompt("Enter your city name");
// if (city === "Karachi" || city === "karachi") {
//     alert("Welcome to city of lights")
// }

// Q2
// let gender = prompt("Enter your gender");
// if (gender === "male" || gender === "Male") {
//     alert('Good Morning Sir')
// }
// else if (gender === "female" || gender === "Female") {
//     alert('Good Morning Maam')
// }

// Q3
// let color = prompt('Enter the traffic color');
// if (color === 'red' || color === 'Red') {
//     alert('Must stop')
// }
// else if (color === 'yellow' || color === 'Yellow') {
//     alert('Ready to move')
// }
// else if (color === 'green' || color === 'Green') {
//     alert('Move now')
// }

// Q4
// let fuel = +prompt("Enter your remaining fuel in car in litres: ");
// if (fuel < 0.25) {
//     alert('Please refill the fuel in your car')
// }

// Q5
// Part A
// let a = 4; 
// if (++a === 5){ 
//     alert("given condition for letiable a is true");
//     }

// Part B
// let b = 82;
// if (b++ === 83){
//     alert("given condition for letiable b is true");
//     }

// Part C
// let c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
//     }

// if (c === 13){ 
//     alert("condition 2 is true"); 
//     }

// if (++c < 14){ 
//     alert("condition 3 is true"); 
//     } 

// if(c === 14){ 
//     alert("condition 4 is true"); 
//     }

// Part D
// let materialCost = 20000; 
// let laborCost = 2000; 
// let totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals"); 
//     }

// Part E
// if (true){ 
//     alert("True"); 
//     } 

// if (false){ 
//     alert("False"); 
//     }

// Part F
// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
//     }


// Q6
// let obtainedMarks=+prompt('Enter Obtained Marks in three subjects: ');
// let totalMarks=+prompt('Enter total Marks:');
// let percentage=(obtainedMarks/totalMarks)*100;
// percentage=percentage.toFixed(2);

// document.write('<h3>'+'Marksheet'+'</h3>');
// document.write('Total marks :'+totalMarks+'<br>');
// document.write('Percentage :'+percentage+'<br>');

// let grade;
// let remarks;
// if(percentage>=80){
//     grade=" A-one";
//     remarks=" Excellent";
// }
// else if(percentage>=70){
//     grade=" A";
//     remarks=" Good";
// }
// else if(percentage>=60){
//     grade=" B";
//     remarks=" You need to improve";
// }
// else if(percentage<60){
//     grade=" Fail";
//     remarks=" Sorry";
// }
// else{
//     document.write("Invalid Input" + "<br>")
// }
// document.write('Grade :'+grade+'<br>');
// document.write('Remarks :'+remarks+'<br>');

// Q7
// let secret=7;
// let guess=+prompt('Guess the number: \nBetween 1-10 ');

// Part A
// if(guess===secret){
//     alert('Bingo! Correct answer')
// }
// Part B
// if(++secret===guess){
//     alert('Close enough to the correct answer')
// }
// else{
//     alert('Sorry wrong guess')
// }

// Q8
// let num = +prompt('Enter number to check number is divisible by 3 or not');
// if(num % 3===0){
//     alert(num +' is divisible by 3')
// }
// else{
//     alert(num +' is not divisible by 3')
// }

// Q9
// var num = +prompt('Enter number to check number is even or odd');
// if (num % 2 === 0) {
//     alert(num + ' is even')
// }
// else {
//     alert(num + ' is odd')
// }

// Q10
// var temperature=+prompt('Enter your city temperature');
// if(temperature>40){
//     alert('It is too hot outside')
// }
// else if(temperature>30){
//      alert('The Weather today is Normal.')
// }
// else if(temperature>20){
//     alert('Today’s Weather is cool.')
// }
// else {
//     alert('OMG! Today’s weather is so Cool.')
// }

// Q11
// let firstNumber=+prompt('Enter first Number');
// let secondNumber=+prompt('Enter second Number');
// let oper=prompt('Choose your operation : \n +, - , * , % ')
// if(oper==='+'){
//     alert(firstNumber+secondNumber)
// }
// else if(oper==='-'){
//     alert(firstNumber-secondNumber)
// }
// else if(oper==='*'){
//     alert(firstNumber*secondNumber)
// }
// else if(oper==='/'){
//     alert(firstNumber/secondNumber)
// }
// else{
//     alert(firstNumber%secondNumber)
// }
