const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");


let questions=[
    
    {
        question : "Do you have fever/cough/tiredness/difficulty in breathing?",
        choiceA :"Yes",
        choiceB :"No",
        correct:"A"

    },
    {
        question : "Have you travelled outside India and came back during the pandemic of COVID-19?",
        choiceA :"Yes",
        choiceB :"No",
        correct:"A"

    },
    {
        question : "Have you travelled anywhere in India in the last 45 days?",
        choiceA :"Yes",
        choiceB :"No",
        correct:"A"

    },
    {
        question: "Any personal or family history of Postive COVID-19 or Quarantine?",
        choiceA :"Yes",
        choiceB :"No",
        correct:"A"
    },
    {
        question:"Any history of known case of Positive COVID-19 or Quarantine patient in you neighbourhood/Society?",
        choiceA :"Yes",
        choiceB :"No",
        correct:"A"
    },
    {
        question:"Are you suffering from any of the following diseases? Diabetes/Hypertension/Lung disease/Heart disease/or are above 60 years of age?",
        choiceA :"Yes",
        choiceB :"No",
        correct:"A"
    },
  
    

];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0;
function renderQuestion(){
    let q = questions[runningQuestion];
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
}

start.addEventListener("click",startQuiz);


function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    
}
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

let red=0;
let orange=0;

function checkAnswer(answer){
    if((runningQuestion==0||runningQuestion==1)&&(answer==questions[runningQuestion].correct))
    {
        red++;
        answered();
    }
    else
    {
        if( answer == questions[runningQuestion].correct){
            orange++;
            answered();
        }else{
        answered();
    }
   } 
   
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        scoreRender();
    }
}

function answered(){
    document.getElementById(runningQuestion).style.backgroundColor = "#605f74";
}

function scoreRender(){
    scoreDiv.style.display = "block";
    let result = "safe";
    if(red>0)
    {
        result="Category Red.";
    }
    else if(orange>=2)
    {
        result="Category Red.";
    }
    else
    {
        result="Category Green.";
    }
    //let img = (result=="safe") ? "smiling.png" :"sad.png";
    
    //scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ result +"</p>";
}
