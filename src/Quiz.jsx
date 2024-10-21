
import { useState } from "react";

const Quiz = () => {
  const [currentQuestions, setCurrentQuestions] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const HandleAnswerSubmission = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestions + 1;
    if (nextQuestion < Questions.length) {
      setCurrentQuestions(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="text-3xl py-4 text-white font-bold">Quiz App</div>

      {showScore ? (
        <div className="text-white font-bold text-lg">
          Your score is {score}/{Questions.length}
        </div>
      ) : (
        <div>
          <div className="text-gray-200 text-lg py-2 flex flex-row gap-2">
            <div>
               {currentQuestions + 1}.
            </div>
            <h5 className="font-semibold text-lg">{Questions[currentQuestions].questionText}</h5>
          </div>

          {Questions[currentQuestions].answerOptions.map(
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
