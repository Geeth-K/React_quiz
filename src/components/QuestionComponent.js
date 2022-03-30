import React from 'react';

const QuestionComponent  = (props) => {
    const qText = props.question.questionText;
    const handler = props.onClick;
    const options = props.question.options;
    const answer = props.answer;
    const getCheckedState = (value, answer) => {
        return (value===answer) ? true : false; 
    }

    return (
        <div id="question-div-style">
            <p id="question-style">{qText}</p>
            <table>
                <tbody>
                    <tr><td><input type="radio" value="0" name="answer" onChange={() => props.onClick(0)} checked={getCheckedState(0, answer)}/> {options[0]} </td></tr>
                    <tr><td><input type="radio" value="1" name="answer" onChange={() => props.onClick(1)} checked={getCheckedState(1, answer)}/> {options[1]} </td></tr> 
                    <tr><td><input type="radio" value="2" name="answer" onChange={() => props.onClick(2)} checked={getCheckedState(2, answer)}/> {options[2]} </td></tr>
                    <tr><td><input type="radio" value="3" name="answer" onChange={() => props.onClick(3)} checked={getCheckedState(3, answer)}/> {options[3]} </td></tr>
                </tbody>
            </table>
        </div>
    );
}
    
export default QuestionComponent;