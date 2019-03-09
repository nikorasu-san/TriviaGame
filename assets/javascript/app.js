$(document).ready(function () {
    // api link - https://opentdb.com/api.php?amount=20&category=29&difficulty=medium&type=multiple
    /* let results = [
          {
              "category": "Entertainment: Comics",
              "type": "multiple",
              "difficulty": "medium",
              "question": "In Marvel Comics, Taurus is the founder and leader of which criminal organization?",
              "correct_answer": "Zodiac",
              "incorrect_answers": [
                  "Scorpio",
                  "Tiger Mafia",
                  "The Union"
              ]
          },
          {
              "category": "Entertainment: Comics",
              "type": "multiple",
              "difficulty": "medium",
              "question": "What was the name of the first Robin in the Batman comics?",
              "correct_answer": "Dick Grayson",
              "incorrect_answers": [
                  "Bruce Wayne",
                  "Jason Todd",
                  "Tim Drake"
              ]
          },
          {
              "category": "Entertainment: Comics",
              "type": "multiple",
              "difficulty": "medium",
              "question": "What is the name of the comic about a young boy, and a tiger who is actually a stuffed animal?",
              "correct_answer": "Calvin and Hobbes",
              "incorrect_answers": [
                  "Winnie the Pooh",
                  "Albert and Pogo",
                  "Peanuts"
              ]
          },
          {
              "category": "Entertainment: Comics",
              "type": "multiple",
              "difficulty": "medium",
              "question": "What is the name of the main character in the webcomic Gunnerkrigg Court by Tom Siddell?",
              "correct_answer": "Antimony",
              "incorrect_answers": [
                  "Bismuth",
                  "Mercury",
                  "Cobalt"
              ]
          },
          {
              "category": "Entertainment: Comics",
              "type": "multiple",
              "difficulty": "medium",
              "question": "Which of the following superheros did Wonder Woman NOT have a love interest in?",
              "correct_answer": "Green Arrow",
              "incorrect_answers": [
                  "Superman",
                  "Batman",
                  "Steve Trevor"
              ]
          },
          {
              "category": "Entertainment: Comics",
              "type": "multiple",
              "difficulty": "medium",
              "question": "In Pre-Super Genesis universe of &quot;Sonic the Hedgehog&quot; comic, what was the name of  Sally Acorn&#039;s brother?",
              "correct_answer": "Elias Acorn",
              "incorrect_answers": [
                  "Maximillian Acorn",
                  "Alexis Acorn",
                  "Frederick Acorn"
              ]
          },
          {
              "category": "Entertainment: Comics",
              "type": "multiple",
              "difficulty": "medium",
              "question": "Which issue of the &quot;Sonic the Hedgehog&quot; comic did Scourge the Hedgehog make his first appearance?",
              "correct_answer": "Sonic the Hedgehog #11",
              "incorrect_answers": [
                  "Sonic Universe #32",
                  "Sonic the Hedgehog #161",
                  "Sonic the Hedgehog #47"
              ]
          },
          {
              "category": "Entertainment: Comics",
              "type": "multiple",
              "difficulty": "medium",
              "question": "In &quot;Sonic the Hedgehog&quot; comic, who was the creator of Roboticizer? ",
              "correct_answer": "Professor Charles the Hedgehog",
              "incorrect_answers": [
                  "Julian Robotnik",
                  "Ivo Robotnik",
                  "Snively Robotnik"
              ]
          },
          {
              "category": "Entertainment: Comics",
              "type": "multiple",
              "difficulty": "medium",
              "question": "Who wrote the Batman comic series &quot;The Killing Joke&quot;?",
              "correct_answer": "Alan Moore",
              "incorrect_answers": [
                  "Bill Finger",
                  "Frank Miller",
                  "Jerry Siegel"
              ]
          },
          {
              "category": "Entertainment: Comics",
              "type": "multiple",
              "difficulty": "medium",
              "question": "Who authored The Adventures of Tintin?",
              "correct_answer": "Herg&eacute;",
              "incorrect_answers": [
                  "E.P. Jacobs",
                  "Rin Tin Tin",
                  "Chic Young"
              ]
          },
          {
              "category": "Entertainment: Comics",
              "type": "multiple",
              "difficulty": "medium",
              "question": "What is the designation given to the Marvel Cinematic Universe?",
              "correct_answer": "Earth-199999",
              "incorrect_answers": [
                  "Earth-616",
                  "Earth-10005",
                  "Earth-2008"
              ]
          },
          {
              "category": "Entertainment: Comics",
              "type": "multiple",
              "difficulty": "medium",
              "question": "In the comics, which Sonic character took command of the Dark Legion after Luger&#039;s assassination?",
              "correct_answer": "Lien-Da",
              "incorrect_answers": [
                  "Kragok",
                  "Dimitri",
                  "Remington"
              ]
          },
          {
              "category": "Entertainment: Comics",
              "type": "multiple",
              "difficulty": "medium",
              "question": "Which &quot;Green Arrow&quot; sidekick commonly wears a baseball cap?",
              "correct_answer": "Roy Harper",
              "incorrect_answers": [
                  "Black Canary",
                  "Emiko Queen",
                  "Dick Grayson"
              ]
          },
          {
              "category": "Entertainment: Comics",
              "type": "multiple",
              "difficulty": "medium",
              "question": "Which Batman sidekick is the son of Talia al Ghul?",
              "correct_answer": "Damian Wayne",
              "incorrect_answers": [
                  "Dick Grayson",
                  "Tim Drake",
                  "Jason Todd"
              ]
          },
          {
              "category": "Entertainment: Comics",
              "type": "multiple",
              "difficulty": "medium",
              "question": "In the DC Comics 2016 reboot, Rebirth, which speedster escaped from the Speed Force after he had been erased from existance?",
              "correct_answer": "Wally West",
              "incorrect_answers": [
                  "Johnny Quick",
                  "Jay Garrick",
                  "Eobard Thawne"
              ]
          },
          {
              "category": "Entertainment: Comics",
              "type": "multiple",
              "difficulty": "medium",
              "question": "In Calvin and Hobbes, what is the name of the babysitter&#039;s boyfriend?",
              "correct_answer": "Charlie",
              "incorrect_answers": [
                  "Dave",
                  "Charles",
                  "Nathaniel"
              ]
          },
          {
              "category": "Entertainment: Comics",
              "type": "multiple",
              "difficulty": "medium",
              "question": "The stuffed tiger in Calvin and Hobbes is named after what philosopher?",
              "correct_answer": "Thomas Hobbes",
              "incorrect_answers": [
                  "David Hobbes",
                  "John Hobbes",
                  "Nathaniel Hobbes"
              ]
          },
          {
              "category": "Entertainment: Comics",
              "type": "multiple",
              "difficulty": "medium",
              "question": "In Calvin and Hobbes, what is the name of Susie&#039;s stuffed rabbit?",
              "correct_answer": "Mr. Bun",
              "incorrect_answers": [
                  "Mr. Bunbun",
                  "Mr. Rabbit",
                  "Mr. Hoppy"
              ]
          },
          {
              "category": "Entertainment: Comics",
              "type": "multiple",
              "difficulty": "medium",
              "question": "In Calvin and Hobbes, what is the name of the principal at Calvin&#039;s school?",
              "correct_answer": "Mr. Spittle",
              "incorrect_answers": [
                  "Mr. Boreman",
                  "Mr. Spitling",
                  "Mr. Moe"
              ]
          },
          {
              "category": "Entertainment: Comics",
              "type": "multiple",
              "difficulty": "medium",
              "question": "Who was the inspiration for Cuthbert Calculus in the Tintin series?",
              "correct_answer": "Auguste Picard",
              "incorrect_answers": [
                  "Jacques Piccard",
                  "Will Morris",
                  "J. Cecil Maby"
              ]
          }
      ]
  */

    //short list for testing
    let results = [
        {
            "category": "Entertainment: Comics",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In Marvel Comics, Taurus is the founder and leader of which criminal organization?",
            "correct_answer": "Zodiac",
            "incorrect_answers": [
                "Scorpio",
                "Tiger Mafia",
                "The Union"
            ]
        },
        {
            "category": "Entertainment: Comics",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What was the name of the first Robin in the Batman comics?",
            "correct_answer": "Dick Grayson",
            "incorrect_answers": [
                "Bruce Wayne",
                "Jason Todd",
                "Tim Drake"
            ]
        },
        {
            "category": "Entertainment: Comics",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What is the name of the comic about a young boy, and a tiger who is actually a stuffed animal?",
            "correct_answer": "Calvin and Hobbes",
            "incorrect_answers": [
                "Winnie the Pooh",
                "Albert and Pogo",
                "Peanuts"
            ]
        }]

    let values = {
        correct: 0,
        wrong: 0,
        unanswered: 0,
        timer: 10,
        questionId: 0,
        grade: function () {
            let sub = (this.correct / results.length) * 100;
            return sub.toFixed(1)
        }
    }
    let sortedArray = [];
    let firstQuestion = results[0]
    //let nextQuestion = printQuestion(currentQuestion)
    let start;

    // --- Functions --- 

    // reset timer function
    function resetTimer() {
        values.timer = 10;
    }

    // decrement timer
    function decrement() {
        values.timer--;
        if (values.timer === 0) {
            outOfTime();
        } else {
            $("#clock").html(values.timer + " seconds remaining")
        }
    }

    // start timer
    function startTimer() {
        // print initial time and countdown
        $("#clock").html(values.timer + " seconds remaining");
        start = setInterval(decrement, 1000)
    }

    // stop timer
    function stopTimer() {
        clearInterval(start);
        $("#clock").html("Loading <span class='spinner-border' role='status' aria-hidden='true'></span><span class='sr-only'>Loading...</span>");
    }

    //  next screen
    function nextScreen() {
        if (values.questionId < results.length) {
            setTimeout(function () {
                printQuestion(results[values.questionId])
            }, 3000);
        } else {
            scorecard();
        }
    }

    //  out of time
    function outOfTime() {
        values.unanswered++;
        stopTimer();
        // print clock message
        // $("#clock").html("Oh no! You ran out of time!");
        // print correct message
        $("#main").empty();
        printCorrectAnswer();
        audioWrong();
        // print image
        $("#main").append("<img src='./assets/images/tony-hurt.gif'>");
        // load next screen
        values.questionId++;
        nextScreen();
    }

    // Make a sound for successful answer
    function audioCorrect() {
        let audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "./assets/sounds/Successful-sound.mp3");
        audioElement.playbackRate = 3.0;
        audioElement.play();
    }

    // Make a sound for incorrect answer
    function audioWrong() {
        let audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "./assets/sounds/Error-sound.mp3");
        audioElement.playbackRate = 1.5;
        audioElement.play();
    }

    // sort answers
    function sortChoices(element) {
        // push correct and incorrect answers in array
        sortedArray = element.incorrect_answers.slice();
        sortedArray.push(element.correct_answer);
        // sort array to put them in alphabetical order
        sortedArray.sort();
        console.log("in function: ", sortedArray)
        return sortedArray;
    }

    // print answer key
    function printCorrectAnswer() {
        $("#main").append("<br><h2>The correct answer was: <br><span class='green'>" + results[values.questionId].correct_answer + "</span></h2><br>");
    }

    // process a correct choice
    function correctChoice() {
        values.correct++;
        stopTimer();
        $("#main").empty();
        audioCorrect();
        // print message
        $("#main").append("<hr><h2>Good Job, smartypants!</h2>");
        printCorrectAnswer();
        // print image
        $("#main").append("<img src='./assets/images/spider-bop.gif'>")
        // load next screen
        values.questionId++;
        nextScreen();
    }

    // process an incorrect choice
    function wrongChoice() {
        values.wrong++;
        stopTimer();
        $("#main").empty();
        audioWrong();
        // print message
        $("#main").append("<hr><h2>Whoops, wrong answer</h2>");
        printCorrectAnswer();
        // print image
        $("#main").append("<img src='./assets/images/tony-hurt.gif'>");
        // wait to load next question or load scorecard
        values.questionId++;
        nextScreen();
    }

    // Print scorecard 
    function scorecard() {
        // empty content
        $("#main").empty();
        $("#clock").html(" ");
        // print messages and score
        $("#main").append("<br><h2>You completed the game</h2><hr>");
        let printValCorrect = $('<h2>');
        printValCorrect.text("Correct: " + values.correct);
        let printValWrong = $('<h2>');
        printValWrong.text("Incorrect: " + values.wrong);
        let printValUnanswered = $('<h2>');
        printValUnanswered.text("Unanswered: " + values.unanswered);
        let printGrade = $('<h2>');
        printGrade.text("Grade: " + values.grade() + "%");
        $('#main').append(printValCorrect, printValWrong, printValUnanswered, printGrade);
        // post the start button again <button id="start">Start</button>
        let newGame = $("<button id='start' class='btn btn-success'>")
        $(newGame).text("Start New Game")
        $("#main").append(newGame)
        // print image
        if (values.correct < 19) {
            $("#main").append("<br><br><img src='./assets/images/nick-side-eye.gif'>");
        } else {
            $("#main").append("<br><br><a href='https://open.spotify.com/album/47LpgGVshd0tbFSbm9tTLb'><img src='./assets/images/sv-song.gif'></a>");
        }
        // reset questionsId to allow button to work
        values.questionId = 0
    }

    // Print question
    function printQuestion(element) {
        // empty section
        $("#main").empty();
        // start timer
        resetTimer();
        startTimer();
        // isolate and print actual question
        let displayQuestion = $("<hr><h2>" + element.question + "</h2><br><hr>");
        $("#main").append(displayQuestion);
        // sort multiple choice alphabetically
        console.log("before sort is called in print function:", sortedArray)
        console.log("element before pushed to sort function:", element)
        sortChoices(element);
        for (let i = 0; i < sortedArray.length; i++) {
            let displayChoice = $("<h2 class='answers' id='choice-" + i + "'>" + sortedArray[i] + "</h2>");
            $("#main").append(displayChoice);
        }
        // listen for clicks on answers
        $(".answers").on("click", function () {
            // check if answer is right
            if ($(this).text() === element.correct_answer) {
                console.log("correct")
                // show message
                correctChoice();
            } else {
                console.log("incorrect")
                // show message
                wrongChoice();
            }
        });
    }


    // ---- main app ---- 
    $(document).on("click", "#start", function () {

        //reset score incase it is a sequential game 
        values.correct = 0;
        values.wrong = 0;
        values.unanswered = 0;


        //  if (values.questionId < results.length) {

        printQuestion(firstQuestion);



        //console.log(" log post function:", sortedArray)
        // } else {
        // print scorecard

        //  }

    })
});