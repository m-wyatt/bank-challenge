export class Transaction {
    #date;
    #amount;
    #newBalance;

    constructor(date, amount) {
        if (date instanceof Date) {
            this.#date = date;
        } else {
            throw new Error('Transaction date must be instance of Date object.');
        }

        if (typeof amount === 'number') {
            this.#amount = amount;
        } else {
            throw new Error('Transaction amount must be a number.');
        }

        this.#newBalance = null;

    }

    getDate() {
        return this.#date;
    }

    getAmount() {
        return this.#amount;
    }

    getNewBalance() {
        return this.#newBalance;
    }

    setNewBalance(newBalance) {
        this.#newBalance = newBalance;
    }

}