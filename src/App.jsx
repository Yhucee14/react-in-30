import { QuizProvider } from "./quiz-app/QuizContext";
import "./App.css";
import Quiz from "./Quiz";

function App() {
  return (
    <QuizProvider>
      <div className="bg-gray-800 flex justify-center h-screen">
        <Quiz />
      </div>
    </QuizProvider>
  );
}

export default App;
