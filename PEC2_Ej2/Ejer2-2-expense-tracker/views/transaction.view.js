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
            try {
                this.list.removeChild(this.list.firstChild);
            } catch(error) {
                console.log(error);
            }
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
                <input type="text" name="transaction-text"
                value="${transaction.text}"></input>
                <input type="text" name="transaction-amount"
                oninput="" 
                value="${sign}${Math.abs(transaction.amount)}"></input>
                <button class="delete-btn">x</button>
            `;
 
            this.list.appendChild(item);
        });
    }

    bindAddTransaction(handler) {
        this.form.addEventListener('submit', event => {
            event.preventDefault();
            if (text.value.trim() === '' || amount.value.trim() === '') {
                alert('Please add a text and amount');
              } else {
                if (this._transactionText && this._transactionAmount) {

                    handler(this._transactionText, this._transactionAmount);
                    this._resetInputs();
                }
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

   
    bindEditTransaction(handler) {
        this.list.addEventListener("focusout", event => {
            const parentElement =  event.target.parentElement;
            const id = parentElement.id;
            const inputText = parentElement.querySelector("input[name='transaction-text']").value;
            const inputAmount = parentElement.querySelector("input[name='transaction-amount']").value;
            if (inputText.trim() === '' || inputAmount.trim() === '' || isNaN(inputAmount) ) {
                alert('Please add a text and valid amount');
                handler();
                
              } else {
                handler(id, inputText, inputAmount);
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

  