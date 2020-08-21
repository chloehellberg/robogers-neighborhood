// Business Logic

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

function reverseMessage(result) {
  
}


// User Interface Logic

$(document).ready(function() {
  $("#neighborhood").submit(function(event) {
    event.preventDefault();

    const number = parseInt($('input#number').val());
    const result = numberList(number);

    $("#output").text(result);
    // $("#revesrseMe").show();
  });
});


