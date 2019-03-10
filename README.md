# TriviaGame
Objective: Create a Trivia game using JavaScript for the logic and jQuery to manipulate HTML.

## Overview
This is trivia game specializing in comic book related questions. As a fan of geek culture, I had to make a comic book trivia game at some point in my life. So no time like the present!

## Instructions
1. Choose a difficulty setting for the trivia questions (easy, medium, hard)
2. Choose the correct answer from the 4 multiple choice options before time runs out.
3. Once all questions have been asked your final score will be revealed and prompt difficulty options to start a new game.

## Tech used & Shout-Outs
* This project is uses Bootstraps 4.3 & JQuery 3.3
* Sounds sourced from http://www.orangefreesounds.com. 
* The questions were sourced from Open Trivia Database (http:///opentdb.com)
* The background image was sourced from http://www.freepik.com and credited (as requested) on the live site.

## Future Recommendations
* Consider a new API that is a better fit for this theme or become a member of Open Trivia Database to help with the freshness for the Comic book category questions.
* Consider a feature to randomize the order of questions.
* Consider making sure each difficulty option has the same quantity of questions.
* Before project due date, I couldn't resolve an issue preventing mobile devices from being able to click the start game buttons. I reviewed tips on Stack Overflow to add in a cursor: pointer property to the CSS, but "touchclick" and "click" jQuery events are being ignored on my mobile device. I believe this issue could be tied to my use of Boostraps CDN in some way. The site was working on my mobile device during earlier phases of the site.