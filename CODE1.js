/**
 *   @author Page, Marshall (mpage@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Project4 :: created: 10.27.2018
 *   @todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let numMovieReviews;
let rating = [];

/**
 * @method
 * @desc The dispatch method for our program
 * @returns {null}
 */
function main() {
    setContinueResponse();
    while (continueResponse === 1){
        setNumMovieReviews();
        populateRating();
        setContinueResponse();
    }
    printNumMovieReviews();
    printGoodbye();
}

main();

/**
 * @method
 * @desc continueResponse mutator
 * @returns {null}
 */
function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

/**
 * @method
 * @desc numStudents mutator
 * @returns {null}
 */
function setNumMovieReviews () {
    const MIN_REVIEWS = 1, MAX_REVIEWS = 50;
    while (! numMovieReviews || numMovieReviews < MIN_REVIEWS || numMovieReviews > MAX_REVIEWS) {
        numMovieReviews = Number(PROMPT.question(`Please enter number of movies you would like to review: `));
        if (isNaN(parseInt(numMovieReviews)) || numMovieReviews < MIN_REVIEWS || numMovieReviews > MAX_REVIEWS) {
            console.log(`You have entered an incorrect value. Please try again.`);
        }
    }
}

/**
 * @method
 * @desc students MD array mutator
 * @returns {null}
 */
function populateRating() {
    const MIN_STARS = 1, MAX_STARS = 5;
    for (let i = 0; i < numMovieReviews; i++) {
        rating[i] = [];
        console.log(`\nRating ${i + 1}:`);
        while (! rating[i][0] || !/^[a-zA-Z -]{1,30}$/.test(rating[i][0])) {
            rating[i][0] = PROMPT.question(`Please enter movie name: `);
            if (! /^[a-zA-Z -]{1,30}$/.test(rating[i][0])) {
                console.log(`${rating[i][0]} is invalid. Please try again.`);
            }
        }
        while (! rating[i][1] || rating[i][1] < MIN_STARS || rating[i][1] > MAX_STARS) {
            rating[i][1] = PROMPT.question(`Please enter rating (1-5): `);
            if (rating[i][1] < MIN_STARS || rating[i][1] > MAX_STARS) {
                console.log(`${rating[i][1]} is invalid. Please try again.`);
            }
        }
    }
}



function printNumMovieReviews() {
        console.log(`${rating}`)
    }


     /**

     * @method
     * @desc Print goodbye utility method
     * @returns {null}
     */
    function printGoodbye() {
        console.log(`\tGoodbye.`)
}


/*
 Movie Kiosk:  Write the code to run a kiosk at a movie theater. Program should loop infinitely to allow users to either see average rating of previous user entries, or enter their own review.

Requirements:

Should store movie title, current user rating, total rating, and number of ratings
Should display a list of movies for user to review or option to review a new one
Should allow user to select a movie to see average rating
Should allow sorting of highest to lowest rated movies
 */