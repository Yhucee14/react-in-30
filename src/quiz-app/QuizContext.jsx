import {useState, createContext} from 'react'
import PropTypes from 'prop-types'

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
 const [questions, setQuestions] = useState(
    [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
              { answerText: 'Berlin', isCorrect: false },
              { answerText: 'Madrid', isCorrect: false },
              { answerText: 'Paris', isCorrect: true },
              { answerText: 'Lisbon', isCorrect: false },
            ],
          },
          {
            questionText: 'Who is the CEO of Tesla?',
            answerOptions: [
              { answerText: 'Jeff Bezos', isCorrect: false },
              { answerText: 'Elon Musk', isCorrect: true },
              { answerText: 'Bill Gates', isCorrect: false },
              { answerText: 'Tony Stark', isCorrect: false },
            ],
          },
          {
            questionText: 'Who won the EPL golden boot last season?',
            answerOptions: [
              { answerText: 'Erling Haaland', isCorrect: true },
              { answerText: 'Elon Musk', isCorrect: false },
              { answerText: 'Marcus Rashford', isCorrect: false },
              { answerText: 'Tony Stark', isCorrect: false },
            ],
          },
        {
          questionText: 'which Nigerian artiste recently won a Grammy?',
          answerOptions: [
            { answerText: 'Davido', isCorrect: false },
            { answerText: 'Tems', isCorrect: true },
            { answerText: 'Rema', isCorrect: false },
            { answerText: 'Jeriq', isCorrect: false },
          ],
        },
        {
            questionText: 'Where was the last FIFA world cup held?',
            answerOptions: [
              { answerText: 'Nigeria', isCorrect: false },
              { answerText: 'Canada', isCorrect: false },
              { answerText: 'Russia', isCorrect: false },
              { answerText: 'Qatar', isCorrect: true },
            ],
          },
    ]
 )

 const [score, setScore] = useState(0)
 const [showScore, setShowScore] = useState(false)
 const [currentQuestion, setCurrentQuestion] = useState(0);




 return (
    <QuizContext.Provider 
    value={{
     questions,
     score,
     setScore,
     showScore,
     setShowScore,
     currentQuestion,
     setCurrentQuestion,
    }}>
     {children}
    </QuizContext.Provider>
   )
}

QuizProvider.propTypes = {
    children: PropTypes.object.isRequired,
  };

export default QuizContext