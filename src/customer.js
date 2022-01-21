export class Customer {
    #name;

    constructor(name) {
        if (typeof name === "string") {
            this.#name = name;
        } else {
            throw new Error('Customer name must be a string.');
        }

    }

    getName() {
        return this.#name;
    }

}