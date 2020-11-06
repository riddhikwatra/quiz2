const questions=[
    {
        ques: "Which one of the following river flows between Vindhyan and Satpura ranges?",
        answers: [
            {
                option: "Narmada", answer: true
            },
            {
                option: "Mahanadi", answer: false
            },
            {
                option: "Son", answer: false
            },
            {
                option: "Netravati", answer: false
            } 
        ]
    },
    {
        ques: "How many weekdays in a week?",
        answers: [
            {
                option: "6 days", answer: false 
            },
            {
                option: "4 days", answer: false 
            },
            {
                option: "7 days", answer: false 
            },
            {
                option: "5 days", answer: true 
            },
        ]
    },
    {
        ques: "Which type of vegetable that Popeyes often uses as a last-minute device to give him formidable strength?",
        answers: [
            {
                option: "Broccoli", answer: false 
            },
            {
                option: "Spinach", answer: true 
            },
            {
                option: "Cabbage", answer: false 
            },
            {
                option: "Raddish", answer: false
            },
        ]
    },
    {
        ques: " The Powerpuff Girls are 3 distinct colors. What are they?",
        answers: [
            {
                option: "Red, yellow, green", answer: false 
            },
            {
                option: "Yellow, blue, green", answer: false 
            },
            {
                option: "Blue, green, red", answer: true
            },
            {
                option: "Green, purple, orange", answer: false
            },
        ]
    }

]
beginQuiz();
const submit_btn=document.getElementById("submit");
const quiz=document.getElementById("quiz");
submit_btn.addEventListener('click',submit);
function beginQuiz(){
totalQues=4;

var i;
for (i=0;i<totalQues;i++){
    document.getElementById("ques"+(i+1).toString()).innerHTML="<u>Ques"+(i+1).toString()+"</u> : "+questions[i].ques;
    var j;
    for(j=0;j<4;j++){
        document.getElementById("option"+(i+1).toString()+(j+1).toString()).innerHTML=questions[i].answers[j].option;
        //document.getElementById("opt"+(i+1).toString()+(j+1).toString()).value=questions[i].answers[j].answer;
        //document.write(document.getElementById("opt"+(i+1).toString()+(j+1).toString()).value);
    }
}
}
function submit(){
var score=0;
quiz.classList.add('hide');
end.classList.add('hide');

document.getElementById('body').style.height="100vh";
document.getElementById('container').style.height="80vh";
var elements=document.getElementsByTagName('input');

for(i=0;i<totalQues;i++){
    var name="answer"+(i+1).toString();
    var values=document.getElementsByName(name);

    for(j=0;j<4;j++){  
        if(questions[i].answers[j].answer){
            if(values[j].checked){
                score++;
            }
        }
    }
}
document.getElementById('score').innerHTML='Congratulations!!<br><br> You Scored '+score.toString()+'/4!!';
}