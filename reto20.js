let Numero1 = 2;
let Numero2 = 2;
const resultado = Numero1 + Numero2;
let pregunta = {
    p1: `Cuanto es ${Numero1} + ${Numero2}`
}

function Quizzer(){
    let userInput = prompt(pregunta.p1);
    if (userInput == resultado) {
        alert("Congratulations");
    }
    else {
        alert("Fail 😨");
    }
}
Quizzer();

