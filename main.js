const calInput = document.getElementById("calInput");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent; 
    if (value.trim().toUpperCase() === "C") {
      calInput.value = ""; 
    }else if (value === "⌫") {
      calInput.value = calInput.value.slice(0, -1);
    } else if (value === "=") {
      try {
        calInput.value = eval(calInput.value); 
      } catch {
        calInput.value = "Error"; 
      }
    } else {
      calInput.value += value; 
    }
  });
});
