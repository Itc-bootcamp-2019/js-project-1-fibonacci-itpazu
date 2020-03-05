// // let x = 7;
// let y = 11;
// console.log(x);
// document.getElementById('x-var').innerText = x;
// document.getElementById('y-var').innerText = y;

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

// function works 1
// function calcBtnClick(userInput) {
//   let y;
//   let myArray = [0, 1];
//     for (i = 0; i < userInput; i++) {
//       const newNum = myArray[i] + myArray[i + 1];
//       myArray.push(newNum);

//     }
//     y = myArray[myArray.length - 2];
//     return y;
//     console.log(y);
//   }




function c() {
  let userInput = document.getElementById('inputBox').value;
  console.log (userInput);
  let y;
  let myArray = [0, 1];
  for (i = 0; i < userInput; i++) {
    const newNum = myArray[i] + myArray[i + 1];
    myArray.push(newNum);
  }
  // console.log(myArray);
  y = myArray[myArray.length - 2];
  // console.log(y);
  // return y;
  const resultCalc = document.getElementById('resultCalc');
  resultCalc.innerHTML = y;

}

const calcBtn = document.getElementById('butn');
calcBtn.addEventListener('click', c);




