/* eslint-disable indent */
'use strict';

function main() {
    api.getQuestions()
    .then (questions => {
        questions.forEach(question => store.addQuestion(question));
    })
    console.log(store.questions);
}

$(main);