import './App.css';
import QuestionComponent from './components/QuestionComponent';
import Header from './components/HeaderComponent';
import { Component } from 'react';
import { Questions } from './shared/Questions';
import Result from './components/ResultComponent';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      questions: Questions,
      currentQuestionId: 0,
      answerIds: [0, 0, 0, 0, 0], //Five questions, hence five answers to be stored. Index to the array will be the question id.
      displayResult: false
    };

    this.displayPrevious = this.displayPrevious.bind(this);

    this.displayNext = this.displayNext.bind(this);

    this.submitAnswers = this.submitAnswers.bind(this);

    this.storeAnswer = this.storeAnswer.bind(this);
  }

  displayPrevious() {
    if(this.state.currentQuestionId > 0) {
      this.setState({ currentQuestionId: this.state.currentQuestionId - 1 });
    }
  }

  displayNext() {
    if(this.state.currentQuestionId < 4) {
      this.setState({ currentQuestionId: this.state.currentQuestionId + 1 });
    }
  }

  submitAnswers() {
    this.setState({ displayResult: true });
  }

  storeAnswer(optionId) {
    this.state.answerIds[this.state.currentQuestionId] = optionId;

    this.setState({});
    
  }

  render() {
    return (
      <div>
        <Header/>
        <QuestionComponent question={this.state.questions.filter((qId) => qId.id === this.state.currentQuestionId)[0]}
         answer={this.state.answerIds[this.state.currentQuestionId]} onClick={(optionId) => this.storeAnswer(optionId)}/>
        <div id="buttons-row-style">
              <button onClick={this.displayPrevious}>Previous</button>
              <button onClick={this.displayNext}>Next</button>
              <button onClick={this.submitAnswers}>Submit</button>
        </div>
        <hr/>
        {this.state.displayResult && <Result answers={this.state.answerIds} questions={this.state.questions}/>}
      </div>
    );
  }
}

export default App;
