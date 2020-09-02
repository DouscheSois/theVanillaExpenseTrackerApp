class Expense {
  constructor(key, description, location, amount, date) {
    this.key = key;
    this.description = description;
    this.location = location;
    this.amount = amount;
    this.date = date;
  }
}

class CreateExpenseItem {
  static createButton(buttonName, desc) {
    const btn = document.createElement("button");
    btn.id = buttonName;
    btn.classList.add(buttonName);
    btn.textContent = desc;
    return btn;
  }

  static createExpense(expense) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("expense-output-item");

    const btnDiv = document.createElement("div");
    btnDiv.classList.add("delete-button");

    const expenses = Object.values(expense);
    newDiv.innerHTML = expenses
      .map((expense) => `<h3>${expense}</h3>`)
      .join("");

    const deleteBtn = CreateExpenseItem.createButton("delete-btn", "Del");

    deleteBtn.addEventListener("click", (e) =>
      CreateExpenseItem.deleteExpense(e.target)
    );

    btnDiv.appendChild(deleteBtn);

    newDiv.appendChild(btnDiv);
    return newDiv;
  }

  static addExpense(expense) {
    const newExpense = document.querySelector(".expense-output");
    const newDiv = CreateExpenseItem.createExpense(expense);

    newExpense.appendChild(newDiv);
  }

  static deleteExpense(element) {
    element.parentElement.parentElement.remove();
  }
}

document.querySelector("#submit-button").addEventListener("click", (e) => {
  e.preventDefault();

  const key = Math.floor(Math.random() * 1000000);
  const description = document.querySelector("#description").value;
  const location = document.querySelector("#location").value;

  let amount = document.querySelector("#amount").value;
  amount = parseFloat(amount).toFixed(2);

  let date = document.querySelector("#date").value;
  date = Intl.DateTimeFormat("en-US").format(new Date());

  if (description === "" || location === "" || amount === "" || date === "") {
    alert("Fields cannot be empty");
  } else {
    const newExpenseItem = new Expense(
      key,
      description,
      location,
      amount,
      date
    );
    CreateExpenseItem.addExpense(newExpenseItem);

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
  }
});
