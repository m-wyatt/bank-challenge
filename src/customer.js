import { Transaction } from "./transaction.js";

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
        // ANSWER: Probably shouldn't check input type here anyway (as per Ed's explanation, but it's done now...)

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
        if (newBalance >= 0 || transaction.getAmount() >= 0) {
            // Credit will always be added even if acct. balance already negative (just in case...)
            this.#currentBalance = newBalance;
            transaction.setNewBalance(newBalance);
        } else {
            transaction.setNewBalance("void");
            // and currentBalance remains unchanged
        }
        this.#transactions.push(transaction);
        return this.#currentBalance;

        // } else throw new Error('Only instances of Transaction class can be added to customer transactions.');
    }
}