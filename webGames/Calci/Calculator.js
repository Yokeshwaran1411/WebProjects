let display = document.getElementById("display");
let currentInput = "";


function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
}
function Delete(){
    let a = display.value;
    a = a.toString().slice(0,-1);
    currentInput = a;
    display.value = a;
}
function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = "Error";
    }
}
