const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
const vars = ["x", "y"];
let output = "";


const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {

    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "graph") {
    const equation = output;
    let tempValX = 0;
    let tempValY = 0;
    for (let i = -5; i <= 5; i++) {
      for (let j = -5; j <= 5; j++) {
        tempValX = ((equation.replace("x", i)).replace("==", "")).replace("y", "");
        tempValY = ((equation.replace("y", j)).replace("==", "")).replace("x", "");
        console.log(`Value for x=${tempValX} and y=${tempValY}`);
      }
    }
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {

    output = output.toString().slice(0, -1);
  } else {

    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};


buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
