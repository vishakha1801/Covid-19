const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const ansPara = document.getElementById("hello");


let questions=[
    
    {
        question : "Holding your breath for thirty seconds is a reliable self-test for Covid infection",
        choiceA :"True",
        choiceB :"False",
        correct:"B",
        ansPara:"It is not at all a reliable test. If you suspect a covid infection,  get yourself tested at a testing center."

    },
    {
        question :"You should not receive package deliveries during the lockdown.",
        choiceA :"True",
        choiceB :"False",
        correct:"B",
        ansPara:"Coronavirus cannot survive on surfaces exposed to multiple temperature and humidity conditions. Thus, properly sanitized packages are safe to receive."

    },
    {
        question :"You should get tested even if you are not showing any symptoms.",
        choiceA :"True",
        choiceB :"False",
        correct:"A",
        ansPara:"You should get tested if you have come in contact with someone who has recently been diagnosed with Covid, or if you have a travel history."

    },
    {
        question:"Once you get infected by coronavirus, you cannot get infected again in the future.",
        choiceA :"True",
        choiceB :"False",
        correct:"B",
        ansPara:" There is no controlled study to prove how long coronavirus antibodies exist in our system after an infection. Thus, there is a chance for you to get infected again if exposed to the virus."
    },
    {
        question:"It is safe for you to go out if you're wearing masks.",
        choiceA :"True",
        choiceB :"False",
        correct:"B",
        ansPara:" The pores in common masks are not small enough to stop a virus. Thus, the best precaution is to stay home and to wash hands as frequently as possible."
    },
    {
        question :"Drinking alcohol kills coronavirus.",
        choiceA :"True",
        choiceB :"False",
        correct:"B",
        ansPara:" Alcohol intake has no role in controlling a coronavirus infection. "

    },
    {
        question :"You can be infected with Covid and show no symptoms such as fever, cough, fatigue and tiredness, and difficulty in breathing.",
        choiceA :"True",
        choiceB :"False",
        correct:"A",
        ansPara:"You can be infected with covid and act as a carrier without showing any symptoms."

    },
    {
        question :"Exposing yourself to the sun can prevent coronavirus infections.",
        choiceA :"True",
        choiceB :"False",
        correct:"B",
        ansPara:"There is no evidence to suggest that sun rays have any role in controlling covid infections."

    },  {
        question :"Coronavirus can spread through meat. So, you should avoid eating chicken, eggs, or mutton.",
        choiceA :"True",
        choiceB :"False",
        correct:"B",
        ansPara:"There is no evidence to suggest this. Coronavirus spreads through surface contact and not through food. "

    },  {
        question :"Most covid patients recover and lead healthy lives.",
        choiceA :"True",
        choiceB :"False",
        correct:"A",
        ansPara:"The fatality rate for covid infections is very less, especially in India. Around 80% people recover without needing hospitalization or special treatments."

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
    runningQuestion = 0;
    score = 0;
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    
}
function renderProgress(){
    progress.innerHTML="";
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

function noneDisp()
{
    scoreDiv.style.display = "none";
}
function checkAnswer(answer){
    let q = questions[runningQuestion];
    if(answer==questions[runningQuestion].correct)
    {
        score++;
        //ansPara.innerHTML += "<p>"+ q.ansPara +"</p>";
        correctAns();
        //ansPara.innerHTML += "<p>"+ q.ansPara +"</p>";

    }
    else
    {
        //ansPara.innerHTML += "<p>"+ q.ansPara +"</p>";
        wrongAns();
        //ansPara.innerHTML += "<p>"+ q.ansPara +"</p>";
    }
    scoreDiv.addEventListener("click",noneDisp); 
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        //scoreDiv.style.display = "none";
        renderQuestion();
    }else {
        scoreRender();
        
    }
    
   
}

// answer is correct
function correctAns(){
    let q = questions[runningQuestion];
    document.getElementById(runningQuestion).style.backgroundColor = "green";
    scoreDiv.style.display = "block";
    scoreDiv.innerHTML = "Correct!</br></br>"+q.ansPara;
}
// answer is Wrong
function wrongAns(){
    let q = questions[runningQuestion];
    document.getElementById(runningQuestion).style.backgroundColor = "red";
    scoreDiv.style.display = "block";
    scoreDiv.innerHTML = "Wrong.</br>"+q.ansPara;
}


function scoreRender(){
    //scoreDiv.style.display = "none";
    scoreDiv.style.display = "block";
    const scorePerCent = Math.round(100 * score/questions.length);

    quiz.style.display = "none";
    start.style.display="block";
}
