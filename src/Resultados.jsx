function Resultados(props) {
  const { score, highscore, guessNumber, secretNumber } = props;
  let message;
  if (guessNumber === secretNumber) {
    message = "Correct Number!";
  } else if (score === 20) {
    message = "Adivina el número";
  } else if (score === 0) {
    message = "Has perdido";
  } else if (guessNumber > secretNumber) {
    message = "Te has pasado!";
  } else {
    message = "Te has quedado corto";
  }

  return (
    <section className="right">
      <p className="message">{message}</p>
      <p className="label-score">
        Score: <span className="score">{score}</span>
      </p>
      <p className="label-highscore">
        Highscore: <span className="highscore">{highscore}</span>
      </p>
    </section>
  );
}
export default Resultados;
