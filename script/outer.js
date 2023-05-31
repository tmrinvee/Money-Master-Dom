document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    const income = getInputValue("income");
    const food = getInputValue("food");
    const rent = getInputValue("rent");
    const clothes = getInputValue("clothes");
    const expense = food + rent + clothes;
    const validInput = validation([income, food, rent, clothes]);

    if (validInput === false) {
      alert("Please input numeric positive balance");
    } else {
      if (expense > income) {
        alert("You do not have enough money");
      } else {
        setInnerTextValue("expense", expense);
        const balance = income - expense;
        setInnerTextValue("balance", balance);
      }
    }
  });

/* Now set event handler to the save-button*/

document.getElementById("save-button").addEventListener("click", function () {
  const income = getInputValue("income");
  const save = getInputValue("save");
  const previousBanlance = document.getElementById("balance").innerText;

  const validInput = validation([income, save, previousBanlance]);

  if (validInput === false) {
    alert("Please input numeric positive balance");
  } else {
    const saveAmount = (income * save) / 100;
    if (previousBanlance - saveAmount < 0) {
      alert("You do not have enough balance");
    }
    else {
    setInnerTextValue("save-amount", saveAmount);
    const remainingAmount = previousBanlance - saveAmount;
    setInnerTextValue("remaining-amount", remainingAmount);
  }
}
});
