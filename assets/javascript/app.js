$(document).ready(function () {
    // api link - https://opentdb.com/api.php?amount=20&category=29&difficulty=medium&type=multiple
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
    let values = {
        correct: 0,
        wrong: 0,
        unanswered: 0,
        timer: 25,
        questionId: 0,
    }
    let sortedArray = [];
    let currentQuestion = results[values.questionId]


    // Functions

    // --- reset timer function
    function resetTimer() {
        values.timer = 25;
    }

    // sort answers
    function sortChoices(element) {
        // push correct and incorrect answers in array
        sortedArray = element.incorrect_answers;
        sortedArray.push(element.correct_answer);
        // sort array to put them in alphabetical order
        sortedArray.sort();
        console.log("in function: ", sortedArray)
        return sortedArray;
    }
    //sortChoices(results[0])
    //console.log(sortChoices[1])


    // Print question
    function printQuestion(element) {
        //empty section
        $("#main").empty();
        // isolate and print actual question
        let displayQuestion = $("<h2>" + element.question + "</h2><br>");
        $("#main").append(displayQuestion);
        // sort multiple choice alphabetically
        sortChoices(element)
        for (let i = 0; i < sortedArray.length; i++) {
            let displayChoice = $("<h2 class='answers'>" + sortedArray[i] + "</h2><br>");
            $("#main").append(displayChoice);
        }
        //$(displayQuestion)
    }


    // ---- main app ---- 
    $("#start").on("click", function () {
        printQuestion(currentQuestion);
        //console.log(" log post function:", sortedArray)

    })
});