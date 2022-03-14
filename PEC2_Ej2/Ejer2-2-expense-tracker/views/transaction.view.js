/**
 * @class View
 *
 * Visual representation of the model.
 */
class TransactionView {
    constructor() {
        const balance = document.getElementById('balance');
        const money_plus = document.getElementById('money-plus');
        const money_minus = document.getElementById('money-minus');
        this.balance = document.getElementById('balance');
        this.money_plus = document.getElementById('money-plus');
        this.money_minus = document.getElementById('money-minus');
        this.list = document.getElementById('list');
        this.form = document.getElementById('form');
        this.text = document.getElementById('text');
        this.amount = document.getElementById('amount');
    }

    get _transactionText() {
        return this.text.value;
    }

    get _transactionAmount() {
        return this.amount.value;
    }

    _resetInputs() {
        this.text.value = "";
        this.amount.value = "";
    }

    _createElement(tag, className) {
        const element = document.createElement(tag);
    
        if (className) element.classList.add(className);
    
        return element;
    }

    displayTransactions(transactions) {

        // Delete all nodes
        while (this.list.firstChild) {
            this.list.removeChild(this.list.firstChild);
        }

        // Create nodes
        transactions.forEach( transaction => {
            // Get sign
            const sign = transaction.amount < 0 ? '-' : '+';

            const item = this._createElement("li");
            item.id = transaction.id;

            // Add class based on value
            item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

            item.innerHTML = `
                ${transaction.text} <span>${sign}${Math.abs(
                transaction.amount
                )}</span> <button class="delete-btn" onclick="removeTransaction(${
                transaction.id
                })">x</button>
            `;

            this.list.appendChild(item);

        });
    }

    bindAddTransaction(handler) {
        this.form.addEventListener('submit', event => {
            event.preventDefault();
            

            if (this._transactionText && this._transactionAmount) {

                handler(this._transactionText, this._transactionAmount);
                this._resetInputs();
            }

        });

    }

    bindDeleteTransaction(handler) {
        this.list.addEventListener("click", event => {
            if (event.target.className === "delete-btn") {
                const id = event.target.parentElement.id;
        
                handler(id);
              }
        });

    }

    // Update the balance, income and expense
    updateValues(transactions) {
        const amounts = transactions.map(transaction => transaction.amount);
    
        const total = amounts.reduce((acc, item) => (acc += +item), 0).toFixed(2) ;
    
        const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += +item), 0).toFixed(2);
    
        const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += +item), 0) * -1).toFixed(2);
    
        this.balance.innerText = `$${total}`;
        this.money_plus.innerText = `$${income}`;
        this.money_minus.innerText = `$${expense}`;
    }

    


}

  