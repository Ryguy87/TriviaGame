$(document).ready(function() {
// create variables and arrays to hold questions and answers
 var questionArray = ["What is the capital of China?", "what is the capital of Russia?", "Whats is the capital of Egypt?", "What is the capital of Ukraine?", "What is the Capital of Denmark?", "What is the capital of Norway?", "What is the capital of Croatia?", "What is the capital of Singapore?"];
 var answerArray = [["Shanghai", "Shenzen", "Beijing", "X'ian"], ["Moscow", "Saint Petersburg", "Volgograd", "Nizhny Novgorod"], ["Alexandria", "Cairo", "Luxor", "Giza"], ["Odessa", "Donetsk", "Kharkiv", "Kiev"], ["Horsens", "Odense", "Copenhagen", "Aarhus"], ["Oslo", "Bergen", "Drammen", "Stavanger"], ["Pula", "Zadar", "Zagreb", "Split"], ["Jurong East", "Hougang", "Yishun", "Singapore"]];
 var correctAnswers = ["C. Beijing", "A. Moscow", "B. Cairo", "D. Kiev", "C. Copenhagen", "A. Oslo", "C. Zagreb", "D. Singapore"];
 var timer = 30;  
 var questionCounter = 0

 //Show game start screen
 function startGameButton() {
    var startGameBtn = $("<button>");
    //<button class='startButton'>Start Game</button>
    startGameBtn.text("Start Game").addClass("startButton");
    
    $(".mainSection").append(startGameBtn); 
 }

$(document).on("click",".startButton", function()
{
    gameQuestions();  
}) 

 startGameButton();

 function gameQuestions() {
     var question = $("<p>")
     question.text(questionArray[questionCounter])
     //show the first question in the question array
     $(".mainSection").append(question);

 }















});