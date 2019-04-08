'use strict';

class Question {
    static attrs = {
        text: '',
        answers: [],
        correctAnswer: '',
        userAnswer: ''
    };

    static sumbmitAnswer(answer){
        this.attrs.userAnswer = answer;
    }
    static answerStatus(userAnswer){
        let answerstate = 0;
        if (correctAnswer === userAnswer){
            answerstate = 1;
        }
        if (correctAnswer !== userAnswer){
            answerstate = -1;
        }
        return answerstate;
    }
}

class TriviaApi {

}

class Quiz {
    static attrs = {
        unasked: [],
        asked: [],
        score: 0,
        scoreHistory: [],
        active: false,
        progress: 0
    };

    static updateScoreHistory(score){
        this.attrs.scoreHistory.push(score);
    }

    static questionAttempt(){
        const currentQuestion = this.attrs.unasked[this.attrs.unasked.length -1];
        this.attrs.asked.push(currentQuestion);
        this.attrs.unasked.pop();
        this.attrs.progress += 1;

        const uAnswer = Question.attrs.userAnswer;
        const cAnswer = Question.attrs.correctAnswer;
        
        if (Question.answerStatus(uAnswer) === 1){
            console.log(`You did it. The correct answer is ${cAnswer}`);
        }
        if (Question.answerStatus(uAnswer) === -1){
            console.log(`${uAnswer} is the wrong answer. The correct answer is ${cAnswer}`);
        }

        
    }
}