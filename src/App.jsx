import "./App.css";
// react hooks
import { useState, useRef } from "react";

// Función para generar el número aleatorio
const generateRandomNumber = () => Math.floor(Math.random() * 20) + 1;

function App() {
  const [score, setScore] = useState(20); // Puntaje del jugador
  const [highscore, setHighscore] = useState(0); // Puntaje más alto
  const [message, setMessage] = useState("Start guessing..."); // Mensaje que se muestra
  const [number, setNumber] = useState(generateRandomNumber()); // Número aleatorio generado
  const [guessedCorrectly, setGuessedCorrectly] = useState(false); // Estado para saber si el jugador adivinó el número
  const inputRef = useRef(null); // Referencia para el campo de entrada de número

  const handleCheckNumber = () => {
    const inputNumber = Number(inputRef.current.value); // Convertimos la entrada a un número

    if (!inputNumber || inputNumber < 1 || inputNumber > 20) {
      setMessage("⛔ Please enter a valid number between 1 and 20.");
      return; // Si el número no es válido, salimos de la función
    }

    if (inputNumber === number) {
      // Si el número introducido es el correcto
      setMessage("✅ Correct! You win!");
      setGuessedCorrectly(true); // Marcamos que el jugador adivinó correctamente
      if (score > highscore) {
        setHighscore(score); // Actualizamos el puntaje más alto si corresponde
      }
    } else {
      // Si el número introducido no es correcto
      setScore((prevScore) => prevScore - 1); // Reducimos el puntaje

      if (inputNumber > number) {
        // Si el número es mayor que el número aleatorio
        setMessage("📉 Too high! Try again.");
      } else {
        // Si el número es menor que el número aleatorio
        setMessage("📈 Too low! Try again.");
      }
    }

    if (score <= 1) {
      // Si el puntaje llega a 0 o menos, el jugador pierde
      setMessage("💥 Game over! You lost.");
    }
  };

  const handleAgain = () => {
    setScore(20); // Restablecemos el puntaje a 20
    setMessage("Start guessing..."); // Restablecemos el mensaje
    setNumber(generateRandomNumber()); // Generamos un nuevo número aleatorio
    setGuessedCorrectly(false); // Restablecemos el estado de adivinanza
    inputRef.current.value = ""; // Limpiamos el campo de entrada
  };

  return (
    <>
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again" onClick={handleAgain}>
          Again!
        </button>
        {guessedCorrectly && (
          <div className="number">{number}</div> // Solo mostrar el número cuando se haya adivinado correctamente
        )}
      </header>
      <main>
        <section className="left">
          <input type="number" className="guess" ref={inputRef} />
          <button className="btn check" onClick={handleCheckNumber}>
            Check!
          </button>
        </section>
        <section className="right">
          <p className="message">{message}</p>
          <p className="label-score">
            💯 Score: <span className="score">{score}</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{highscore}</span>
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
