class Expense {
    constructor(key, description, location, amount, date) {
        this.key = key;
        this.description = description;
        this.location = location;
        this.amount = amount;
        this.date = date;
    }
}

const randomID = () => {
    return Math.floor(Math.random() * 1000000);
};

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
        const btnDiv = document.createElement("div");

        newDiv.classList.add('expense-output-item');
        btnDiv.classList.add("delete-button");

        const expenseDescription = document.createElement("h3");
        expenseDescription.textContent = expense.description;

        const expenseLocation = document.createElement("h3");
        expenseLocation.textContent = expense.location;

        const expenseAmount = document.createElement("h3");
        expenseAmount.textContent = expense.amount;

        const expenseDate = document.createElement("h3");
        expenseDate.textContent = expense.date;

        const deleteBtn = CreateExpenseItem.createButton("delete-btn", "Del");

        deleteBtn.addEventListener("click", (e) =>
            CreateExpenseItem.deleteExpense(e.target)
        );

        btnDiv.appendChild(deleteBtn);
        newDiv.appendChild(expenseDescription);
        newDiv.appendChild(expenseLocation);
        newDiv.appendChild(expenseAmount);
        newDiv.appendChild(expenseDate);
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

    static clearFields() {
        document.querySelector("#description").value = "";
        document.querySelector("#location").value = "";
        document.querySelector("#amount").value = "";
        document.querySelector("#date").value = "";
    }
}

document.querySelector("#submit-button").addEventListener("click", () => {
    const key = randomID();
    const description = document.querySelector("#description").value;
    const location = document.querySelector("#location").value;
    const amount = document.querySelector("#amount").value;
    const date = document.querySelector("#date").value;

    if (description === "" && location === "" && amount === "" && date === "") {
        alert("add");
    } else {
        const newExpenseItem = new Expense(
            key,
            description,
            location,
            amount,
            date
        );
        CreateExpenseItem.addExpense(newExpenseItem);
        CreateExpenseItem.clearFields();
    }
});