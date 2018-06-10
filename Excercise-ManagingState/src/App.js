import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Result from './Result'


class App extends Component {

    state = {
        numQuestions: 0,
        correctAnswers: 0
    }

    updateResult = (isUserCorrect) => {
        // Update the score if user is correct.
        if(isUserCorrect) {
            this.setState((currentState) => ({
                correctAnswers: currentState.correctAnswers + 1
            }))
        }
        this.setState((currentState) => ({
            numQuestions: currentState.numQuestions + 1
        }))
    }

    render() {
        console.log("Result : " + this.state.correctAnswers +"/" + this.state.numQuestions);
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <Game onUserAnswer={this.updateResult}/>
                <Result result = {{correctAnswers: this.state.correctAnswers, totalQuestions: this.state.numQuestions}}/>
            </div>
        );
    }
}

export default App;
