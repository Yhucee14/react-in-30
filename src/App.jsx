import React from 'react'
import { QuizProvider } from "./quiz-app/QuizContext";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./quiz-app/Quiz";
import SignupForm from "./react-forms/SignupForm";
import Profile from "./react-forms/Profile";
import { AuthProvider } from "./react-forms/AuthContext";
import ReactChart from "./react-chart/ReactChart";
import OverviewPage from "./react-chart/pages/OverviewPage";
import Product from "./react-chart/pages/Product";
import Sidebar from './react-chart/components/Sidebar'

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
            <Route path="/chart" element={<ReactChart />} />

            <React.Fragment>
              <Sidebar />

              <Route path="/overview" element={<OverviewPage />} />
              <Route path="/product" element={<Product />} />
            </React.Fragment>
          </Routes>
        </BrowserRouter>
      </QuizProvider>
    </AuthProvider>
  );
}

export default App;
