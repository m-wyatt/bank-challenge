import { Transaction } from "./transaction.js";

export class Customer {
    #name;
    #currentBalance;
    #transactions = [];

    constructor(name, currentBalance = 0) {
        // Probably shouldn't check input type here (as per Ed's explanation, but too late now...)
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
        // if (transaction instanceof Transaction) {
        // Adding above condition makes my tests fail since they use MockTransaction...
        const newBalance = this.#currentBalance + transaction.getAmount();
        if (newBalance >= 0) {
            this.#transactions.push(transaction);
            this.#currentBalance = newBalance;
            transaction.setNewBalance(newBalance);
        }
        return this.#currentBalance;
        // } else throw new Error('Only instances of Transaction class can be added to customer transactions.');
    }
}