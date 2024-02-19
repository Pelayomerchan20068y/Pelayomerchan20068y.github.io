let randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

while (true) {
    guess = Number(prompt("Adivina el número (entre 1 y 100):")); 
    attempts++;

    if (guess === randomNumber) {
      document.write(`¡Felicidades! Adivinaste el número en ${attempts} intentos.`);
        break;
    } else if (guess < randomNumber) {
        console.log("¡Intenta con un número mayor!");
    } else {
        console.log("¡Intenta con un número menor!");
    }
}
