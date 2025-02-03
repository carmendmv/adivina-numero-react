import "./App.css";
// react hooks
import { useState, useRef, useEffect } from "react";
import Resultados from "./Resultados";
const secretNumber = Math.trunc(Math.random() * 20) + 1;
function App() {
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const [guessNumber, setGuessNumber] = useState("");
  const inputRef = useRef(null);
  const handleCheck = () => {
    // comprobar si el valor introducido es igual al número aleatorio
    setGuessNumber(Number(inputRef.current.value));
  };

  //arrow functions () => {}
  useEffect(() => {
    if (!Number(guessNumber)) return; //si no ponemos número, retornamos, no hacemos nada
    if (guessNumber === secretNumber) {
      // if (score > highscore) setHighscore(score);
      setHighscore(Math.max(score, highscore));
    } else {
      // el valor introducido es menor que el número aleatorio
      setScore(score - 1);
    }
  }, [guessNumber]); //[array con parámetros]

  return (
    <>
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">
          (Between 1 and 20 but it is {secretNumber} )
        </p>{" "}
        <button className="btn again">Again!</button>
        <div className="number">
          {guessNumber === secretNumber ? secretNumber : "?"}
        </div>
      </header>
      <main>
        <section className="left">
          <input type="number" className="guess" ref={inputRef} />
          <button className="btn check" onClick={handleCheck}>
            Check!
          </button>
        </section>
        <Resultados
          score={score}
          highscore={highscore}
          guessNumber={guessNumber}
          secretNumber={secretNumber}
        />
      </main>
    </>
  );
}

export default App;
