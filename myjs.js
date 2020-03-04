// // let x = 7;
// let y = 11;
// console.log(x);
// document.getElementById('x-var').innerText = x;
// document.getElementById('y-var').innerText = y;

let x = 15;
let myArray = [0, 1];
let y;

for (i = 0; i < x; i++) {
  newNum = myArray[i] + myArray[i + 1];
  myArray.push(newNum);

}

y = myArray[myArray.length - 1];


// document.getElementById('xVar').innerHTML = x;
// document.getElementById('yVar').innerHTML = y;
const xVar = document.getElementById('xVar');
xVar.innerHTML= x;
const yVar = document.getElementById('yVar');
yVar.innerHTML= y;

