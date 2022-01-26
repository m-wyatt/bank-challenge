export class Transaction {
    #date;
    #amount

    constructor(date, amount) {
        this.#date = date;
        this.#amount = amount;
    }
}