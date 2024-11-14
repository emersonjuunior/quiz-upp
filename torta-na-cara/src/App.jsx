import { useState } from "react";
import "./App.css";
import ParticleBackground from "./components/ParticleComponent";
import Header from "./components/Header";
import Home from "./components/Home";
import Themes from "./components/Themes";
import Game from "./components/Game";
import questions from "./data/questions.js";

function App() {
  const [gameStage, setGameStage] = useState(1);
  const [selectedTheme, setSelectedTheme] = useState("");

  const [question, setQuestion] = useState();
  const [utilizedQuestions, setUtilizedQuestions] = useState([]);

  const [answers, setAnswers] = useState([]);
  const [rightAnswer, setRightAnswer] = useState();

  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const selectTheme = (value) => {
    setGameStage(3);
    setSelectedTheme(value);
    getRandomQuestion();
  };

  const goToHome = () => {
    setGameStage(1);
  };

  const startGame = () => {
    setGameStage(2);
  };

  // get a random question
  const getRandomQuestion = () => {
    if (!selectedTheme || !questions[selectedTheme]) {
      return;
    }

    let randomIndex = Math.floor(Math.random() * 20);

    if (utilizedQuestions.length === 20) {
      setUtilizedQuestions([]);
    } else {
      while (utilizedQuestions.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * 20);
      }
    }
    setUtilizedQuestions((prevUtilizedQuestions) => [
      ...prevUtilizedQuestions,
      randomIndex,
    ]);

    // shuffle the answers array
    let answers = [
      ...questions[selectedTheme][randomIndex].incorrect_answers,
      questions[selectedTheme][randomIndex].correct_answer,
    ];
    const shuffledArray = answers.sort(() => Math.random() - 0.5);

    setAnswers(shuffledArray);
    setRightAnswer(questions[selectedTheme][randomIndex].correct_answer);
    setQuestion(questions[selectedTheme][randomIndex].question);

    console.log(utilizedQuestions);
  };

  // verify the answer
  const verifyAnswer = (value) => {
    setSelectedAnswer(value);

    if (value === rightAnswer) {
      setIsCorrect("correct");
    } else {
      setIsCorrect("incorrect");
    }
    setTimeout(() => {
      setSelectedAnswer(null);
      setIsCorrect(null);
      getRandomQuestion();
    }, 1500);
  };

  return (
    <>
      <div className="App">
        <ParticleBackground id="particles" />
        <Header startGame={startGame} goToHome={goToHome} />
        {gameStage === 1 && <Home startGame={startGame} />}
        {gameStage === 2 && (
          <Themes
            selectTheme={selectTheme}
            getRandomQuestion={getRandomQuestion}
          />
        )}
        {gameStage === 3 && (
          <Game
            selectedTheme={selectedTheme}
            question={question}
            getRandomQuestion={getRandomQuestion}
            answers={answers}
            verifyAnswer={verifyAnswer}
            rightAnswer={rightAnswer}
            isCorrect={isCorrect}
            selectedAnswer={selectedAnswer}
          />
        )}
      </div>
    </>
  );
}

export default App;
