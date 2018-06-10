import React, {Component} from 'react'

// This component is responsible for displaying the question and option to answer.
class Game extends Component {

    constructor(props) {
        super(props);
        console.log("constructor()")
        this.state = {
            currentQuestion: this.getNewQuestion()
        }
    }

    checkAnswer = (userAnswer) => {
        // Let's check if the user answer is correct or not and then send result back to App to
        // update state and handle result.
        // Let's say user said true, then we will check whether proposed answer matches actual answer or not.
        const proposedAnswer = this.state.currentQuestion.proposedAnswer;
        const actualAnswer = this.state.currentQuestion.value1 + this.state.currentQuestion.value2 + this.state.currentQuestion.value3;
        const wasProposedAnswerCorrect = proposedAnswer === actualAnswer;

        // If wasProposedAnswerCorrect and userAnswer matches means user got it right. Let's update the result to App so that
        // score can be updated.
        this.props.onUserAnswer(wasProposedAnswerCorrect === userAnswer);

        this.renderNewQuestion();
    };

    renderNewQuestion = () => {
        // Let's now generate a new question and update the state.
        const newQuestion = this.getNewQuestion();
        this.setState({
            currentQuestion: newQuestion
        })
    };

    getNewQuestion = () => {
        console.log("getNewQuestion()")
        // Basically let's generate the values and proposed answer again.
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
        console.log("getNewQuestion() returning values")
        return {
            value1: value1,
            value2: value2,
            value3: value3,
            proposedAnswer: proposedAnswer
        }
    };

    render() {
        const value1 = this.state.currentQuestion.value1;
        const value2 = this.state.currentQuestion.value2;
        const value3 = this.state.currentQuestion.value3;
        const proposedAnswer = this.state.currentQuestion.proposedAnswer;
        return <div className="game">
            <h2>Mental Math</h2>
            <div className="equation">
                <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
            </div>
            <button onClick={() => this.checkAnswer(true)}>True</button>
            <button onClick={() => this.checkAnswer(false)}>False</button>
        </div>
    }

}

export default Game;