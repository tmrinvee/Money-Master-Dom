function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldString = inputField.value;
  const inputFieldMoney = parseFloat(inputFieldString);
  return inputFieldMoney;
}

function setInnerTextValue(id, value) {
  const outputField = document.getElementById(id);
  outputField.innerText = value.toFixed(2);
}


function validation(errors) {
  for (let error of errors) {
    if (isNaN(error) || error < 0 || error == "") {
      return false;
    }
  }
  return true;
}
