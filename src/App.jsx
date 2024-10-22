import { QuizProvider } from "./quiz-app/QuizContext";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./quiz-app/Quiz";
import Form from "./react-forms/Form";

function App() {
  return (
    <QuizProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </QuizProvider>
  );
}

export default App;
