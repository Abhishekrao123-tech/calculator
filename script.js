let display = document.getElementById("display");

// Add click listeners to all buttons
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.getAttribute("data-value");

    if (value) {
      display.value += value;
    }
  });
});

// Clear button
document.getElementById("clear").addEventListener("click", () => {
  display.value = "";
});

// Equal button
document.getElementById("equal").addEventListener("click", () => {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
});

// Keyboard input support
document.addEventListener("keydown", (e) => {
  if ("0123456789+-*/.".includes(e.key)) {
    display.value += e.key;
  } else if (e.key === "Enter") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  } else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (e.key === "Escape") {
    display.value = "";
  }
});
