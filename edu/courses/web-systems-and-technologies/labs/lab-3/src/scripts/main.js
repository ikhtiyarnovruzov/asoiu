function round(val, precision) {
  return val.toPrecision(precision);
}

function calculate(a, b, x) {
  let y = Math.sqrt(
    a * x * Math.sin(2 * x) + Math.pow(Math.E, -2 * x) * (x + b)
  );
  let w =
    (1 / y) * Math.pow(Math.cos(x), 2) - x / Math.pow(a, 2) + Math.pow(b, 2);
  return { y, w };
}

function calculateUIFunc() {
  let precision = document.mainForm.precisionValBox.value;
  let a = Number(document.mainForm.aArgBox.value);
  let b = Number(document.mainForm.bArgBox.value);
  let x = Number(document.mainForm.xArgBox.value);

  let result = calculate(a, b, x);
  let yOut = result.y;
  let wOut = result.w;

  if (document.mainForm.precisionCheckBox.checked) {
    try {
      yOut = round(yOut, precision);
      wOut = round(wOut, precision);
    } catch (error) {
      alert(error.message + "\nPlease, enter within the range 0 - 100.");
    }
  }

  document.mainForm.yOutBox.value = yOut;
  document.mainForm.wOutBox.value = wOut;
}
