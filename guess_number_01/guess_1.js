let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);

let guess;
let isWin = false;

while (isWin === false) {
  console.log(answer);
  guess = Number(prompt("1~100"));
  console.log(`guess: ${guess}`);
  document.write(`Your input: ${guess}. <br>`);
  if(guess === answer) {
    alert("you win");
    isWin = true;
  } else if (guess > answer) {
    alert("too big");
  } else if (guess < answer) {
    alert("too small");
  }
}
