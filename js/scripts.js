// SPEC #1
// let number = 4;                           

// function numberList(number) {              
//   let roboArray = [];
//   for (let i=0; i <= number; i+=1) {
//     roboArray.push(i);             
//   };
//   return roboArray;
// }
// const result = numberList(number);
// console.log(result);

SPEC #2
let number = 4;

function numberList(number) {
  let roboArray = [];
  for (let i=0; i <= number; i+=1) {
    
    if (i === 1) {
      roboArray.push("Beep!");
    }
    else {
      roboArray.push(i);
    }
  };
  return roboArray;
};
const result = numberList(number);
console.log(result);
































// $(document).ready(function() {
//   $("#neighborhood").submit(function(event) {
//     event.preventDefault();

    // const number = parseInt($("input#number").val());
    // let roboArray = [];

