let numOne = document.querySelector(".numOne");
let numTwo = document.querySelector(".numTwo");

let clear = document.querySelector(".clear");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let multiply = document.querySelector(".multiply");
let divide = document.querySelector(".divide");
let resultat = document.getElementById("resultat");

clear.addEventListener("click", clearScreen);
function clearScreen() {
    numOne.value = "";
    numTwo.value = "";
    resultat.innerHTML = "";
};

function getInputValues() {
    let value1 = parseInt(numOne.value);
    let value2 = parseInt(numTwo.value);
    return [value1, value2];

};

plus.addEventListener("click", addition);
function addition() {
    let values = getInputValues();
    resultat.innerHTML = values[0] + values[1];
};

minus.addEventListener("click", subtraction);
function subtraction() {
    let values = getInputValues();
    resultat.innerHTML = values[0] - values[1];
};
multiply.addEventListener("click", multiplication);
function multiplication() {
    let values = getInputValues();
    resultat.innerHTML = values[0] * values[1];
};
divide.addEventListener("click", division);
function division() {
    let values = getInputValues();
    if (values[1] == 0) {
        resultat.innerHTML = "cannot be divided by 0";
    } else {
    resultat.innerHTML = values[0] / values[1];
    }
};
