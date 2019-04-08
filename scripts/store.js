/* eslint-disable indent */
'use strict';

const store = (function(){

    const quiz = {
        unasked : [],
        asked : [],
        score : 0,
        scoreHistory : [],
        active: false,

    };

    const questions = [];



    function addQuestion(question) {
        this.questions.push(question);
    }

    return {
        quiz,
        questions,
        addQuestion,
    };
    }());