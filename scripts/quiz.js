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
    constructor()  {
        this.BASE_URL = 'https://opentdb.com/api.php?amount=5';
        this.error = '';
    }

    static apiFetch() {
        fetch(this.BASE_URL)
        .then( res => {
            if(!res.ok){
                this.error = {code: res.status}
                return res.json();
            }
        })
        .then(data => {
            if(this.error){
                this.error.message = data.message
                return Promise.reject(`ERROR: ${this.error}`);
            }
            return data
        })
    }

    static getQuestions() {
        return this.apiFetch(`${this.BASE_URL}`);
}
}

class Quiz {
    static attrs = {
        unasked: [],
        asked: [],
        score: 0,
        scoreHistory: [],
        highScore: 0,
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
            this.attrs.score += 1;
            console.log(`You did it. The correct answer is ${cAnswer}`);
        }
        if (Question.answerStatus(uAnswer) === -1){
            console.log(`${uAnswer} is the wrong answer. The correct answer is ${cAnswer}`);
        }      
        
    }

    static quizSummary (score) {
        if (Math.max(this.attrs.scoreHistory) < score) {
            this.attrs.highScore = score;
            this.attrs.scoreHistory.push(score);
            console.log('New High Score')
            this.attrs.active = false;
        }
        this.attrs.active = false;
    }

    static quizStart() {
        api.getQuestions()
        .then (questions => {
        questions.forEach(question => store.addQuestion(question));

        this.attrs.active = true;
    })
    }
}