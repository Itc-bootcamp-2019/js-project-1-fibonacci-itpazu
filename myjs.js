// excersice 2:

// // let x = 7;
// let y = 11;
// console.log(x);
// document.getElementById('x-var').innerText = x;
// document.getElementById('y-var').innerText = y;

// exercise 3

// let x = 2;
// let myArray = [0, 1];
// let y;

// for (i = 0; i < x; i++) {
//   newNum = myArray[i] + myArray[i + 1];
//   myArray.push(newNum);

// }
// console.log(myArray);
// y =myArray[myArray.length-2]
// console.log(y)

// document.getElementById('xVar').innerHTML = x;
// document.getElementById('yVar').innerHTML = y;
// const xVar = document.getElementById('xVar');
// xVar.innerHTML= x;
// const yVar = document.getElementById('yVar');
// yVar.innerHTML= y;

// exercise 4

// function c() {
//   let userInput = document.getElementById('inputBox').value;
//   console.log (userInput);
//   let y;
//   let myArray = [0, 1];
//   for (i = 0; i < userInput; i++) {
//     const newNum = myArray[i] + myArray[i + 1];
//     myArray.push(newNum);
//   }
//   y = myArray[myArray.length - 2];
//   const resultCalc = document.getElementById('resultCalc');
//   resultCalc.innerHTML = y;

// }

// const calcBtn = document.getElementById('butn');
// calcBtn.addEventListener('click', c);

// document.getElementById('butn').addEventListener('click', () => {
// let userInput = document.getElementById('inputBox').value;
//   let y;
//   let myArray = [0, 1];
//   for (i = 0; i < userInput; i++) {
//     const newNum = myArray[i] + myArray[i + 1];
//     myArray.push(newNum);
//   }
//   y = myArray[myArray.length - 2];
//   const resultCalc = document.getElementById('resultCalc');
//   resultCalc.innerHTML = y;
// });

// milestone 5
// const url = 'http://localhost:5050/fibonacci/';

// document.getElementById('butn').addEventListener('click', () => {
//   console.log('click');
//   userInput = document.getElementById('inputBox').value;
//   fetch(url + userInput)
//     .then(response => response.json())
//     .then(function(data) {
//       let y = data.result;
//       document.getElementById('resultCalc').innerHTML = y;
//     })
// });

// milestone 6

// const url = 'http://localhost:5050/fibonacci/';

// document.getElementById('butn').addEventListener('click', () => {
//   const mySpinner = document.getElementById('spinner-noshow');
//   mySpinner.className = 'spinner';
//   const fortyTwoError = document.getElementById('forty-two-error');
//   fortyTwoError.className = 'forty-two-error-noshow';
//   const biggerThanFifty = document.getElementById('error-bigger');
//   biggerThanFifty.className = 'error-big';
//   const resultDissapear = document.getElementById('resultCalc');
//   resultDissapear.className = 'result-noshow';
//   const inputBoxColorChange = document.getElementById('inputBox');
//   console.log(biggerThanFifty);
//   userInput = document.getElementById('inputBox').value;
//   inputBoxColorChange.style.border = '#cccccc 2px solid';
//   inputBoxColorChange.style.color = '#373a3c';

//   //  if bigger than 50
//   if (userInput > 50) {
//     mySpinner.className = 'spinner-noshow';
//     resultDissapear.className = 'result-noshow';
//     biggerThanFifty.className = 'error-bigger';
//     inputBoxColorChange.style.border = '#f2dede 2px solid';
//     inputBoxColorChange.style.color = '#D9534F';

//     // if smaller than 50
//   } else {
//     fetch(url + userInput).then(response => {
//       //  if response is ok
//       if (response.ok) {
//         mySpinner.className = 'spinner-noshow';
//         resultDissapear.className = 'result-show';
//         response.json().then(function(data) {
//           let y = data.result;
//           document.getElementById('resultCalc').innerHTML = y;

//           // if error
//         });
//       } else {
//         fortyTwoError.className = 'forty-two-error-nowshow';
//         response.text().then(error => {
//           mySpinner.className = 'spinner-noshow';
//           console.log(error);
//           document.getElementById('forty-two-error').innerHTML =
//             'server error: ' + error;
//         });
//       }
//     });
//   }
// });

//

// let mySpinner = document.getElementById('spinner-noshow');
// let fortyTwoError = document.getElementById('forty-two-error');
// let biggerThanFifty = document.getElementById('error-bigger');
// let resultDissapear = document.getElementById('resultCalc');

// document.getElementById('butn').addEventListener('click', clickUpDown);

// function clickUpDown() {
//    clickUp();
//    clickDown();
//  }

//  function clickUp () {
//   const url = 'http://localhost:5050/fibonacci/';
//   mySpinner.className = 'spinner';
//   fortyTwoError.className = 'forty-two-error-noshow';
//   biggerThanFifty.className = 'error-big';
//   resultDissapear.className = 'result-noshow';
//   const inputBoxColorChange = document.getElementById('inputBox');
//   userInput = document.getElementById('inputBox').value;
//   inputBoxColorChange.style.border = '#cccccc 2px solid';
//   inputBoxColorChange.style.color = '#373a3c';

//   //  if bigger than 50
//   if (userInput > 50) {
//     mySpinner.className = 'spinner-noshow';
//     resultDissapear.className = 'result-noshow';
//     biggerThanFifty.className = 'error-bigger';
//     inputBoxColorChange.style.border = '#f2dede 2px solid';
//     inputBoxColorChange.style.color = '#D9534F';

//     // if smaller than 50
//   } else {
//     fetch(url + userInput).then(response => {
//       //  if response is ok
//       if (response.ok) {
//         mySpinner.className = 'spinner-noshow';
//         resultDissapear.className = 'result-show';
//         response.json().then(function(data) {
//           let y = data.result;
//           document.getElementById('resultCalc').innerHTML = y;

//           // if error
//         });
//       } else {
//         fortyTwoError.className = 'forty-two-error-nowshow';
//         response.text().then(error => {
//           mySpinner.className = 'spinner-noshow';
//           document.getElementById('forty-two-error').innerHTML =
//             'server error: ' + error;
//         });
//       }
//     });
//   }
// };

// let urlResults = 'http://localhost:5050/getFibonacciResults';

// function clickDown() {
//   const mySecondSpinner = document.getElementById('spinner-noshow-down');
//   mySecondSpinner.className = 'spinner-d';
//   let resultsInText= document.getElementById('resultsSearch');
//   resultsInText.innerHTML= '';

//   fetch(urlResults)

//     .then(response => {  if (response.ok) {
//       mySecondSpinner.className ='spinner-noshow-two'
//       console.log(mySecondSpinner)
//       return response.json();
//     }
//     })
//     .then(dataResults => {
//       console.log(dataResults)
//       let resultsSearch = dataResults.results;
//       dataResults.results = dataResults.results.sort((a, b) => b.createdDate - a.createdDate);
//       for (i=0; i < resultsSearch.length; i++) {

//         resultsInText= document.getElementById('resultsSearch');
//         const resultNumber = document.createElement("div");
//         resultNumber.classList.add('result-number', 'col-12')
//         resultsInText.append(resultNumber);

//         resultNumber.innerHTML = `The Fibonnaci of <strong>${resultsSearch[i].number}</strong>
//         is <strong>${resultsSearch[i].result}</strong> calculated at:  ${new Date (resultsSearch[i].createdDate)}`;

//       }

//     });
// };

// milestone 8

// add inputbox
const rowCheckbox = document.getElementById('wrapper-checkbox');
console.log(rowCheckbox);
const checkBoxInsert = document.createElement('input');
checkBoxInsert.type = 'checkbox';
checkBoxInsert.name = 'saveCalculation';
checkBoxInsert.value = 'value';
checkBoxInsert.class = 'checkbox-save';
checkBoxInsert.id = 'checkBoxSave';
rowCheckbox.appendChild(checkBoxInsert);

let checkBoxCheck = document.getElementById('checkBoxSave');

//      variables for the calculator function in the global scope
let url = 'http://localhost:5050/fibonacci/';
let fortyTwoError = document.getElementById('forty-two-error');
let mySpinner = document.getElementById('spinner-noshow');
let biggerThanFifty = document.getElementById('error-bigger');
let resultDissapear = document.getElementById('resultCalc');
let inputBoxColorChange = document.getElementById('inputBox');

//      variables for the results log function in the global scope

let urlResults = 'http://localhost:5050/getFibonacciResults';
let mySecondSpinner = document.getElementById('spinner-noshow-down');

let resultCalc = document.getElementById('resultCalc');

//      eventlistener for click calls function EventlistenerUpDown
document.getElementById('butn').addEventListener('click', EventListenerUpDown);

// function: if checkbox is checked - server, else- own algorithm.
// clickDown();

clickDown();
function EventListenerUpDown() {
  let userInput = document.getElementById('inputBox').value;

  if (checkBoxCheck.checked === true) {
    if (userInput > 50) {
      let resultsInText = document.getElementById('resultsSearch');
      resultsInText.innerHTML = '';
      clickUp();
    } else {
      clickUp();
      clickDown();
    }
  } else {
    c();
    resultsInText.innerHTML = '';
  }
}

//      function for server calculator on click

function clickUp() {
  userInput = document.getElementById('inputBox').value;
  biggerThanFifty.className = 'error-big';
  // resultsInText.className = 'noshow-results';
  mySpinner.className = 'spinner';
  fortyTwoError.className = 'forty-two-error-noshow';
  resultDissapear.className = 'result-noshow';
  inputBoxColorChange.style.border = '#cccccc 1px solid';
  inputBoxColorChange.style.color = '#373a3c';

  //  if bigger than 50
  if (userInput > 50) {
    mySpinner.className = 'spinner-noshow';
    resultDissapear.className = 'result-noshow';
    biggerThanFifty.className = 'error-bigger';
    inputBoxColorChange.style.border = '#f2dede 1px solid';
    inputBoxColorChange.style.color = '#D9534F';

    // if smaller than 50
  } else {
    fetch(url + userInput).then(response => {
      //  if response is ok
      if (response.ok) {
        mySpinner.className = 'spinner-noshow';
        resultDissapear.className = 'result-show';
        response.json().then(function(data) {
          let y = data.result;
          document.getElementById('resultCalc').innerHTML = y;

          // if error
        });
      } else {
        fortyTwoError.className = 'forty-two-error-nowshow';
        response.text().then(error => {
          mySpinner.className = 'spinner-noshow';
          document.getElementById('forty-two-error').innerHTML =
            'server error: ' + error;
        });
      }
    });
  }
}
let resultsInText = document.getElementById('resultsSearch');

function fetchResults() {
  let resultsInText = document.getElementById('resultsSearch');
  resultsInText.innerHTML = '';

  fetch(urlResults)
    .then(responseTwo => {
      if (responseTwo.ok) {
        mySecondSpinner.className = 'spinner-noshow-two';
        // resultsInText.className = 'show-results';
        return responseTwo.json();
      }
    })
    .then(dataResults => {
      resultsSearch = dataResults.results;
      dataResults.results = dataResults.results.sort(
        (a, b) => b.createdDate - a.createdDate
      );
      for (i = 0; i < resultsSearch.length; i++) {
        resultsInText = document.getElementById('resultsSearch');

        const resultNumber = document.createElement('div');
        resultNumber.classList.add('result-number', 'col-12');
        resultsInText.append(resultNumber);
        resultsInText.className = 'show';

        resultNumber.innerHTML = `The Fibonnaci of <strong>${
          resultsSearch[i].number
        }</strong>
        is <strong>${
          resultsSearch[i].result
        }</strong> calculated at:  ${new Date(resultsSearch[i].createdDate)}`;
      }
    });
}

// function for fetching results when click

function clickDown() {
  mySecondSpinner.className = 'spinner-d';
  fetchResults();
}

//    function for activating calculator when checkbox is not checked
//
function c() {
  resultsSearch.className = 'noshow-results';
  fortyTwoError.className = 'forty-two-error-noshow';
  biggerThanFifty.className = 'error-big';
  resultCalc.className = 'result-show';
  inputBoxColorChange.style.border = '#cccccc 1px solid';
  inputBoxColorChange.style.color = '#373a3c';

  let userInput = document.getElementById('inputBox').value;
  console.log(userInput);
  let y;
  let myArray = [0, 1];
  for (i = 0; i < userInput; i++) {
    const newNum = myArray[i] + myArray[i + 1];
    myArray.push(newNum);
  }
  y = myArray[myArray.length - 2];
  resultCalc.innerHTML = y;
}
