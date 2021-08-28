//Array that will contain in each slot either A or B, depending on which is the correct answer
const correctAnswers = ['A', 'A', 'A', 'A'];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", event => {
    //To prevent the default action which is to reload the webpage
    event.preventDefault();

    let score = 0;
    //Get the user answers
    //form.nameAtributeOfTheImputForm
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //Compare to the correct answers
    //Answer is the actual value that we iterate, index is the position in the array
    userAnswer.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += (100 / correctAnswers.length);
        }
    });
    //Show results on webpage
    scrollTo(0, 0);
    //result.querySelector("span").textContent = `${score}%`;
    result.classList.remove("d-none"); //Remove a class

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector("span").textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        }
        output++;
    }, 20);

});