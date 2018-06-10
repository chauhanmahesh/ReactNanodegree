import React from 'react'

// This component is responsible for showing result.
const Result = (props) => {
    const correctAnswers = props.result.correctAnswers;
    const totalQuestions = props.result.totalQuestions;
    return (<div className="game">
        <p className="text">
            Your Score: {correctAnswers}/{totalQuestions}
        </p>
    </div>)
}

export default Result;