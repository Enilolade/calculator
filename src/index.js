function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  const buttons = document.querySelectorAll(".toggle-btn button");
  buttons.forEach((btn) => {
    btn.classList.toggle(
      "opacity-100",
      btn.classList.contains(theme + "-theme")
    );
    btn.classList.toggle(
      "opacity-10",
      !btn.classList.contains(theme + "-theme")
    );
  });
}

const display = document.getElementById("display");
const keys = document.querySelectorAll(".number-operator-grid p");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    const value = key.textContent.trim();

    if (value === "del") {
      display.value = display.value.slice(0, -1);
    } else if (value === "reset") {
      display.value = "0";
    } else if (value === "=") {
      try {
        const rawResult = eval(display.value.replace(/x/g, "*"));
        const rounded = Number.isInteger(rawResult)
          ? rawResult
          : parseFloat(rawResult.toFixed(4));

        // Format with commas
        display.value = rounded;
      } catch {
        display.value = "Error";
      }
    } else {
      const operators = ["+", "-", "x", "/", "*"];

      // If display is 0 and user presses a number (not operator or dot), replace the 0
      if (
        display.value === "0" &&
        !operators.includes(value) &&
        value !== "."
      ) {
        display.value = value;
      } else {
        display.value += operators.includes(value) ? ` ${value} ` : value;
      }
    }
  });
});
