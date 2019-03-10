$(document).ready(function () {
    let easyResults = [{ "category": "Entertainment: Comics", "type": "multiple", "difficulty": "easy", "question": "Who is Batman?", "correct_answer": "Bruce Wayne", "incorrect_answers": ["Clark Kent", "Barry Allen", "Tony Stark"] }, { "category": "Entertainment: Comics", "type": "multiple", "difficulty": "easy", "question": "Who is the creator of the comic series &quot;The Walking Dead&quot;?", "correct_answer": "Robert Kirkman", "incorrect_answers": ["Stan Lee", "Malcolm Wheeler-Nicholson", "Robert Crumb"] }, { "category": "Entertainment: Comics", "type": "multiple", "difficulty": "easy", "question": "This Marvel superhero is often called &quot;The man without fear&quot;.", "correct_answer": "Daredevil", "incorrect_answers": ["Thor", "Wolverine", "Hulk"] }, { "category": "Entertainment: Comics", "type": "multiple", "difficulty": "easy", "question": "Which universe crossover was introduced in the &quot;Sonic the Hedgehog&quot; comic issue #247?", "correct_answer": "Mega Man", "incorrect_answers": ["Super Mario Brothers", "Alex Kidd", "Super Monkey Ball"] }, { "category": "Entertainment: Comics", "type": "multiple", "difficulty": "easy", "question": "What is the alter-ego of the DC comics character &quot;Superman&quot;?", "correct_answer": "Clark Kent", "incorrect_answers": ["Bruce Wayne", "Arthur Curry", "John Jones"] }, { "category": "Entertainment: Comics", "type": "multiple", "difficulty": "easy", "question": "What is the full first name of the babysitter in Calvin and Hobbes?", "correct_answer": "Rosalyn", "incorrect_answers": ["Rose", "Ruby", "Rachel"] }, { "category": "Entertainment: Comics", "type": "multiple", "difficulty": "easy", "question": "The main six year old protagonist in Calvin and Hobbes is named after what theologian?", "correct_answer": "John Calvin", "incorrect_answers": ["Calvin Klein", "Calvin Coolidge", "Phillip Calvin McGraw"] }]
    let hardResults = [{ "category": "Entertainment: Comics", "type": "multiple", "difficulty": "hard", "question": "In the Batman comics, by what other name is the villain Dr. Jonathan Crane known?", "correct_answer": "Scarecrow", "incorrect_answers": ["Bane", "Calendar Man", "Clayface"] }, { "category": "Entertainment: Comics", "type": "multiple", "difficulty": "hard", "question": "In what Homestuck Update was [S] Game Over released?", "correct_answer": "October 25th, 2014", "incorrect_answers": ["April 13th, 2009", "April 8th, 2012", "August 28th, 2003"] }, { "category": "Entertainment: Comics", "type": "multiple", "difficulty": "hard", "question": "In the Homestuck Series, what is the alternate name for the Kingdom of Lights?", "correct_answer": "Prospit", "incorrect_answers": ["No Name", "Golden City", "Yellow Moon"] }, { "category": "Entertainment: Comics", "type": "multiple", "difficulty": "hard", "question": "What year was the first San Diego Comic-Con?", "correct_answer": "1970", "incorrect_answers": ["2000", "1990", "1985"] }, { "category": "Entertainment: Comics", "type": "multiple", "difficulty": "hard", "question": "When was the Garfield comic first published?", "correct_answer": "1978", "incorrect_answers": ["1982", "1973", "1988"] }, { "category": "Entertainment: Comics", "type": "multiple", "difficulty": "hard", "question": "What is the real hair colour of the mainstream comic book version (Earth-616) of Daredevil?", "correct_answer": "Blonde", "incorrect_answers": ["Auburn", "Brown", "Black"] }, { "category": "Entertainment: Comics", "type": "multiple", "difficulty": "hard", "question": "In what year did the first &quot;The Walking Dead&quot; comic come out?", "correct_answer": "2003", "incorrect_answers": ["2001", "2006", "1999"] }, { "category": "Entertainment: Comics", "type": "multiple", "difficulty": "hard", "question": "In the &quot;Archie&quot; comics, who was Jughead&#039;s first girlfriend?", "correct_answer": "Joani", "incorrect_answers": ["Ethel", "Debbi", "Margret"] }, { "category": "Entertainment: Comics", "type": "multiple", "difficulty": "hard", "question": "In the webcomic &quot;Ava&#039;s Demon&quot;, what sin is &quot;Nevy Nervine&quot; based off of? ", "correct_answer": "Envy ", "incorrect_answers": ["Sloth", "Wrath ", "Lust"] }, { "category": "Entertainment: Comics", "type": "multiple", "difficulty": "hard", "question": "When Batman trolls the online chat rooms, what alias does he use?", "correct_answer": "JonDoe297", "incorrect_answers": ["iAmBatman", "BWayne13", "BW1129"] }, { "category": "Entertainment: Comics", "type": "multiple", "difficulty": "hard", "question": "In 1978, Superman teamed up with what celebrity, to defeat an alien invasion?", "correct_answer": "Muhammad Ali", "incorrect_answers": ["Mike Tyson", "Sylvester Stallone", "Arnold Schwarzenegger"] }, { "category": "Entertainment: Comics", "type": "multiple", "difficulty": "hard", "question": "Which of the following rings from the DC Comics&#039; &quot;Lantern Corps&quot; are classified as Parasitic?", "correct_answer": "Indigo (Compassion)", "incorrect_answers": ["Green (Willpower)", "White (Life)", "Yellow (Fear)"] }]
    let mediumResults = [
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

    //short list for testing
    let testResults = [
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
    let results = [];
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
        // print loading next question message
        $("#clock").html("Loading " + (values.questionId + 1) + " of " + results.length + " <span class='spinner-border' role='status' aria-hidden='true'></span><span class='sr-only'>Loading...</span>");
    }

    // make a sound for successful answer
    function audioCorrect() {
        let audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "./assets/sounds/Successful-sound.mp3");
        audioElement.playbackRate = 3.0;
        audioElement.play();
    }

    // make a sound for incorrect or no answer
    function audioWrong() {
        let audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "./assets/sounds/Error-sound.mp3");
        audioElement.playbackRate = 1.5;
        audioElement.play();
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

    // sort answers
    function sortChoices(element) {
        // push correct and incorrect answers in array
        sortedArray = element.incorrect_answers.slice();
        sortedArray.push(element.correct_answer);
        // sort array to put them in alphabetical order
        sortedArray.sort();
        return sortedArray;
    }

    // print answer key
    function printCorrectAnswer() {
        $("#main").append("<br><h2>The correct answer was: <br><span class='green'>" + results[values.questionId].correct_answer + "</span></h2><br>");
    }

    //  out of time
    function outOfTime() {
        values.unanswered++;
        audioWrong();
        // print correct message
        $("#main").empty();
        printCorrectAnswer();
        // print image
        $("#main").append("<img src='./assets/images/tony-hurt.gif'>");
        // load next screen
        values.questionId++;
        stopTimer();
        nextScreen();
    }

    // process a correct choice
    function correctChoice() {
        values.correct++;
        audioCorrect();
        // print message
        $("#main").empty();
        $("#main").append("<hr><h2>Good Job, smartypants!</h2>");
        printCorrectAnswer();
        // print image
        $("#main").append("<img src='./assets/images/spider-bop.gif'>")
        // load next screen
        values.questionId++;
        stopTimer();
        nextScreen();
    }

    // process an incorrect choice
    function wrongChoice() {
        values.wrong++;
        audioWrong();
        // print message
        $("#main").empty();
        $("#main").append("<hr><h2>Whoops, wrong answer</h2>");
        printCorrectAnswer();
        // print image
        $("#main").append("<img src='./assets/images/tony-hurt.gif'>");
        // wait to load next question or load scorecard
        values.questionId++;
        stopTimer();
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
        // post the new game buttons again <button id="start">Start</button>
        $("#main").append("<hr><h2>Choose difficulty for new game<h2>")
        let newGame = $("<button type='button' id='easy' class='btn btn-primary'>Easy</button> <button type='button' id='medium' class='btn btn-success'>Medium</button> <button type='button' id='hard' class='btn btn-danger'>Hard</button>")
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
        let displayQuestion = $("<h2>" + element.question + "</h2><br><hr>");
        $("#main").append(displayQuestion);
        // sort multiple choice alphabetically
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
    $(document).on("touchstart click", "button", function () {
        // reset score incase it is a sequential game 
        values.correct = 0;
        values.wrong = 0;
        values.unanswered = 0;
        // decide question set based on button 
        if ($(this).attr("id") === "easy") {
            results = easyResults.slice();
            printQuestion(results[0]);
        } else if ($(this).attr("id") === "medium") {
            results = mediumResults.slice();
            printQuestion(results[0]);
        } else if ($(this).attr("id") === "hard") {
            results = hardResults.slice();
            printQuestion(results[0]);
        } else if ($(this).text() === "Easy") {
            results = easyResults.slice();
            printQuestion(results[0]);
        }
    })
});