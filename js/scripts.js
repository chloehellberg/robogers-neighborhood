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


// SPEC #5
let number = 23;
function numberList(number) {
  let roboArray=[];
  
  for(i=0; i <= number; i +=1) {
    let numberString = i.toString();

    if (numberString.includes("3")) {
      roboArray.push("Won't you be my neighbor?");
    } else if (numberString.includes("2")) {
      roboArray.push("Boop!");
    }  else if (numberString.includes("1")) {
      roboArray.push("Beep!");
    } else {
      roboArray.push(i);
    }
  };
  return roboArray;
};
const result = numberList(number);
console.log(result);