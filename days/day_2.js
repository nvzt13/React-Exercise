
class Answer {
    constructor(answer){
        this.answer = answer
    }
}

const answer1 = new Answer( "React is a Javascript library")
const answer2 = new Answer("Library fremowork")




function displayAnswer(){
    const div = document.getElementById("div")
    div.textContent = answer1.answer
}