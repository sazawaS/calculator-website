const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+"];
let output = "";


const calculate = (btnValue) => {
  display.focus();


  if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    
    output = display.value.toString().slice(0, -1);
  } else if (btnValue !== "=") {
    
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }

  if (btnValue === "=" && output !== "") {
    toEval = display.value;
    toEval.replace("%","100")
    output = eval(toEval);
  }

  display.value = output;
};


buttons.forEach((button) => {
 button.addEventListener("click", function(e) {
  calculate(e.target.dataset.value);
 });
});

document.addEventListener('keydown', function(event) {

  if(event.key == "Enter") calculate("=");
});
