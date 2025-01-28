const balanceEl = document.querySelector('h2');
const incomeEl = document.querySelector('.Curr-bal p');
const expenseEl = document.querySelector('.Exp-bal p');
const form = document.getElementById('form');
const descriptionInput = document.getElementById('des');
const amountInput = document.getElementById('amount');
const dateInput = document.getElementById('date');
const transactionTypeSelect = document.getElementById('transaction-type');
const categorySelect = document.getElementById('category');
const transactionList = document.getElementById('Amount-Exp');
form.addEventListener('submit', addTransaction);

dateInput.valueAsDate = new Date();

let transactions = [];
function updateValues() {
    const amounts = transactions.map(transaction => 
        transaction.type === 'income' ? transaction.amount : -transaction.amount
    );

    const total = amounts.reduce((acc, item) => acc + item, 0);
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => acc + item, 0);
    const expense = amounts
        .filter(item => item < 0)
        .reduce((acc, item) => acc + Math.abs(item), 0);

    balanceEl.innerText = `₹${total.toFixed(2)}`;
    incomeEl.innerHTML = `Income <br> ₹${income.toFixed(2)}`;
    expenseEl.innerHTML = `Expense <br> ₹${expense.toFixed(2)}`;
}

function addTransaction(e) {
    e.preventDefault();

    const description = descriptionInput.value.trim();
    const amount = +amountInput.value;
    const type = transactionTypeSelect.value;
    const category = categorySelect.value;
    const date = dateInput.value;

    if (description === '' || amount === 0 || !date) {
        alert('Please fill in all fields');
        return;
    }

    const transaction = {
        id: Date.now(),
        description,
        amount,
        type,
        category,
        date
    };

    transactions.push(transaction);
    addTransactionDOM(transaction);
    updateValues();
    descriptionInput.value = '';
    amountInput.value = '';
    dateInput.valueAsDate = new Date();
}

function addTransactionDOM(transaction) {
    const sign = transaction.type === 'income' ? '+' : '-';
    const item = document.createElement('li');
    
    item.classList.add(transaction.type);
    
    item.innerHTML = `
        <div class="transaction-info">
            <div class="transaction-details">
                <span class="date">${transaction.date}</span>
                <span class="description">${transaction.description}</span>
            </div>
            <div class="transaction-details">
                <span class="amount">${sign}₹${transaction.amount}</span>
                <span class="category-tag">${transaction.category}</span>
                <button class="delete-btn" onclick="removeTransaction(${transaction.id})">×</button>
            </div>
        </div>
    `;

    transactionList.appendChild(item);
}
function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    init();
}
function init() {
    transactionList.innerHTML = '';
    transactions.forEach(addTransactionDOM);
    updateValues();
}
init();
