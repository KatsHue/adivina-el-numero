const input = document.querySelector("input"),
  lifes = document.querySelector(".lifes"),
  clue = document.querySelector(".clue"),
  button = document.querySelector(".button"),
  usedNumbersSpan = document.querySelector(".used-numbers");

let num, intents, usedNumbers;

function startGame() {
  num = Math.floor(Math.random() * 100) + 1;
  intents = 10;
  input.value = "";
  usedNumbers = [];
  input.disabled = false;
  button.textContent = "Revisar";
  lifes.textContent = intents;
  input.focus();
  clue.textContent = "";
  usedNumbersSpan.textContent = "";
  console.log("Número aleatorio: " + num);
}

startGame();

button.addEventListener("click", () => {
  if (button.textContent === "Reiniciar") {
    startGame();
    return;
  }

  intents--;
  console.log("oportunidades: " + intents);

  let inputValue = Number(input.value);
  console.log("respuesta usuario: " + inputValue);

  if (!usedNumbers.includes(inputValue)) {
    usedNumbers.push(inputValue);
    usedNumbersSpan.textContent = usedNumbers.join(", ");
  }

  if (inputValue == num) {
    clue.textContent = "¡Adivinaste el número :D!";
    input.disabled = true;
    button.textContent = "Reiniciar";
    win = true;
  } else if (inputValue > num && inputValue <= 100) {
    clue.textContent = "¡Muy alto! Intenta con un número menor";
    lifes.textContent = intents;
  } else if (inputValue < num && inputValue >= 1) {
    clue.textContent = "¡Muy bajo! Intenta con un número mayor";
    lifes.textContent = intents;
  } else if (inputValue > 100 || inputValue < 1) {
    clue.textContent = "Solo puedes poner números entre 1 y 100";
    lifes.textContent = intents;
  }

  if (intents == 0) {
    clue.textContent = `¡Perdiste! :( El número era ${num}`;
    input.disabled = true;
    button.textContent = "Reiniciar";
    inputValue = "";
  }

  if (intents < 0) {
    window.location.reload();
  }
});
