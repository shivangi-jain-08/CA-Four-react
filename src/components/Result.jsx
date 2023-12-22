import React from 'react';

const Result = ({ score, resetQuiz }) => {
  return (
    <div className="result-container">
      <h2 className='result-heading'>Result</h2>
      <p className='result'>Your score: {score}%</p>
      <div className='progress-bar'>
        <div className='percentage-bar' style={{ width: `${score}%` }}>
        <p>{score}%</p>
        </div>
      </div>
      <button onClick={resetQuiz} className='reset-button'>Restart Quiz</button>
    </div>
  );
};

export default Result;
