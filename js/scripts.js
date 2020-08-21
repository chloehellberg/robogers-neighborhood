$(document).ready(function() {
  $("#neighborhood").submit(function(event) {
    event.preventDefault();

    const number = [parseInt($("input#number").val())];
    console.log(number);

    });
  });
  
    // let roboArray = [];

    // for (let i=0; i < number.length; i +=1) {
    //   number.push(i);
    //   console.log(number);

    // }
    // console.log(roboArray);
//   });
// });


// const number = [4];
// let roboArray = [];

// for (let i=0; i < number.length; i +=1) {
//   roboArray.push(i);
//   console.log(number);
// };