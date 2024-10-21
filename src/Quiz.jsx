
import {useContext } from "react";
import QuizContext from "./quiz-app/QuizContext";

const Quiz = () => {
const {
  questions,
  score,
  setScore,
  showScore,
  setShowScore,
  currentQuestion,
  setCurrentQuestion,
} = useContext(QuizContext)

  const HandleAnswerSubmission = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="text-3xl py-4 text-white font-bold">Quiz App</div>

      {showScore ? (
        <div className="text-white font-bold text-lg">
          Your score is {score}/{questions.length}
        </div>
      ) : (
        <div>
          <div className="text-gray-200 text-lg py-2 flex flex-row gap-2">
            <div>
               {currentQuestion + 1}.
            </div>
            <h5 className="font-semibold text-lg">{questions[currentQuestion].questionText}</h5>
          </div>

          {questions[currentQuestion].answerOptions.map(
            (answerOption, index) => (
              <button
                key={index}
                onClick={() => HandleAnswerSubmission(answerOption.isCorrect)}
                className="flex flex-col p-2 hover:bg-[#ffffffbc] hover:text-black w-[200px] rounded-lg text-gray-300 font-bold "
              >
                {answerOption.answerText}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
