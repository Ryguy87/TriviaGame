$(document).ready(function () {
    // create variables and arrays to hold questions and answers
    var questionArray = ["What is the capital of China?", "what is the capital of Russia?", "Whats is the capital of Egypt?", "What is the capital of Ukraine?", "What is the Capital of Denmark?", "What is the capital of Norway?", "What is the capital of Croatia?", "What is the capital of Singapore?"];
    var answerArray = [
        ["Shanghai", "Shenzen", "Beijing", "X'ian"],
        ["Moscow", "Saint Petersburg", "Volgograd", "Nizhny Novgorod"],
        ["Alexandria", "Cairo", "Luxor", "Giza"],
        ["Odessa", "Donetsk", "Kharkiv", "Kiev"],
        ["Horsens", "Odense", "Copenhagen", "Aarhus"],
        ["Oslo", "Bergen", "Drammen", "Stavanger"],
        ["Pula", "Zadar", "Zagreb", "Split"],
        ["Jurong East", "Hougang", "Yishun", "Singapore"]
    ];
    var correctAnswers = ["Beijing", "Moscow", "Cairo", "Kiev", "Copenhagen", "Oslo", "Zagreb", "Singapore"];
    var timer = 30;
    var questionCounter = 0;
    var correctGuesses = 0;
    var incorrectGuesses = 0;
    var timedOutQuestions = 0;
    var answerTimer = 5000
    //Show game start screen
    function startGameButton() {
        var startGameBtn = $("<button>");
        //<button class='startButton'>Start Game</button>
        startGameBtn.text("Start Game").addClass("startButton");

        $(".mainSection").append(startGameBtn);
    }

    $(document).on("click", ".startButton", function () {
        gameQuestions();
    })

    startGameButton();

    function gameQuestions() {
        //hide image correct and incorrect
        $(".answerdiv, .question, .showIncorrect, .answerFlag, .showCorrect").hide("fast");
        //create paragrah
        var question = $("<p class='question'>")
        //adding text/ question
        question.text(questionArray[questionCounter])
        //hide start button
        $(".startButton").hide("fast");
        
        
        //show the first question in the question array
        $(".mainSection").append(question);


        //show multiple choice answers
        var answers = answerArray[questionCounter];
        console.log(answers)
        //create loop to loop through selected question
        for (var i = 0; i < answers.length; i++) {
        // variable creating a div and class where answers will show
            var answerDivs = $("<li class='answerdiv'>");
        // filling div with text of answer array
            answerDivs.text(answers[i]);
        //showing the answers in selected array to the main section div in html
            $(".mainSection").append(answerDivs);
        }
        }

        //click event for users guess
        $(document).on("click",".answerdiv", function() {
            //make variable holding what user clicks on
            var selectedAnswer = $(this).text();
            console.log(selectedAnswer)
            //if users selected answer is equal to correct answers array show correct! and Countries flag and add to question counter
            if (selectedAnswer === correctAnswers[questionCounter]) {
                //hide questions and answers
                $(".answerdiv, .question").hide("fast");
               
                

                var showCorrect = $("<p class='showCorrect'>");
                showCorrect.text("You are correct");
                var answerFlag = $("<img class='answerFlag'>");
                //<img scr=assets/images/Beijing.png>
                answerFlag.attr("src", "assets/images/" + selectedAnswer + ".png");
                //show correct and image
                $(".mainSection").append(showCorrect).append(answerFlag);
                //add to correct guesses
                correctGuesses++;
                  
                
                //wait for 5 seconds
                setTimeout(() => {
                    questionCounter++;
                    gameQuestions ();
                }, answerTimer);
                //go to next question
                
                
            }
            //if incorrect show incorrect and tell the right answer and add to question counter
            else {
                //hide answers
                $(".answerdiv, .question").hide("fast");
                

                var showIncorrect = $("<p class='showIncorrect'>");
                showIncorrect.html("Incorrect. <br> The correct answer is " + correctAnswers[questionCounter])
                $(".mainSection").append(showIncorrect);
                //add to incorrect guess
                incorrectGuesses++;
                //wait 5 seconds
                setTimeout(() => {
                    questionCounter++;
                    gameQuestions ();
                }, answerTimer);
                
            }
            
        });














});