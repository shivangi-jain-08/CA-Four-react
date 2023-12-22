// Importing necessary libraries and components
import React, { useState } from "react";
import questions from "../questions";
import Result from "./Result";
import "../styles/QuestionBox.css";
import moonImage from "../assets/dark-moon.png";
import lightSun from "../assets/light-sun.png";

// Main component for the Quiz App
const QuestionBox = () => {
  // State variables to manage the state of the quiz
  const [darkMode, setDarkMode] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill(null)
  );
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Function to toggle between dark and light themes
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Function to handle the selection of quiz options
  const handleOptionSelect = (optionId) => {
    // Check if the option for the current question is not already selected
    if (selectedOptions[currentQuestion] === null) {
      // Update the selected options array with the chosen option
      const updatedSelectedOptions = [...selectedOptions];
      updatedSelectedOptions[currentQuestion] = optionId;
      setSelectedOptions(updatedSelectedOptions);

      // Move to the next question or show the result if it's the last question
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }
  };

  // Function to reset the quiz to its initial state
  const resetQuiz = () => {
    setDarkMode(false);
    setCurrentQuestion(0);
    setSelectedOptions(Array(questions.length).fill(null));
    setShowResult(false);
    setIsHighlighted(false);
  };

  // Function to style the question based on whether it is highlighted or not
  const getQuestionStyle = () => {
    return isHighlighted
      ? {
          color: "red",
          "-webkit-text-stroke-width": "1.5px",
          "-webkit-text-stroke-color": "black",
          "font-weight": "500",
        }
      : {};
  };

  // Function to calculate the quiz score
  function calculateScore() {
    const correctCount = selectedOptions.reduce(
      (count, selectedOption, index) => {
        const question = questions[index];
        return (
          count +
          (selectedOption !== null && isOptionCorrect(question, selectedOption)
            ? 1
            : 0)
        );
      },
      0
    );

    return Math.round((correctCount / questions.length) * 100);
  }

  // Function to check if the selected option is correct
  function isOptionCorrect(question, selectedOption) {
    return (
      question.options.find((option) => option.id === selectedOption)
        ?.isCorrect || false
    );
  }

  // JSX structure for rendering the Quiz App
  return (
    <div className={`main ${darkMode ? "dark" : "light"}`}>
      <div className="top">
        {/* Header of the Quiz App */}
        <h1 style={darkMode ? { color: "#c3b6ea" } : { color: "#190321" }}>
          React Quiz
        </h1>
        {/* Button to toggle between dark and light themes */}
        <button onClick={toggleTheme} className="theme-btn">
          {darkMode ? <img src={lightSun} /> : <img src={moonImage} />}
        </button>
      </div>
      <div className="container">
        {!showResult ? (
          // Display questions and options if the result is not yet shown
          <div>
            <div className="question-number">{currentQuestion + 1}</div>
            <div style={getQuestionStyle()} className="question">
              {/* Display the current question */}
              {questions[currentQuestion].text}
            </div>
            <ul>
              {/* Display options for the current question */}
              {questions[currentQuestion].options.map((option) => (
                <li
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  className={
                    selectedOptions[currentQuestion] === option.id
                      ? "selected"
                      : ""
                  }
                >
                  {option.text}
                </li>
              ))}
            </ul>
            {/* Buttons to highlight or remove highlight from the question */}
            <div className="button-container">
              <button
                className={`highlight-button`}
                onClick={() => setIsHighlighted(true)}
              >
                Highlight
              </button>
              <button
                className={`remove-highlight-button`}
                onClick={() => setIsHighlighted(false)}
              >
                Remove Highlight
              </button>
            </div>
          </div>
        ) : (
          // Display the result if the quiz is completed
          <Result score={calculateScore()} resetQuiz={resetQuiz} />
        )}
      </div>
    </div>
  );
};

// Exporting the Quiz App component
export default QuestionBox;
