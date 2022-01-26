export class Transaction {
    #date;
    #amount;


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


    }

    getDate() {
        return this.#date;
    }

    getAmount() {
        return this.#amount;
    }


}