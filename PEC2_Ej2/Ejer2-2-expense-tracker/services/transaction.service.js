/**
 * @class Service
 *
 * Manages the data of the application.
 */

class TransactionService {
    constructor() {
        this.transactions = (JSON.parse(localStorage.getItem("transactions")) || [])
        .map( transaction => new Transaction(transaction)); 
    }

    bindTransactionListChanged(callback) {
        this.onTransactionListChanged = callback;
    }

    _commit(transactions) {
        this.onTransactionListChanged(transactions);
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }

    addTransaction(text, amount) {
        this.transactions.push(new Transaction({text, amount}));
        this._commit(this.transactions);
    }

    deleteTransaction(_id) {
        this.transactions = this.transactions.filter( ({id}) => id !== _id );
        this._commit(this.transactions);
    }
}