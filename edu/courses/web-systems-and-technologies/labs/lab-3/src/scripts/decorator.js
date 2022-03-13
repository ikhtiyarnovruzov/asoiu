function appendFormulaY() {
  var formulaYText = "y = \\sqrt{ax\\sin(2x)+e^{-2x}(x + b)}";
  var formulaYURL =
    "http://chart.apis.google.com/chart?cht=tx&chl=" +
    encodeURIComponent(formulaYText);
  var formulaYImg =
    '<img src="' + formulaYURL + '" alt="' + formulaYText + '"/>';
  document.writeln(formulaYImg + "<br>");
}

function appendFormulaW() {
  var formulaWText = "w = 1/y\\cos^2(x^2)-x/a^2+b^2";
  var formulaWURL =
    "http://chart.apis.google.com/chart?cht=tx&chl=" +
    encodeURIComponent(formulaWText);
  var formulaWImg =
    '<img src="' + formulaWURL + '" alt="' + formulaWText + '"/>';
  document.writeln(formulaWImg);
  document.writeln("<br>");
}

function decorateCallback() {
  document.mainForm.aArgBox.value = 0.5;
  document.mainForm.bArgBox.value = 3.1;
  document.mainForm.xArgBox.value = 1.4;
  document.mainForm.precisionValBox.value = 2;
  document.mainForm.precisionCheckBox.checked = true;
  document.mainForm.yOutBox.value = 0;
  document.mainForm.wOutBox.value = 0;
}
