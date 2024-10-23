import { QuizProvider } from "./quiz-app/QuizContext";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./quiz-app/Quiz";
import SignupForm from "./react-forms/SignupForm";
import Profile from "./react-forms/Profile";
import { AuthProvider } from "./react-forms/AuthContext";

function App() {
  return (
    <AuthProvider>
      <QuizProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </QuizProvider>
    </AuthProvider>
  );
}

export default App;
