import { QuizProvider } from "./quiz-app/QuizContext";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./quiz-app/Quiz";
import SignupForm from "./react-forms/SignupForm";

function App() {
  return (
    <QuizProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
    </QuizProvider>
  );
}

export default App;
