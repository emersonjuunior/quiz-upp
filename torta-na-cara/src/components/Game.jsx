import { useEffect, useState } from "react";
import "./Game.css";

const Game = ({
  selectedTheme,
  question,
  getRandomQuestion,
  answers,
  verifyAnswer,
  rightAnswer,
  isCorrect,
  selectedAnswer
}) => {
  useEffect(() => {
    getRandomQuestion();
  }, []);

  return (
    <div id="game">
      <h2 id="h2-theme">
        Tema: <span>{selectedTheme}</span>
      </h2>
      <div id="question-container">
        <p id="question">{question}</p>
        <div id="answers-container">
          {answers.map((answer, index) => {

            let answerClass = "";

            if (answer === rightAnswer && selectedAnswer != null) {
              answerClass = "correct"; 
            } else if(selectedAnswer != null) {
              answerClass = "incorrect"; 
            }

            return (
                <div
                className="answer"
                id={answerClass}
                key={index}
                onClick={(e) => verifyAnswer(e.target.textContent)}
              >
                {answer}
              </div>
            );
          })}
        </div>
      </div>
      <div id="button-container">
        <button onClick={getRandomQuestion}>Pular</button>
      </div>
    </div>
  );
};

export default Game;
