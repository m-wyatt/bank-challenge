export class Customer {
    #name;
    #currentBalance;
    #transactions = [];

    constructor(name, currentBalance = 0) {
        if (typeof name === "string") {
            this.#name = name;
        } else {
            throw new Error('Customer name must be a string.');
        }
        // QUESTION: Is there a better way to restrict type of parameters?

        if (typeof currentBalance === "number") {
            this.#currentBalance = currentBalance;
        } else {
            throw new Error('Current balance must be a number.');
        }
        this.#transactions = this.#transactions;

    }

    getName() {
        return this.#name;
    }

    getCurrentBalance() {
        return this.#currentBalance;
    }

    getTransactions() {
        return this.#transactions;
    }

    addTransaction(transaction) {
        this.#transactions.push(transaction);
        return transaction.newBalance;
        this.#currentBalance = transaction.newBalance;
    }

}