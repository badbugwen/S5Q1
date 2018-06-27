let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);

let guess;
let isWin = false;
let count = 0;

while (isWin === false) {
  console.log(answer);
  guess = Number(Math.floor(Math.random() * 100) + 1);
  count++;
  console.log(`guess: ${guess}`);
  document.write(`Your input: ${guess}. <br>`)
  if(guess === answer) {
    console.log("you win");
    isWin = true;
    document.write(`Your tried ${count} times. <br>`)
  } else if (guess > answer) {
    console.log("too big");
  } else if (guess < answer) {
    console.log("too small");
  }
}
