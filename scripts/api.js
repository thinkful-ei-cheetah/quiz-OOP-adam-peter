/* eslint-disable indent */
'use strict';

const api = (function(){

    const BASE_URL = "https://opentdb.com/api.php?amount=10";

    function apiFetch(...args) {
        let error;
        return fetch(...args)
                .then(res => {
                    if (!res.ok){
                        error = {code: res.status};
                    }
                    return res.json();

                })
                .then(data => {
                    if (error) {
                        error.message = data.message;
                        return Promise.reject(error);
                    }
                    return data.results;
                });
    }

    function getQuestions() {
            return apiFetch(`${BASE_URL}`);
    }

    return {
        getQuestions,
    };
    
}());