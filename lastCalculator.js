let screenDisplay = document.getElementById("display");
function screen(number) {
  screenDisplay.value += number;
}
function turnOn() {
  screenDisplay.value = "";
}
function del() {
  screenDisplay.value = screenDisplay.value.slice(0, -1);
}
function square() {
  screenDisplay.value = Math.sqrt(screenDisplay.value);
}
function brackets(brac) {
  screenDisplay.value += brac;
}
function equal() {
  try {
    screenDisplay.value = eval(screenDisplay.value);
  } catch {
    screenDisplay.value = "error";
  }
}
