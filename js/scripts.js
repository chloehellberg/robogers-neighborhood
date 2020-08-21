// SPEC #1
let number = 4;                           
function numberList(number) {              
  let roboArray = [];
  for (let i=0; i <= number; i+=1) {
    roboArray.push(i);             
  };
  return roboArray;
}
const result = numberList(number);
console.log(result);

// SPEC #2
let number = 4;
function numberList(number) {
  let roboArray = [];
  for (let i=0; i <= number; i+=1) {
    if (i === 1) {
      roboArray.push("Beep!");
    } else {
      roboArray.push(i);
    }
  };
  return roboArray;
};
const result = numberList(number);
console.log(result);


// SPEC #3
let number = 4;
function numberList(number) {
  let roboArray = [];
  for (i=0; i <= number; i+=1) {
    if (i === 1) {
      roboArray.push("Beep!");
    } else if (i === 2) {
      roboArray.push("Boop!");
    } else {
      roboArray.push(i);
    }
  };
  return roboArray;
};
const result = numberList(number);
console.log(result);

// SPEC #4
let number = 4;
function numberList(number) {
  let roboArray=[];
  for(i=0; i <= number; i +=1) {
    if (i === 3) {
      roboArray.push("Won't you be my neighbor?");
    } else if (i === 2) {
      roboArray.push("Boop!");
    } else if (i === 1) {
      roboArray.push("Beep!");
    } else {
      roboArray.push(i);
    }
  };
  return roboArray;
};
const result = numberList(number);
console.log(result);



* Spec 5: The program returns "Boop!" when it sees a 2 even if it sees a 1 in the inputted number. (2 is more important than 1)
  * Input: "12"
  * Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!"

// SPEC #5
let number = 13;
function numberList(number) {
  let roboArray=[];
  
  for(i=0; i <= number; i +=1) {
    let numberString = i.toString();

    if (numberString.includes("3")) {
      roboArray.push("Won't you be my neighbor?");
    } else if (i === 2) {
      roboArray.push("Boop!");
    }  else if (i === 1) {
      roboArray.push("Beep!");
    } else {
      roboArray.push(i);
    }
  };
  return roboArray;
};









const result = numberList(number);
console.log(result);









