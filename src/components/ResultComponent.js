import React from "react";

const ResultComponent = (props) => {
    var rightCount = 0;
    var wrongCount = 0;

    const getRightAnswersCount = (answers, questions) => {
        for(let i=0; i<answers.length; i++) {
            if(answers[i] === questions[i].answer) {
                ++rightCount;
            } else {
                ++wrongCount;
            }
        }


    }

    getRightAnswersCount(props.answers, props.questions);

    return(
        <div>
            <p class="p-style result-title">Result</p>
            <p class="p-style right-ans-style"> Right answers : {rightCount}</p>
            <p class="p-style wrong-ans-style"> Wrong answers : {wrongCount}</p>
        </div>
    );
};

export default ResultComponent;