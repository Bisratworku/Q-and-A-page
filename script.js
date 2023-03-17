const buttion  = document.querySelector(".buttion") 
let question = document.getElementById("question")
let answer = document.getElementById("answer")
let number = document.querySelectorAll(".number")
const click = document.getElementById("click")
const questionAnswers = [
    {q:"What was the first Marvel movie ever made?",
     a:/Iron Man/ig},
     {q:"How many years was Steve Rogers trapped under the ice?",
     a:/66/ig},
     {q:"Which MCU regular was not in Captain America: Civil War?",
     a:/Nick Fury/ig},
     {q:"What video game does Thor get addicted to in Avengers: Endgame?",
     a:/Fortnite/ig},
     {q:"What is the name of the call sign Carol Danvers and Maria use in Captain Marvel?",
     a:/Photon/ig},
]
let count = 0;
let color = -2;
answer.value = ""
buttion.addEventListener("click", function(){
    if(color > number.length - 1){
        return 0;
    }
    color++
    if(questionAnswers[count].a.test(answer.value) == true){
        number[color].classList.add("right")
        if(count > questionAnswers.length-2){
            question.innerText = "Good Job"
            return 0
        }
        count++
    }
    question.innerText = questionAnswers[count].q
    answer.value = ""
    click.innerText = "Chick Answer"
})

