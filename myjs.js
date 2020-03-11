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

const url = 'http://localhost:5050/fibonacci/';

document.getElementById('butn').addEventListener('click', () => {
  const mySpinner = document.getElementById('spinner-noshow');
  mySpinner.className = 'spinner';
  const fortyTwoError = document.getElementById('forty-two-error');
  fortyTwoError.className = 'forty-two-error-noshow';
  const biggerThanFifty = document.getElementById('error-bigger');
  biggerThanFifty.className = 'error-big';
  const resultDissapear = document.getElementById('resultCalc');
  resultDissapear.className = 'result-noshow';
  const inputBoxColorChange = document.getElementById('inputBox');
  console.log(biggerThanFifty);
  userInput = document.getElementById('inputBox').value;
  inputBoxColorChange.style.border = '#cccccc 2px solid';
  inputBoxColorChange.style.color = '#373a3c';

  //  if bigger than 50
  if (userInput > 50) {
    mySpinner.className = 'spinner-noshow';
    resultDissapear.className = 'result-noshow';
    biggerThanFifty.className = 'error-bigger';
    inputBoxColorChange.style.border = '#f2dede 2px solid';
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
          console.log(error);
          document.getElementById('forty-two-error').innerHTML =
            'server error: ' + error;
        });
      }
    });
  }
});
